"""Email delivery for the contact form.

Laravel-style `MAIL_*` config via backend/.env:

    MAIL_MAILER=smtp        # "smtp" sends via SMTP; "log" persists only (dev default)
    MAIL_HOST=smtp.yourprovider.com
    MAIL_PORT=587
    MAIL_USERNAME=your-smtp-user
    MAIL_PASSWORD=your-smtp-password
    MAIL_ENCRYPTION=tls     # tls (STARTTLS) | ssl | none
    MAIL_FROM_ADDRESS=no-reply@foundryfx.org
    MAIL_FROM_NAME=FoundryFX
    MAIL_TO=Desk@foundryfx.org   (defaults to the desk inbox)

Every option needs an SMTP host — no host, no delivery. With MAIL_MAILER=log
(or unset + no MAIL_HOST) the message is persisted to Mongo and skipped for
email, so local/dev stays green until a real relay is configured.
"""

import logging
import os
import smtplib
from email.message import EmailMessage

logger = logging.getLogger(__name__)


def mail_settings() -> dict:
    host = os.getenv("MAIL_HOST", "")
    driver = os.getenv("MAIL_MAILER", "").strip().lower()
    if not driver:
        driver = "smtp" if host else "log"
    return {
        "driver": driver,
        "host": host,
        "port": int(os.environ.get("MAIL_PORT", "587")),
        "username": os.getenv("MAIL_USERNAME", ""),
        "password": os.getenv("MAIL_PASSWORD", ""),
        "encryption": os.getenv("MAIL_ENCRYPTION", "tls").strip().lower() or "tls",
        "from_address": os.getenv("MAIL_FROM_ADDRESS", "no-reply@foundryfx.org"),
        "from_name": os.getenv("MAIL_FROM_NAME", "FoundryFX"),
        "to": os.getenv("MAIL_TO", "Desk@foundryfx.org"),
    }


def contact_email_enabled() -> bool:
    settings = mail_settings()
    return settings["driver"] == "smtp" and bool(settings["host"])


def send_contact_email(name: str, email: str, message: str, company: str = "") -> None:
    settings = mail_settings()
    if settings["driver"] != "smtp":
        raise RuntimeError("MAIL_MAILER is not 'smtp'; message not emailed")
    if not settings["host"]:
        raise RuntimeError("MAIL_HOST not configured; message not emailed")

    body = "\n".join(
        [f"From: {name} ({email})", f"Company: {company or 'n/a'}", "", message]
    )

    msg = EmailMessage()
    msg["Subject"] = f"FoundryFX contact — {name}"
    msg["From"] = f'{settings["from_name"]} <{settings["from_address"]}>'
    msg["To"] = settings["to"]
    msg["Reply-To"] = email
    msg.set_content(body)

    encryption = settings["encryption"]
    if encryption == "ssl":
        _send(msg, settings, smtplib.SMTP_SSL(settings["host"], settings["port"], timeout=30))
    else:
        with smtplib.SMTP(settings["host"], settings["port"], timeout=30) as smtp:
            if encryption == "tls":
                smtp.starttls()
            _auth_and_send(msg, settings, smtp)

    logger.info("contact email to %s from %s", settings["to"], email)


def _auth_and_send(msg: EmailMessage, settings: dict, smtp: smtplib.SMTP) -> None:
    if settings["username"]:
        smtp.login(settings["username"], settings["password"])
    smtp.send_message(msg)


def _send(msg: EmailMessage, settings: dict, smtp) -> None:
    try:
        _auth_and_send(msg, settings, smtp)
    finally:
        smtp.close()
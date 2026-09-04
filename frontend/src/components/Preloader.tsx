import { motion } from "motion/react";
import { HexMark } from "./HexMark";

/* Boot screen — hex mark draws in, wordmark tracks out, bar fills, then lifts away. */
export default function Preloader() {
  return (
    <motion.div
      data-testid="preloader"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <HexMark className="h-12 w-12 text-white" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-6 text-[10px] font-medium uppercase tracking-[0.55em] text-slateblue-500"
      >
        Foundry
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.25, duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 h-px w-24 origin-left bg-slateblue-500/60"
      />
    </motion.div>
  );
}

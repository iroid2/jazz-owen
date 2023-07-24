"use client";

import { motion, AnimatePresence,useAnimation } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          exit={{ opacity: 0, y: 15 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

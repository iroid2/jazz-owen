"use client";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
export default function Hero() {
  const headingVariants = {
    hidden: {
      letterSpacing: "30px",
      opacity: 0,
    },
    animate: {
      letterSpacing: "8px",
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  const linkVariants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.5, type: "tween" },
    },
  };
  const taglineVariants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.25 },
    },
  };

  return (
    <section className="hero-section">
      <motion.h1 variants={headingVariants} initial="hidden" animate="animate">
        Uganda
      </motion.h1>
      <motion.h2 variants={taglineVariants} initial="hidden" animate="animate">
        <em>Wilderness Safari Experience</em>
      </motion.h2>
      <motion.div
        className="mt-3"
        variants={linkVariants}
        initial="initial"
        animate="animate"
      >
        <Link href="#">Explore Safari Tours</Link>
      </motion.div>
    </section>
  );
}

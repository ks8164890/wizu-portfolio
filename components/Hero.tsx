"use client";

import { motion } from "motion/react";
import { profile } from "@/lib/content";
import SocialDock from "./SocialDock";

const lines = ["BUILDING IN", "WEB3 SINCE", "15."];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const lineVariant = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100vh] flex-col justify-between overflow-hidden px-6 pb-10 pt-28 md:px-14 md:pt-36">
      {/* top row: name + status */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between font-mono text-xs tracking-widest2 text-muted"
      >
        <span className="text-bone">{profile.name}</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          STATUS: {profile.status}
        </span>
      </motion.div>

      {/* headline */}
      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-10 font-display text-[14vw] font-bold leading-[0.92] tracking-tightest text-bone md:text-[7.2vw]"
      >
        {lines.map((line) => (
          <span key={line} className="block overflow-hidden">
            <motion.span variants={lineVariant} className="block">
              {line}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      {/* bottom row: role + socials */}
      <div className="mt-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="max-w-sm font-body text-sm text-muted"
        >
          {profile.role} — {profile.location}. Self-taught. No fixed niche. Solving problems through building.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <SocialDock />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 font-mono text-[10px] tracking-widest2 text-muted md:block"
      >
        SCROLL ↓
      </motion.div>
    </section>
  );
}

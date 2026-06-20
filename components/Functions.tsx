"use client";

import { motion } from "motion/react";
import { functions } from "@/lib/content";

export default function Functions() {
  return (
    <section className="border-t border-line px-6 py-28 md:px-14">
      <div className="mb-12 font-mono text-xs tracking-widest2 text-muted">WHAT_I_DO</div>

      <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-3">
        {functions.map((f, i) => (
          <motion.div
            key={f.fn}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="group bg-surface p-7 transition-colors hover:bg-surface2"
          >
            <div className="font-mono text-sm text-gold">{f.fn}</div>
            <div className="mt-1 font-mono text-[10px] text-muted">{"// returns: value"}</div>
            <p className="mt-5 font-body text-sm leading-relaxed text-bone">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import { socials, contact, profile } from "@/lib/content";

export default function Connect() {
  return (
    <footer className="border-t border-line px-6 py-20 md:px-14">
      <div className="mb-14 font-mono text-xs tracking-widest2 text-muted">CONNECT</div>

      <p className="max-w-md font-display text-3xl leading-tight text-bone md:text-4xl">
        {contact.cta}
      </p>

      <div className="mt-12 flex flex-col">
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group flex items-baseline justify-between border-t border-line py-5 first:border-t-0"
          >
            <span className="font-display text-2xl text-bone transition-colors group-hover:text-gold md:text-3xl">
              {s.label}
            </span>
            <span className="font-mono text-xs text-muted transition-colors group-hover:text-teal">
              {s.value} ↗
            </span>
          </motion.a>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-2 font-mono text-[10px] text-muted/60 md:flex-row md:items-center">
        <span>
          {profile.name} © {new Date().getFullYear()}
        </span>
        {contact.email && <span>{contact.email}</span>}
      </div>
    </footer>
  );
}

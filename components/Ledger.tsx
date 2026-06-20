"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ledger } from "@/lib/content";
import { pseudoHash } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Ledger() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rows = sectionRef.current?.querySelectorAll<HTMLDivElement>(".js-row");
    if (!rows) return;

    rows.forEach((row) => {
      const bar = row.querySelector<HTMLDivElement>(".js-confirm-bar");
      const content = row.querySelector<HTMLDivElement>(".js-row-content");

      gsap.fromTo(
        content,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: "100%",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 75%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="px-6 py-28 md:px-14">
      <div className="mb-12 flex items-baseline justify-between font-mono text-xs tracking-widest2 text-muted">
        <span>JOURNEY_LEDGER</span>
        <span>{ledger.length} BLOCKS CONFIRMED</span>
      </div>

      <div>
        {ledger.map((entry) => (
          <div key={entry.block} className="js-row ledger-row relative py-6">
            <div className="js-confirm-bar absolute left-0 top-0 h-px bg-gold" style={{ width: 0 }} />
            <div className="js-row-content grid grid-cols-[auto_1fr] gap-4 md:grid-cols-[80px_100px_160px_1fr] md:items-baseline md:gap-6">
              <span className="font-mono text-xs text-gold">#{entry.block}</span>
              <span className="font-mono text-xs text-muted">{entry.date}</span>
              <span className="font-mono text-xs tracking-widest2 text-teal">{entry.tag}</span>
              <p className="col-span-2 mt-2 font-body text-base text-bone md:col-span-1 md:mt-0">
                {entry.desc}
              </p>
            </div>
            <div className="js-row-content mt-3 font-mono text-[10px] text-muted/60">
              tx {pseudoHash(entry.block + entry.tag)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

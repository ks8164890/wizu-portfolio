import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import Ledger from "@/components/Ledger";
import Functions from "@/components/Functions";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-ink">
        <Hero />
        <Ledger />
        <Functions />
        <Connect />
      </main>
    </SmoothScroll>
  );
}

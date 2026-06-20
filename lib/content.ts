// Edit everything here. No need to touch component code to update copy.

export const profile = {
  name: "WIZU",
  role: "Web3 Builder & Content Creator",
  location: "India",
  status: "AVAILABLE_FOR_WORK", // change to "BOOKED" when not taking clients
};

export const socials = [
  { label: "X", value: "@your_handle", url: "https://x.com/your_handle" },
  { label: "Telegram", value: "@your_handle", url: "https://t.me/your_handle" },
  { label: "Instagram", value: "@your_handle", url: "https://instagram.com/your_handle" },
];

// Each entry renders as a "confirmed block" in the journey ledger.
// date can be a year, "YYYY-MM", or "NOW".
export const ledger = [
  {
    block: "0001",
    date: "2022-10",
    tag: "GENESIS",
    desc: "Entered Web3 at 15. 11th class dropout. Self-taught, no formal CS background.",
  },
  {
    block: "0002",
    date: "2023",
    tag: "FIRST_PAYOUT",
    desc: "+$2,450 from the Aptos airdrop. First real money out of crypto.",
  },
  {
    block: "0003",
    date: "2024",
    tag: "CONTENT_ERA",
    desc: "Started posting on X — Web3 shitposting + paid content. Built a real, engaged audience.",
  },
  {
    block: "0004",
    date: "2025",
    tag: "BUILDER_ERA",
    desc: "Shifted into building — shipping apps and web tools for clients. No fixed niche.",
  },
  {
    block: "0005",
    date: "NOW",
    tag: "CURRENT",
    desc: "Freelance builder. Targeting $5K/mo through shipped products. Open for work.",
  },
];

// "What I do" — rendered as callable functions.
export const functions = [
  {
    fn: "createContent()",
    desc: "Web3 / crypto posts on X. Paid drops + organic shitposting. Engagement-first.",
  },
  {
    fn: "buildTools()",
    desc: "Apps & web tools for clients. Any stack, any niche — best tool for the job.",
  },
  {
    fn: "shipFast()",
    desc: "Idea to deployed product, fast. No bloat, no over-engineering, just signal.",
  },
];

export const contact = {
  email: "you@example.com", // optional, leave blank string to hide
  cta: "Got something to build? DM me.",
};

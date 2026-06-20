type ClassValue = string | undefined | null | false;

export function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}

// Deterministic pseudo tx-hash for visual flavor only — not cryptographic,
// just gives each ledger row a stable "0x..." identifier derived from its content.
export function pseudoHash(input: string, length = 10): string {
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;
  for (let i = 0; i < input.length; i++) {
    const ch = input.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = (h1 ^ (h1 >>> 16)) >>> 0;
  h2 = (h2 ^ (h2 >>> 16)) >>> 0;
  const combined = (BigInt(h1) << 32n) | BigInt(h2);
  return "0x" + combined.toString(16).padStart(16, "0").slice(0, length);
}

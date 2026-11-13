/**
 * Deterministic PRNG (mulberry32). Decorative backgrounds use it so the server
 * and the client render identical markup, with no effect or state needed.
 */
export function seededRandom(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Rounds to 2 decimals so serialized styles stay short and stable. */
export const round2 = (n: number) => Math.round(n * 100) / 100;

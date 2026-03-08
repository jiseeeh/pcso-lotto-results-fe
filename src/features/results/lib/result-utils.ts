import type { GameEntry } from "#/features/results/types";

export const TIME_RE = /^\d{1,2}:\d{2}\s?(AM|PM)$/i;
export const isTimeKey = (k: string) => TIME_RE.test(k);

const PRIZE_PREFIXES = ["2nd", "3rd", "4th", "5th"] as const;
export const isPrizeKey = (k: string) =>
  PRIZE_PREFIXES.some((p) => k.startsWith(p));

export type CardType = "major" | "4d" | "tabbed";

export function cardType(entry: GameEntry): CardType {
  if ("Winning Combination" in entry) return "major";
  if ("First Prize" in entry) return "4d";
  return "tabbed";
}

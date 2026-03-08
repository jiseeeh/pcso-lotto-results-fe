import { FourDCard } from "#/features/results/components/FourDCard";
import { MajorLottoCard } from "#/features/results/components/MajorLottoCard";
import { TabbedDrawCard } from "#/features/results/components/TabbedDrawCard";
import { cardType } from "#/features/results/lib/result-utils";
import type { GameEntry } from "#/features/results/types";

export function ResultCard({
  name,
  entry,
}: {
  name: string;
  entry: GameEntry;
}) {
  const type = cardType(entry);
  if (type === "major") return <MajorLottoCard name={name} entry={entry} />;
  if (type === "4d") return <FourDCard name={name} entry={entry} />;
  return <TabbedDrawCard name={name} entry={entry} />;
}

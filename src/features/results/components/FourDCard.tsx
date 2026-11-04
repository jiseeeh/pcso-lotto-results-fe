import { DrawNumbers } from "#/features/results/components/DrawNumbers";
import {
  GameCardShell,
  KeyFigure,
  winnersLabel,
} from "#/features/results/components/GameCardShell";
import { isTimeKey } from "#/features/results/lib/result-utils";
import type { GameEntry } from "#/features/results/types";

export function FourDCard({ name, entry }: { name: string; entry: GameEntry }) {
  const drawTimeKey = Object.keys(entry).find(isTimeKey);
  const combination = drawTimeKey ? entry[drawTimeKey] : null;
  const winners = entry["Number of Winner(s)"];

  return (
    <GameCardShell name={name} entry={entry} drawTime={drawTimeKey}>
      {combination && <DrawNumbers combination={combination} />}

      <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-1">
        <KeyFigure label="First prize" value={entry["First Prize"]} />
        {winners !== undefined && (
          <span className="pb-1 text-sm whitespace-nowrap text-foreground-secondary">
            {winnersLabel(winners)}
          </span>
        )}
      </div>
    </GameCardShell>
  );
}

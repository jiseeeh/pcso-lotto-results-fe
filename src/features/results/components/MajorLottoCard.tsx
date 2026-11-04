import { DrawNumbers } from "#/features/results/components/DrawNumbers";
import {
  FigureRow,
  GameCardShell,
  KeyFigure,
  winnersLabel,
} from "#/features/results/components/GameCardShell";
import {
  isPrizeKey,
  MAJOR_DRAW_TIME,
} from "#/features/results/lib/result-utils";
import type { GameEntry } from "#/features/results/types";

export function MajorLottoCard({
  name,
  entry,
}: {
  name: string;
  entry: GameEntry;
}) {
  const prizeRows = Object.entries(entry).filter(([k]) => isPrizeKey(k));
  const jackpotWinners = entry["Jackpot Winner (6 out of 6)"];

  return (
    <GameCardShell name={name} entry={entry} drawTime={MAJOR_DRAW_TIME}>
      <DrawNumbers combination={entry["Winning Combination"]} />

      <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-1">
        <KeyFigure label="Jackpot" value={entry["Jackpot Prize"]} />
        {jackpotWinners !== undefined && (
          <span className="pb-1 text-sm whitespace-nowrap text-foreground-secondary">
            {winnersLabel(jackpotWinners)}
          </span>
        )}
      </div>

      {prizeRows.length > 0 && (
        <dl className="divide-y border-t">
          {prizeRows.map(([label, value]) => (
            <FigureRow key={label} label={label} value={value} />
          ))}
        </dl>
      )}
    </GameCardShell>
  );
}

import type { ReactNode } from "react";

import { Card } from "#/components/ui/card";
import { CopyResultButton } from "#/features/results/components/CopyResultButton";
import { baseGameName, cityOf } from "#/features/results/lib/result-utils";
import type { GameEntry } from "#/features/results/types";

export function GameCardShell({
  name,
  entry,
  drawTime,
  children,
}: {
  name: string;
  // ? absent while the card has nothing to copy yet, e.g. the fallback card
  entry?: GameEntry;
  drawTime?: string;
  children: ReactNode;
}) {
  const city = cityOf(name);

  return (
    <Card className="h-full gap-0 py-0 shadow-none">
      <header className="flex h-14 items-center gap-3 border-b pr-3 pl-5">
        <h2 className="min-w-0 flex-1 truncate text-[15px] font-medium">
          {baseGameName(name)}
          {city && (
            <span className="ml-2 font-normal text-muted-foreground">
              {city}
            </span>
          )}
        </h2>
        {drawTime && (
          <span className="font-mono text-xs text-muted-foreground tabular-nums">
            {drawTime} draw
          </span>
        )}
        {entry && <CopyResultButton name={name} entry={entry} />}
      </header>
      <div className="flex flex-1 flex-col gap-5 p-5">{children}</div>
    </Card>
  );
}

// ? one label/value line on the bulletin, value set in mono so columns align
export function FigureRow({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2 text-sm">
      <dt className="text-foreground-secondary">{label}</dt>
      <dd className="font-mono tabular-nums">{value}</dd>
    </div>
  );
}

export function KeyFigure({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="font-mono text-xl font-medium tabular-nums sm:text-[28px] sm:leading-8">
        {value}
      </span>
    </div>
  );
}

// ? the api sends winner counts as strings, usually digits
export function winnersLabel(count: string, noun = "winner") {
  if (!/^\d+$/.test(count)) return count;
  const n = Number(count);
  if (n === 0) return `No ${noun}`;
  return `${n.toLocaleString("en-PH")} ${noun}${n === 1 ? "" : "s"}`;
}

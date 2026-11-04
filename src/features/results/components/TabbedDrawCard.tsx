import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { DrawNumbers } from "#/features/results/components/DrawNumbers";
import { GameCardShell } from "#/features/results/components/GameCardShell";
import { isTimeKey } from "#/features/results/lib/result-utils";
import type { GameEntry } from "#/features/results/types";

export function TabbedDrawCard({
  name,
  entry,
}: {
  name: string;
  entry: GameEntry;
}) {
  const draws = Object.entries(entry).filter(([k]) => isTimeKey(k));
  const defaultTab = draws[0]?.[0] ?? "";

  return (
    <GameCardShell name={name} entry={entry}>
      <Tabs defaultValue={defaultTab} className="gap-4">
        <TabsList
          className="w-full justify-start gap-0 border-b p-0"
          variant="line"
        >
          {draws.map(([time]) => (
            <TabsTrigger
              key={time}
              value={time}
              className="flex-none px-3 font-mono text-xs tabular-nums first:pl-0 group-data-[orientation=horizontal]/tabs:after:-bottom-px first:after:left-0"
            >
              {time}
            </TabsTrigger>
          ))}
        </TabsList>
        {draws.map(([time, combo]) => (
          <TabsContent key={time} value={time}>
            <DrawNumbers combination={combo} />
          </TabsContent>
        ))}
      </Tabs>
    </GameCardShell>
  );
}

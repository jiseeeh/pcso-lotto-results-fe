import { Button } from "#/components/ui/button";
import { ScrollArea, ScrollBar } from "#/components/ui/scroll-area";
import { GAME_FILTERS } from "#/features/results/lib/game-config";

type GameFilterProps = {
  activeGame: string;
  onChange: (game: string) => void;
};

export function GameFilter({ activeGame, onChange }: GameFilterProps) {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-2 pb-2">
        {GAME_FILTERS.map(({ label, value }) => {
          const active = activeGame === value;
          return (
            <Button
              key={value}
              size="sm"
              variant={active ? "default" : "outline"}
              aria-pressed={active}
              onClick={() => onChange(value)}
            >
              {label}
            </Button>
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

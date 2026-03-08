import { Button } from "#/components/ui/button";
import { ScrollArea, ScrollBar } from "#/components/ui/scroll-area";
import { GAME_FILTERS } from "#/features/results/lib/game-config";

type GameFilterProps = {
  activeGame: string;
  onChange: (game: string) => void;
};

export function GameFilter({ activeGame, onChange }: GameFilterProps) {
  return (
    <ScrollArea className="w-full my-4 rounded-md border whitespace-nowrap">
      <div className="flex space-x-4 p-4">
        {GAME_FILTERS.map(({ label, value }) => (
          <Button
            key={value}
            variant={activeGame === value ? "default" : "outline"}
            onClick={() => onChange(value)}
          >
            {label}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

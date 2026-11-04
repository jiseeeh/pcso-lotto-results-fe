import { CircleAlert } from "lucide-react";

import { GameCardShell } from "#/features/results/components/GameCardShell";

export function FallbackCard({ name }: { name: string }) {
  return (
    <GameCardShell name={name}>
      <p className="flex h-10 items-center gap-2 text-sm text-muted-foreground sm:h-12">
        <CircleAlert size={16} strokeWidth={1.5} />
        Couldn't load this result
      </p>
    </GameCardShell>
  );
}

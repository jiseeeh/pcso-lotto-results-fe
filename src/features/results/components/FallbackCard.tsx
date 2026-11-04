import { AlertCircle } from "lucide-react";

import { GameCardShell } from "#/features/results/components/GameCardShell";

export function FallbackCard({ name }: { name: string }) {
  return (
    <GameCardShell name={name}>
      <div className="flex flex-col items-center justify-center gap-2 py-8 text-muted-foreground">
        <AlertCircle size={24} className="text-destructive" />
        <p className="text-sm text-destructive">Failed to load results.</p>
      </div>
    </GameCardShell>
  );
}

import { cn } from "#/lib/utils";

// ? the api marks a draw that has not happened yet with "Stand by…" or asterisks
const isPending = (combination: string) =>
  combination.includes("Stand by") || combination.includes("*");

export function DrawNumber({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex h-10 min-w-10 items-center justify-center rounded-md border bg-background px-2 font-mono text-lg font-medium tabular-nums text-foreground sm:h-12 sm:min-w-12 sm:text-xl",
        className,
      )}
    >
      {value}
    </span>
  );
}

export function DrawNumbers({ combination }: { combination: string }) {
  if (isPending(combination)) {
    return (
      <p className="flex h-10 items-center sm:h-12 rounded-md border border-dashed px-4 text-sm text-muted-foreground">
        Not drawn yet
      </p>
    );
  }

  const numbers = combination.split("-").map((n) => n.trim());

  return (
    <ol className="flex flex-wrap gap-2" aria-label={numbers.join(", ")}>
      {numbers.map((n, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: draw order is fixed
        <li key={i}>
          <DrawNumber value={n} />
        </li>
      ))}
    </ol>
  );
}

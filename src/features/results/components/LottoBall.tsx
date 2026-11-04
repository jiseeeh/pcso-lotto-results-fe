import { cn } from "#/lib/utils";

export function LottoBall({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-12 h-12 flex rounded-3xl border-2 border-(--lagoon) items-center justify-center bg-(--lagoon)/20",
        className,
      )}
    >
      <span className="font-black text-lg">{value}</span>
    </div>
  );
}

export function BallRow({ combination }: { combination: string }) {
  if (combination.includes("Stand by…") || combination.includes("*")) {
    return (
      <div className="flex items-center flex-wrap justify-center gap-3 mt-4">
        <span className="text-sm text-muted-foreground">
          {" "}
          No results yet...
        </span>
      </div>
    );
  }

  const balls = combination.split("-").map((b) => b.trim());
  return (
    <div className="flex items-center flex-wrap justify-center gap-3 mt-4">
      {balls.map((b, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: order is fixed
        <LottoBall key={i} value={b} />
      ))}
    </div>
  );
}

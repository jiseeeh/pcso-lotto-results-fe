import { baseGameName } from "#/features/results/lib/result-utils";

export function SkeletonCard({ name }: { name: string }) {
  return (
    <div className="flex h-full flex-col rounded-xl border bg-card">
      <div className="flex h-14 items-center border-b px-5">
        <span className="text-[15px] font-medium text-muted-foreground">
          {baseGameName(name)}
        </span>
      </div>
      <div className="flex flex-col gap-5 p-5 animate-pulse">
        <div className="flex gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: skeleton
            <div key={i} className="size-10 rounded-md bg-muted sm:size-12" />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-4 w-16 rounded bg-muted" />
          <div className="h-7 w-48 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}

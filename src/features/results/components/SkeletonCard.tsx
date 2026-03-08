export function SkeletonCard({ name }: { name: string }) {
  return (
    <div className="rounded-xl border shadow-sm overflow-hidden animate-pulse">
      <div className="h-10 bg-(--sand) px-4 flex items-center">
        <span className="font-black text-sm opacity-40">{name}</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="h-3 w-1/3 rounded bg-muted" />
        <div className="flex gap-2 justify-center py-2">
          {Array.from({ length: 6 }).map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: skeleton
            <div key={i} className="w-12 h-12 rounded-3xl bg-muted" />
          ))}
        </div>
        <div className="h-3 w-1/2 mx-auto rounded bg-muted" />
        <div className="h-px bg-muted" />
        <div className="space-y-2">
          <div className="h-3 rounded bg-muted" />
          <div className="h-3 rounded bg-muted" />
          <div className="h-3 w-3/4 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}

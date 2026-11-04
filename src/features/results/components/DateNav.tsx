import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "#/components/ui/button";

type DateNavProps = {
  machineDate: string;
  displayDate: string;
  weekday: string;
  isToday: boolean;
  onPrev: () => void;
  onNext: () => void;
  copiedCount: number;
  onClearCopied: () => void;
};

export function DateNav({
  machineDate,
  displayDate,
  weekday,
  isToday,
  onPrev,
  onNext,
  copiedCount,
  onClearCopied,
}: DateNavProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-3">
      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">
          {isToday ? `Today, ${weekday}` : weekday}
        </p>
        <h1 className="text-[28px] leading-9 font-medium sm:text-[32px] sm:leading-10">
          <time dateTime={machineDate}>{displayDate}</time>
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <p
          className="mr-2 flex items-center gap-2 text-sm text-foreground-secondary"
          aria-live="polite"
        >
          {copiedCount > 0 && (
            <>
              <span className="tabular-nums">{copiedCount} copied</span>
              <button
                type="button"
                onClick={onClearCopied}
                className="rounded-sm text-foreground underline underline-offset-2 transition-colors hover:text-primary"
              >
                Clear
              </button>
            </>
          )}
        </p>
        <Button
          variant="outline"
          size="icon"
          onClick={onPrev}
          aria-label="Previous day"
        >
          <ChevronLeft strokeWidth={1.5} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          disabled={isToday}
          onClick={onNext}
          aria-label="Next day"
        >
          <ChevronRight strokeWidth={1.5} />
        </Button>
      </div>
    </div>
  );
}

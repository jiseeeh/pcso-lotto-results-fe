import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import {
  DateNav,
  FallbackCard,
  GameFilter,
  ResultCard,
  SkeletonCard,
} from "#/features/results/components";
import { useCopyBuffer } from "#/features/results/hooks/useCopyBuffer";
import { useResults } from "#/features/results/hooks/useResults";
import { LOCALE, LOCALE_OPTIONS } from "#/lib/constants";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const [date, setDate] = useState<Date | null>(null);
  const [game, setGame] = useState("all");

  useEffect(() => {
    setDate(new Date());
  }, []);

  const machineDate = useMemo(() => {
    if (!date) return "";
    return date.toISOString().split("T")[0];
  }, [date]);

  const displayDate = useMemo(() => {
    if (!date) return "";
    return date.toLocaleDateString(LOCALE, {
      ...LOCALE_OPTIONS,
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }, [date]);

  const weekday = useMemo(() => {
    if (!date) return "";
    return date.toLocaleDateString(LOCALE, {
      ...LOCALE_OPTIONS,
      weekday: "long",
    });
  }, [date]);

  const today = useMemo(() => new Date().toDateString(), []);

  const { data, error, isLoading, filteredGames, missingGames } = useResults(
    displayDate,
    game,
  );

  const { copied, clearAll } = useCopyBuffer();

  const handlePrevDay = () => {
    if (!date) return;
    const next = new Date(date);
    next.setDate(date.getDate() - 1);
    setDate(next);
  };

  const handleNextDay = () => {
    if (!date) return;
    const next = new Date(date);
    next.setDate(date.getDate() + 1);
    setDate(next);
  };

  if (!date) return null;

  const visibleGames = filteredGames(game);

  return (
    <main className="page-wrap flex flex-1 flex-col gap-5 pt-10 pb-16">
      <DateNav
        machineDate={machineDate}
        displayDate={displayDate}
        weekday={weekday}
        isToday={date.toDateString() === today}
        onPrev={handlePrevDay}
        onNext={handleNextDay}
        copiedCount={copied.length}
        onClearCopied={clearAll}
      />

      <GameFilter activeGame={game} onChange={setGame} />

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {visibleGames.map((name) => {
          if (isLoading) return <SkeletonCard key={name} name={name} />;
          if (error) return <FallbackCard key={name} name={name} />;
          const entry = data?.results[name];
          if (!entry) return null;
          return <ResultCard key={name} name={name} entry={entry} />;
        })}
      </section>

      {missingGames.length > 0 && (
        <p className="text-sm text-muted-foreground">
          No results for {missingGames.join(", ")} on this date
        </p>
      )}
    </main>
  );
}

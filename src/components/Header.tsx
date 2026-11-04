import { RefreshCw, WifiOff } from "lucide-react";
import { useEffect, useState } from "react";
import { sileo } from "sileo";
import { useResults } from "#/features/results/hooks/useResults";
import { LOCALE, LOCALE_OPTIONS } from "#/lib/constants";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

export default function Header() {
  const [isOnline, setIsOnline] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [displayDate, setDisplayDate] = useState("");
  const { refetch } = useResults(displayDate, "all");

  useEffect(() => {
    setIsOnline(navigator.onLine);
    setDisplayDate(
      new Intl.DateTimeFormat(LOCALE, {
        ...LOCALE_OPTIONS,
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date()),
    );

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm">
      <div className="page-wrap flex h-14 items-center justify-between gap-4">
        <p className="flex items-baseline gap-2">
          <span className="text-base font-semibold">Lotto Results</span>
          <span className="hidden text-sm text-muted-foreground sm:inline">
            PCSO draws, daily
          </span>
        </p>
        <div className="flex items-center gap-2">
          {!isOnline && (
            <span className="mr-2 flex items-center gap-2 text-sm text-muted-foreground">
              <WifiOff size={16} strokeWidth={1.5} />
              Offline
            </span>
          )}
          <Button
            size="icon-sm"
            variant="ghost"
            aria-label="Refresh results"
            title="Refresh results"
            disabled={isRefreshing}
            onClick={async () => {
              setIsRefreshing(true);

              const res = await refetch();

              setIsRefreshing(false);

              if (res.error) {
                sileo.error({
                  title: "Couldn't refresh",
                  description:
                    "The results service didn't respond. Try again in a moment.",
                });
                return;
              }

              sileo.success({
                title: "Results refreshed",
              });
            }}
          >
            <RefreshCw
              strokeWidth={1.5}
              className={isRefreshing ? "animate-spin" : undefined}
            />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { Card, CardDescription } from "#/components/ui/card";

type DateNavProps = {
  machineDate: string;
  displayDate: string;
  isToday: boolean;
  onPrev: () => void;
  onNext: () => void;
};

export function DateNav({
  machineDate,
  displayDate,
  isToday,
  onPrev,
  onNext,
}: DateNavProps) {
  return (
    <Card className="flex items-center">
      <CardDescription className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onPrev}>
          <ChevronLeft size={18} />
        </Button>
        <div>
          <time
            dateTime={machineDate}
            className="text-sm flex items-center text-muted-foreground gap-2"
          >
            <Calendar size={18} className="mr-1" />
            {displayDate}
            {isToday && <Badge>Today</Badge>}
          </time>
        </div>
        <Button variant="ghost" size="icon" disabled={isToday} onClick={onNext}>
          <ChevronRight size={18} />
        </Button>
      </CardDescription>
    </Card>
  );
}

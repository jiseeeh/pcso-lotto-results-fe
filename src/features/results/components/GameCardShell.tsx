import type { ReactNode } from "react";

import { Card, CardDescription, CardHeader } from "#/components/ui/card";

function CardAccent() {
  return (
    <div className="border rounded-tl-2xl rounded-br-2xl top-0 left-0 h-full absolute w-2 bg-(--lagoon)" />
  );
}

export function GameCardShell({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <Card className="p-0 h-full">
      <CardHeader className="py-2 relative rounded-tl-2xl bg-(--sand)">
        <CardAccent />
        <span className="font-black">{name}</span>
      </CardHeader>
      <CardDescription className="px-2 pb-4">{children}</CardDescription>
    </Card>
  );
}

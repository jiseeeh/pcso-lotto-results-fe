import { createFileRoute } from "@tanstack/react-router";
import { Calendar, ChevronLeft, ChevronRight, Clock } from "lucide-react";

import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { Card, CardDescription, CardHeader } from "#/components/ui/card";
import { ScrollArea, ScrollBar } from "#/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export const Route = createFileRoute("/")({ component: App });

function App() {
  const today = new Date();

  const machineDate = today.toISOString().split("T")[0];

  const displayDate = today.toLocaleDateString("en-PH", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <Card className="flex items-center">
        <CardDescription className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <ChevronLeft size={18} />
          </Button>

          <div>
            <time
              dateTime={machineDate}
              className="text-sm flex items-center text-muted-foreground gap-2"
            >
              <Calendar size={18} className="mr-1" />
              {displayDate}
              <Badge>Today</Badge>
            </time>
          </div>

          <Button variant="ghost" size="icon">
            <ChevronRight size={18} />
          </Button>
        </CardDescription>
      </Card>

      <ScrollArea className="w-full my-4 rounded-md border whitespace-nowrap">
        <div className="flex space-x-4 p-4">
          <Button>All Games</Button>
          <Button variant="outline">6/58 Ultra</Button>
          <Button variant="outline">6/49 Super</Button>
          <Button variant="outline">6/42 Lotto</Button>
          <Button variant="outline">6D</Button>
          <Button variant="outline">4D</Button>
          <Button variant="outline">3D</Button>
          <Button variant="outline">2D</Button>
          <Button variant="outline">STL Swertres</Button>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <section>
          <Card className="p-0">
            <CardHeader className="py-2 relative rounded-tl-2xl bg-(--sand)">
              <div className="border rounded-tl-2xl rounded-br-2xl top-0 left-0 h-full absolute w-2 bg-(--lagoon)"></div>
              <span className="font-black">6/58 Ultra Lotto</span>
            </CardHeader>
            <CardDescription className="px-2 pb-4">
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Clock size={18} className="mr-1" />
                Drawn at 9:00 PM
              </div>
              <section className="flex items-center flex-wrap justify-center gap-3 mt-4">
                {[8, 17, 23, 35, 42, 56].map((num) => (
                  <div
                    key={num}
                    className="w-12 h-12 flex rounded-3xl border-2 border-(--lagoon) items-center justify-center bg-(--lagoon)/20"
                  >
                    <span className="font-black text-lg">{num}</span>
                  </div>
                ))}
              </section>
              <hr className="my-3" />
              <span className="text-sm text-muted-foreground text-center block">
                Jackpot Prize:{" "}
                <span className="font-bold text-(--lagoon)">
                  ₱ 100,000,000.00
                </span>
              </span>
            </CardDescription>
          </Card>
        </section>

        <section>
          <Card className="p-0">
            <CardHeader className="py-2 relative rounded-tl-2xl bg-(--sand)">
              <div className="border rounded-tl-2xl rounded-br-2xl top-0 left-0 h-full absolute w-2 bg-(--lagoon)"></div>
              <span className="font-black">6/58 Ultra Lotto</span>
            </CardHeader>
            <CardDescription className="px-2 pb-4 ">
              <Tabs defaultValue="2:00PM" className="">
                <TabsList className="w-full" variant="line">
                  <TabsTrigger value="2:00PM">2:00PM</TabsTrigger>
                  <TabsTrigger value="5:00PM">5:00PM</TabsTrigger>
                  <TabsTrigger value="9:00PM">9:00PM</TabsTrigger>
                </TabsList>
                <TabsContent value="2:00PM">
                  <section className="flex items-center flex-wrap justify-center gap-3 mt-4">
                    {[8, 28].map((num) => (
                      <div
                        key={num}
                        className="w-12 h-12 flex rounded-3xl border-2 border-(--lagoon) items-center justify-center bg-(--lagoon)/20"
                      >
                        <span className="font-black text-lg">{num}</span>
                      </div>
                    ))}
                  </section>
                </TabsContent>
                <TabsContent value="5:00PM">
                  <section className="flex items-center flex-wrap justify-center gap-3 mt-4">
                    {[15, 21].map((num) => (
                      <div
                        key={num}
                        className="w-12 h-12 flex rounded-3xl border-2 border-(--lagoon) items-center justify-center bg-(--lagoon)/20"
                      >
                        <span className="font-black text-lg">{num}</span>
                      </div>
                    ))}
                  </section>
                </TabsContent>
                <TabsContent value="9:00PM">
                  <section className="flex items-center flex-wrap justify-center gap-3 mt-4">
                    {[1, 11].map((num) => (
                      <div
                        key={num}
                        className="w-12 h-12 flex rounded-3xl border-2 border-(--lagoon) items-center justify-center bg-(--lagoon)/20"
                      >
                        <span className="font-black text-lg">{num}</span>
                      </div>
                    ))}
                  </section>
                </TabsContent>
              </Tabs>
            </CardDescription>
          </Card>
        </section>
      </section>
    </main>
  );
}

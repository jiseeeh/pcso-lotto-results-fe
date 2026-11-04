import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <main className="page-wrap flex flex-1 flex-col gap-6 pt-10 pb-16">
      <h1 className="text-[28px] leading-9 font-medium sm:text-[32px] sm:leading-10">
        About
      </h1>
      <div className="flex max-w-xl flex-col gap-4 text-[15px] leading-6 text-foreground-secondary">
        <p>
          Lotto Results shows the winning numbers for each PCSO draw on a given
          day: the major 6-number games, 6D, 4D, 3D, 2D and STL Swer3, along
          with jackpots and prize tiers where PCSO publishes them.
        </p>
        <p>
          The numbers come from the results PCSO posts after each draw. They are
          collected automatically, so always confirm a winning ticket with PCSO
          before you claim it.
        </p>
      </div>
      <Link
        to="/"
        className="w-fit text-sm text-foreground underline underline-offset-4 transition-colors hover:text-primary"
      >
        Back to today's results
      </Link>
    </main>
  );
}

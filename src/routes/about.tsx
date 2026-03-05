import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});
function About() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center gap-6">
        <p className="island-kicker mb-2">About</p>
        <h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink-soft) sm:text-5xl">
          🚧 Under Construction 🚧
        </h1>
        <img
          src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
          alt="Anime under construction"
          className="rounded-xl max-w-xs w-full shadow-lg"
        />
        <p className="m-0 max-w-3xl text-base leading-8 text-(--sea-ink-soft)">
          This page is currently being built. Check back soon!
        </p>
      </section>
    </main>
  );
}

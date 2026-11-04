export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="page-wrap flex flex-col gap-2 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          Results as published by PCSO. Check your ticket against the official
          draw before claiming.
        </p>
        <p className="flex items-center gap-4">
          <span>&copy; {year} Jiseeeh</span>
          <a
            href="https://github.com/stackovermaw"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm text-foreground-secondary transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

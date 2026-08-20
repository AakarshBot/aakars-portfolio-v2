export function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-xs text-[var(--muted)] md:flex-row md:items-end md:justify-between">
        <div>
          <span className="block text-sm font-semibold tracking-[-0.01em] text-black/80">Aakarsh Bommakanti</span>
          <span className="mt-1 block">Sports media · content · publishing</span>
        </div>
        <div className="flex items-center gap-6">
          <a className="transition-colors hover:text-black" href="#top">Back to top ↑</a>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}

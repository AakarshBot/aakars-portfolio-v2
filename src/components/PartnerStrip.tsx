import { partners } from "@/data/portfolio";

export function PartnerStrip() {
  return (
    <section className="border-y border-black/10" aria-label="Selected organisations">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 lg:flex-row lg:items-center lg:gap-10 lg:px-10">
        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          Selected work across
        </span>
        <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-medium tracking-[-0.01em] text-black/65 lg:gap-x-9">
          {partners.map((partner) => <span key={partner.name}>{partner.name}</span>)}
        </div>
      </div>
    </section>
  );
}

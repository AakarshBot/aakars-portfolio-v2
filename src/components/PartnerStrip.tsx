import { partners } from "@/data/portfolio";

export function PartnerStrip() {
  return (
    <section className="border-y border-black/10" aria-label="Selected organisations">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-6 py-7 text-sm text-[var(--muted)] lg:px-10">
        {partners.map((partner) => <span key={partner.name}>{partner.name}</span>)}
      </div>
    </section>
  );
}

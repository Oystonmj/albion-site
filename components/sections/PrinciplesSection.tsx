import { Section } from "@/components/ui/Section";
import { H2, H3 } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";

type Principle = { id: string; title: string; why: string; pitfall: string; alternative: string };

export function PrinciplesSection({ items }: { items: Principle[] }) {
  return (
    <Section id="principles" surface>
      <H2>Five power principles</H2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((p) => (
          <Card key={p.id}>
            <H3>{p.title}</H3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><span className="font-semibold">Why:</span> {p.why}</li>
              <li><span className="font-semibold">Cartel pitfall:</span> {p.pitfall}</li>
              <li><span className="font-semibold">Albion alternative:</span> {p.alternative}</li>
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
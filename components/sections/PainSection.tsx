import { Section } from "@/components/ui/Section";
import { H2 } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";

export function PainSection({ items }: { items: { id: string; lead: string; body: string }[] }) {
  return (
    <Section surface className="border-t border-border">
      <H2>What the Expansion Cartel creates</H2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Card key={p.id}>
            <p className="font-semibold">{p.lead}</p>
            <p className="mt-2 text-sm text-muted">{p.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
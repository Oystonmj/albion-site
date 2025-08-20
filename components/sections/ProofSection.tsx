import { Section } from "@/components/ui/Section";
import { H2 } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";

type Proof = { id: string; title: string; metric?: string; detail: string };
type Testimonial = { id: string; quote: string; attribution: string };

export function ProofSection({ data }: { data: { proofs: Proof[]; testimonials: Testimonial[] } }) {
  return (
    <Section id="proof">
      <H2>Proof</H2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {data.proofs.map((p) => (
          <Card key={p.id}>
            <p className="font-semibold">{p.title}{p.metric ? ` — ${p.metric}` : ""}</p>
            <p className="mt-2 text-sm text-muted">{p.detail}</p>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {data.testimonials.map((t) => (
          <blockquote key={t.id} className="card p-6 text-sm">
            <p>“{t.quote}”</p>
            <footer className="mt-2 text-muted">— {t.attribution}</footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
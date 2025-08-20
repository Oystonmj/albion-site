import { Section } from "@/components/ui/Section";
import { H2 } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";

export function PersonaSection({ data }: { data: { title: string; body: string; pillars?: string[] } }) {
  return (
    <Section>
      <div className="flex items-start justify-between gap-6">
        <div>
          <H2>{data.title}</H2>
          <p className="mt-4 text-base text-muted max-w-2xl">{data.body}</p>
        </div>
        {data.pillars && data.pillars.length > 0 && (
          <div className="hidden md:flex flex-wrap gap-2">
            {data.pillars.map((p, i) => (
              <Badge key={i}>{p}</Badge>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
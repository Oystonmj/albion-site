import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getCtaAttrs } from "@/lib/metrics";

export function FinalCTASection({ data }: { data: { body: string; ctas: any[] } }) {
  const primary = data.ctas.find((c) => c.variant === "primary");
  const secondary = data.ctas.find((c) => c.variant === "secondary");

  return (
    <Section id="contact" surface className="border-t border-border">
      <div className="max-w-3xl">
        <p className="text-lg">{data.body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            as="a"
            href={primary.href}
            {...getCtaAttrs("final_word", "cta_primary")}
          >
            {primary.label}
          </Button>
          <Button
            as="a"
            variant="secondary"
            href={secondary.href}
            {...getCtaAttrs("final_word", "cta_secondary")}
          >
            {secondary.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
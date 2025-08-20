import { Section } from "@/components/ui/Section";
import { H1 } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { getCtaAttrs } from "@/lib/metrics";

export function HookSection({ data }: { data: { heading: string; subheading: string; ctas: any[] } }) {
  const primary = data.ctas.find((c) => c.variant === "primary");
  const secondary = data.ctas.find((c) => c.variant === "secondary");

  return (
    <Section>
      <div className="grid gap-8 md:grid-cols-12 md:gap-12 items-center">
        <div className="md:col-span-7">
          <H1>{data.heading}</H1>
          <p className="lead mt-4">{data.subheading}</p>
          <div className="mt-8 flex gap-3">
            <Button
              as="a"
              href={primary.href}
              {...getCtaAttrs("hook", "primary")}
            >
              {primary.label}
            </Button>
            <Button
              as="a"
              variant="secondary"
              href={secondary.href}
              {...getCtaAttrs("hook", "secondary")}
            >
              {secondary.label}
            </Button>
          </div>
        </div>
        <div className="md:col-span-5">
          <div aria-hidden className="card aspect-[4/3] w-full" />
        </div>
      </div>
    </Section>
  );
}
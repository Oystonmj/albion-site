import { Container } from "./Container";
import { clsx } from "clsx";

export function Section({
  id,
  className,
  surface = false,
  children
}: {
  id?: string;
  className?: string;
  surface?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={clsx(surface && "bg-surface", className)}>
      <Container className="py-16 md:py-24">{children}</Container>
    </section>
  );
}
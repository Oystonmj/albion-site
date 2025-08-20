import { clsx } from "clsx";

export function H1({ children, className }: any) {
  return <h1 className={clsx("font-heading text-4xl md:text-5xl leading-tight", className)}>{children}</h1>;
}
export function H2({ children, className, id }: any) {
  return <h2 id={id} className={clsx("font-heading text-3xl md:text-4xl leading-tight", className)}>{children}</h2>;
}
export function H3({ children, className }: any) {
  return <h3 className={clsx("font-heading text-2xl leading-snug", className)}>{children}</h3>;
}
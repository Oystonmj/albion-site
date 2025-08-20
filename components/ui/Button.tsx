import { clsx } from "clsx";
import { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface Props extends ComponentProps<"button"> {
  as?: "button" | "a";
  href?: string;
  variant?: Variant;
  size?: Size;
}

export function Button({
  as = "button",
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus)] ring-offset-[var(--bg)]";
  const variants: Record<Variant, string> = {
    primary:
      "bg-brand text-white border-transparent hover:bg-[var(--brand-600)]",
    secondary:
      "bg-surface text-text border-border hover:border-[var(--text)]",
    ghost:
      "bg-transparent text-text border-transparent hover:bg-surface"
  };
  const sizes: Record<Size, string> = {
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base"
  };

  const classes = clsx(base, variants[variant], sizes[size], className);

  if (as === "a" && href) {
    return (
      <a href={href} className={classes} {...(props as any)} />
    );
  }
  return <button className={classes} {...props} />;
}
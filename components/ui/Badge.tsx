import { clsx } from "clsx";
export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={clsx("inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-muted", className)}>
      {children}
    </span>
  );
}
import { clsx } from "clsx";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={clsx("card p-6 md:p-8", className)}>{children}</div>;
}
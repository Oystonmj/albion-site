import { clsx } from "clsx";
export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("container", className)} {...props} />;
}
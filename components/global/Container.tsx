import { cn } from "@/lib/utils";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto md:max-w-6xl xl:max-w-7xl px-2 md:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}
export default Container;

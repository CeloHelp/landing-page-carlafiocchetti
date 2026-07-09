type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: SectionProps) {
  return (
    <div className={`mx-auto w-[min(calc(100%_-_32px),var(--container))] ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3.5 inline-flex items-center gap-2 text-xs font-bold uppercase leading-tight tracking-[0.08em] text-foreground before:h-px before:w-7 before:bg-accent">
      {children}
    </p>
  );
}

export function Heading({
  children,
  id,
  level = 2,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  level?: 1 | 2 | 3;
  className?: string;
}) {
  const Tag = `h${level}` as const;
  const size =
    level === 1
      ? "max-w-[9.6em] text-[clamp(42px,11vw,74px)]"
      : level === 2
        ? "text-[clamp(32px,7vw,52px)]"
        : "text-[22px] tracking-[-0.01em]";

  return (
    <Tag
      id={id}
      className={`text-balance font-serif font-semibold leading-[1.08] tracking-[-0.018em] ${size} ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Lead({ children, className = "" }: SectionProps) {
  return (
    <p
      className={`max-w-[65ch] text-[clamp(17px,4vw,21px)] leading-[1.55] text-[color-mix(in_srgb,var(--foreground)_82%,var(--surface))] ${className}`}
    >
      {children}
    </p>
  );
}

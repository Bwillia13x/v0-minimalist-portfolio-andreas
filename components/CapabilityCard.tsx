export function CapabilityCard({
  number,
  title,
  blurb,
  chips,
  example
}: {
  number: string;
  title: string;
  blurb: string;
  chips: string[];
  example: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[var(--ps-border)] bg-[var(--ps-surface)] p-5 md:p-6">
      <div className="flex items-start gap-3">
        <span className="text-sm text-[var(--ps-muted)]">{number}</span>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-[var(--ps-text)]">{title}</h3>
          <p className="text-muted-foreground leading-relaxed mt-1">{blurb}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {chips.map(c => (
              <span
                key={c}
                className="text-xs border border-[var(--ps-border)]/80 rounded-full px-2 py-1 text-[var(--ps-muted)]"
              >
                {c}
              </span>
            ))}
          </div>
          <details className="mt-3 group">
            <summary className="cursor-pointer text-sm text-[var(--ps-primary)] hover:underline">
              Real Example
            </summary>
            <div className="mt-2 text-sm text-[var(--ps-text)]/90 leading-6 border-l pl-3 border-[var(--ps-border)]">
              {example}
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

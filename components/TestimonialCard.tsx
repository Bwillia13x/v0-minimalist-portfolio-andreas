export function TestimonialCard({
  quote,
  author,
  role,
  city,
  metric
}: {
  quote: string;
  author: string;
  role: string;
  city: string;
  metric: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--ps-border)] bg-[var(--ps-surface)] p-6">
      <div className="text-sm text-[var(--ps-muted)] font-mono mb-3 uppercase tracking-wider">
        {role} • {city}
      </div>
      <blockquote className="text-[var(--ps-text)] leading-relaxed mb-4 italic">
        "{quote}"
      </blockquote>
      <div className="text-sm font-medium text-[var(--ps-primary)]">
        {metric}
      </div>
    </div>
  );
}

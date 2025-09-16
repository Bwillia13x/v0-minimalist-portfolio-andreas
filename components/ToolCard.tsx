import Link from "next/link";

export function ToolCard({
  title,
  description,
  href,
  type,
  action = "Open →",
  onClick
}: {
  title: string;
  description: string;
  href: string;
  type: string;
  action?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group block rounded-2xl border border-[var(--ps-border)] bg-[var(--ps-surface)] p-6 hover:border-[var(--ps-primary)]/50 transition-all duration-500 hover:shadow-lg"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-medium group-hover:text-[var(--ps-primary)] transition-colors duration-300">
            {title}
          </h3>
          <span className="text-xs px-2 py-1 bg-[var(--ps-primary)]/10 text-[var(--ps-primary)] rounded-full">
            {type}
          </span>
        </div>
        <p className="text-[var(--ps-muted)] leading-relaxed">{description}</p>
        <div className="flex items-center gap-2 text-sm text-[var(--ps-muted)] group-hover:text-[var(--ps-primary)] transition-colors duration-300">
          <span>{action}</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

import { Badge } from "@/components/ui/badge";

export function AssistantCard({
  icon,
  title,
  description,
  bullets,
  approvalPath
}: {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  approvalPath: string;
}) {
  return (
    <div className="group p-6 border border-[var(--ps-border)] rounded-lg hover:border-[var(--ps-primary)]/50 transition-all duration-500 hover:shadow-lg bg-[var(--ps-surface)]">
      <div className="flex items-start gap-4">
        <div className="text-3xl flex-shrink-0">{icon}</div>
        <div className="flex-1 space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-medium group-hover:text-[var(--ps-text)] transition-colors duration-300">
                {title}
              </h3>
              <Badge variant="outline" className="text-xs">
                Human-in-the-loop
              </Badge>
            </div>
            <p className="text-[var(--ps-muted)] leading-relaxed text-sm">{description}</p>
          </div>

          <div className="space-y-2">
            {bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-[var(--ps-muted)]">
                <div className="w-1.5 h-1.5 bg-[var(--ps-primary)] rounded-full flex-shrink-0"></div>
                {bullet}
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-[var(--ps-border)]/50">
            <div className="text-xs text-[var(--ps-muted)]">
              <span className="font-medium">Approval Path:</span> {approvalPath}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

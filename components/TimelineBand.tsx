import { pitchData } from "@/data/pitch";

export function TimelineBand() {
  const phases = pitchData.phases;
  const totalWeeks = pitchData.timelineWeeks.length - 1; // 0 to 6 = 7 weeks

  return (
    <div className="py-8">
      <div className="flex items-center justify-between text-xs text-[var(--ps-muted)] mb-4">
        {pitchData.timelineWeeks.map((week) => (
          <span key={week} className="flex-1 text-center">
            Week {week}
          </span>
        ))}
      </div>

      <div className="relative h-3 bg-[var(--ps-border)] rounded-full overflow-hidden">
        {/* Phase bars */}
        {phases.map((phase, index) => {
          const startWeek = index === 0 ? 0 : index === 1 ? 1 : 3;
          const duration = index === 0 ? 1 : index === 1 ? 2 : 4;
          const leftPercent = (startWeek / totalWeeks) * 100;
          const widthPercent = (duration / totalWeeks) * 100;

          return (
            <div
              key={phase.id}
              className="absolute top-0 h-full bg-gradient-to-r from-[var(--ps-primary)] to-[var(--ps-primary-weak)] rounded-sm"
              style={{
                left: `${leftPercent}%`,
                width: `${widthPercent}%`
              }}
            />
          );
        })}

        {/* Week markers */}
        {pitchData.timelineWeeks.map((week) => (
          <div
            key={week}
            className="absolute top-0 w-px h-full bg-[var(--ps-bg)]"
            style={{ left: `${(week / totalWeeks) * 100}%` }}
          />
        ))}
      </div>

      <div className="flex justify-between mt-2 text-xs text-[var(--ps-muted)]">
        {phases.map((phase, index) => (
          <span key={phase.id} className="text-center">
            {phase.title}
          </span>
        ))}
      </div>
    </div>
  );
}

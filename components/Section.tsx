export function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className="border-t border-[var(--ps-border)] scroll-mt-16"
    >
      <div className="max-w-screen-lg mx-auto px-4 md:px-6 py-14 md:py-20">
        {(eyebrow || title) && (
          <header className="mb-8">
            {eyebrow && (
              <p className="text-xs tracking-widest text-[var(--ps-muted)] uppercase mb-2 font-mono">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-[clamp(24px,3.6vw,34px)] font-semibold tracking-tight text-[var(--ps-text)]">
                {title}
              </h2>
            )}
          </header>
        )}
        <div className="space-y-6">{children}</div>
      </div>
    </section>
  );
}
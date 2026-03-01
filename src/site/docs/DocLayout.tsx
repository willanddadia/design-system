import { ReactNode } from 'react';

// ─── Section ────────────────────────────────────────────────────────────────
export function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-12" aria-labelledby={title.toLowerCase().replace(/\s+/g, '-')}>
      <h2 id={title.toLowerCase().replace(/\s+/g, '-')} className="mb-1">
        {title}
      </h2>
      {description && <p className="text-muted-foreground mb-6">{description}</p>}
      {!description && <div className="mb-6" />}
      {children}
    </section>
  );
}

// ─── Example Block ───────────────────────────────────────────────────────────
export function Example({
  title,
  code,
  children,
}: {
  title?: string;
  code?: string;
  children: ReactNode;
}) {
  return (
    <div className="border-2 border-border rounded-xl overflow-hidden mb-6">
      {/* Preview */}
      <div className="p-6 bg-background">
        {title && (
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
            {title}
          </p>
        )}
        {children}
      </div>
      {/* Code */}
      {code && (
        <div className="border-t-2 border-border bg-muted/30">
          <pre className="p-4 text-sm overflow-x-auto leading-relaxed">
            <code className="text-foreground">{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

// ─── Prop Table ──────────────────────────────────────────────────────────────
export interface PropDef {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export function PropTable({ props }: { props: PropDef[] }) {
  return (
    <div className="border-2 border-border rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/40 border-b-2 border-border">
            <th className="text-left px-4 py-3 font-medium text-muted-foreground">Prop</th>
            <th className="text-left px-4 py-3 font-medium text-muted-foreground">Type</th>
            <th className="text-left px-4 py-3 font-medium text-muted-foreground">Default</th>
            <th className="text-left px-4 py-3 font-medium text-muted-foreground">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p, i) => (
            <tr key={p.name} className={i % 2 === 0 ? '' : 'bg-muted/10'}>
              <td className="px-4 py-3 font-mono text-primary">{p.name}</td>
              <td className="px-4 py-3 font-mono text-muted-foreground text-xs">{p.type}</td>
              <td className="px-4 py-3 font-mono text-muted-foreground text-xs">
                {p.default ?? '—'}
              </td>
              <td className="px-4 py-3 text-foreground">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Page Hero ───────────────────────────────────────────────────────────────
export function PageHero({
  title,
  description,
  badge,
}: {
  title: string;
  description: string;
  badge?: string;
}) {
  return (
    <div className="mb-10 pb-8 border-b-2 border-border" role="banner">
      {badge && (
        <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground bg-muted px-3 py-1 rounded-full">
          {badge}
        </span>
      )}
      <h1 className="mb-2">{title}</h1>
      <p className="text-muted-foreground max-w-2xl">{description}</p>
    </div>
  );
}

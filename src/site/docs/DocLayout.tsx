import { ReactNode } from 'react';
import { Heading, Paragraph, Text } from '@lib/components/ui/typography';
import { Padded } from '@lib/components/layout/index';

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
  const id = title.toLowerCase().replace(/\s+/g, '-');
  return (
    <Padded asChild padding="none">
      <section aria-labelledby={id}>
        <Heading id={id} as="h2">
          {title}
        </Heading>
        {description && (
          <Paragraph variant="muted">
            {description}
          </Paragraph>
        )}
        {!description && <div className="mb-6" />}
        {children}
      </section>
    </Padded>
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
    <Padded bordered padding="none">
      {/* Preview */}
      <Padded padding="lg">
        {title && (
          <Text
            as="p"
            variant="muted"
            size="xs"
            uppercase
            weight="medium"
          >
            {title}
          </Text>
        )}
        {children}
      </Padded>
      {/* Code */}
      {code && (
        <Padded padding="none">
          <pre className="p-4 text-sm overflow-x-auto leading-relaxed">
            <code className="text-foreground">{code}</code>
          </pre>
        </Padded>
      )}
    </Padded>
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
    <Padded bordered padding="none">
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
    </Padded>
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
    <Padded padding="none" role="banner">
      {badge && (
        <Text
          as="span"
          variant="muted"
          size="xs"
          weight="semibold"
          uppercase
        >
          {badge}
        </Text>
      )}
      <Heading as="h1">
        {title}
      </Heading>
      <Paragraph variant="muted">
        {description}
      </Paragraph>
    </Padded>
  );
}

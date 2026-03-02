import { ReactNode } from 'react';
import { Heading, Paragraph, Text } from '@lib/components/ui/typography';
import { Padded, Flex } from '@lib/components/layout/index';
import { cn } from '@lib/utils/utils';

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
    <section aria-labelledby={id} className="scroll-mt-24 w-full">
      <Flex direction="col" gap="md">
        <Flex direction="col" gap="sm">
          <Heading id={id} as="h2" internalClassName="text-2xl font-bold tracking-tight">
            {title}
          </Heading>
          {description && (
            <Paragraph variant="muted" internalClassName="text-base max-w-2xl">
              {description}
            </Paragraph>
          )}
        </Flex>
        <div className="pt-2 w-full">
          {children}
        </div>
      </Flex>
    </section>
  );
}

// ─── Example Block ───────────────────────────────────────────────────────────
export function Example({
  title,
  code,
  children,
  className,
  previewClassName,
}: {
  title?: string;
  code?: string;
  children: ReactNode;
  className?: string;
  previewClassName?: string;
}) {
  return (
    <Flex
      direction="col"
      gap="none"
      internalClassName={cn(
        "border border-border rounded-xl overflow-hidden bg-card shadow-sm group/example hover:border-border/80 transition-colors w-full",
        className
      )}
    >
      {/* Header */}
      {title && (
        <Padded padding="sm" internalClassName="bg-muted/40 border-b border-border/60 w-full">
          <Text
            as="p"
            variant="muted"
            size="xs"
            uppercase
            weight="bold"
            internalClassName="tracking-widest opacity-80 pl-1"
          >
            {title}
          </Text>
        </Padded>
      )}

      {/* Preview Area */}
      <div
        className={cn(
          "min-h-[160px] w-full flex items-center justify-center p-8 relative overflow-hidden bg-white dark:bg-zinc-950",
          previewClassName
        )}
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          backgroundPosition: 'center center'
        }}
      >
        <div className="relative z-10 w-full flex justify-center">
          {children}
        </div>
        {/* Subtle highlight gradient */}
        <div className="absolute w-full inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-0 group-hover/example:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Code Block */}
      {
        code && (
          <div className="w-full border-t border-border/80 bg-[#0d0d0d]">
            <div className="flex justify-between items-center px-4 py-2 bg-white/5 border-b border-white/5">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] font-mono">
                Source Code
              </span>
            </div>
            <div className="p-5 overflow-x-auto">
              <pre className="text-[13px] leading-relaxed font-mono">
                <code className="text-orange-300 font-medium">{code}</code>
              </pre>
            </div>
          </div>
        )
      }
    </Flex >
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
    <header className="pb-8 border-b-2 border-border/50 mb-4">
      <Flex direction="col" gap="md">
        {badge && (
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase tracking-widest w-fit">
            {badge}
          </div>
        )}
        <Flex direction="col" gap="sm">
          <Heading as="h1" internalClassName="text-4xl md:text-5xl font-black tracking-tight">
            {title}
          </Heading>
          <Paragraph variant="muted" internalClassName="text-lg md:text-xl max-w-3xl leading-relaxed">
            {description}
          </Paragraph>
        </Flex>
      </Flex>
    </header>
  );
}

import { Section, PageHero } from './DocLayout';
import { Flex, Grid, Padded } from '@lib/components/layout';

const spacingTokens = [
  { name: 'xs', size: '0.25rem', px: '4px' },
  { name: 'sm', size: '0.5rem', px: '8px' },
  { name: 'md', size: '1rem', px: '16px' },
  { name: 'lg', size: '1.5rem', px: '24px' },
  { name: 'xl', size: '2rem', px: '32px' },
  { name: '2xl', size: '3rem', px: '48px' },
];

const radiusTokens = [
  {
    name: 'sm',
    value: 'calc(var(--radius) - 4px)',
    description: 'Used for small elements like buttons.',
  },
  {
    name: 'md',
    value: 'calc(var(--radius) - 2px)',
    description: 'Used for medium elements like inputs.',
  },
  {
    name: 'lg',
    value: 'var(--radius)',
    description: 'The base radius used for cards and larger containers.',
  },
  { name: 'xl', value: 'calc(var(--radius) + 4px)', description: 'Used for extra large sections.' },
];

export function TokensPage() {
  return (
    <Flex direction="col" gap="xl">
      <PageHero
        badge="Foundation"
        title="Design Tokens"
        description="Design tokens are the visual atoms of our design system — naming and storing visual design attributes to maintain consistency across platforms."
      />

      <Section
        title="Spacing"
        description="Our spacing scale is based on a 4px grid system. Use these tokens for padding, margins, and gaps."
      >
        <Padded padding="none" bordered internalClassName="shadow-sm overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/40 border-b-2 border-border">
              <tr>
                <th className="px-6 py-4 font-medium text-muted-foreground">Token</th>
                <th className="px-6 py-4 font-medium text-muted-foreground">Size</th>
                <th className="px-6 py-4 font-medium text-muted-foreground">Pixels</th>
                <th className="px-6 py-4 font-medium text-muted-foreground">Preview</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-border">
              {spacingTokens.map((token) => (
                <tr key={token.name} className="hover:bg-muted/10 transition-colors">
                  <td className="px-6 py-4 font-mono font-semibold text-primary">{token.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{token.size}</td>
                  <td className="px-6 py-4 text-muted-foreground font-mono text-xs">{token.px}</td>
                  <td className="px-6 py-4">
                    <div
                      className="bg-primary rounded-sm transition-transform hover:scale-110"
                      style={{ width: token.size, height: '1.5rem' }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Padded>
      </Section>

      <Section
        title="Border Radius"
        description="Consistent rounding helps create a cohesive feel across all UI elements."
      >
        <Grid cols={1} mdCols={2} gap="lg">
          {radiusTokens.map((token) => (
            <Padded
              key={token.name}
              padding="lg"
              bordered
              internalClassName="bg-background shadow-sm group"
            >
              <Flex align="center" gap="lg">
                <div
                  className="w-16 h-16 bg-primary transition-all duration-300 group-hover:rotate-6 shadow-md"
                  style={{ borderRadius: token.value }}
                />
                <Flex direction="col" gap="none">
                  <h4 className="font-semibold text-primary flex items-center gap-2">
                    {token.name}
                    <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded uppercase">
                      rounded-{token.name}
                    </span>
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {token.description}
                  </p>
                  <code className="text-[10px] block mt-2 text-primary/70">{token.value}</code>
                </Flex>
              </Flex>
            </Padded>
          ))}
        </Grid>
      </Section>
    </Flex>
  );
}

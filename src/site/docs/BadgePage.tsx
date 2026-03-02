import { Badge } from '@lib/components/ui/badge';
import { Flex } from '@lib/components/layout';
import { Text } from '@lib/components/ui/typography';
import { Section, Example, PropTable, PageHero } from './DocLayout';

const props = [
  {
    name: 'variant',
    type: "'default' | 'secondary' | 'destructive' | 'success' | 'outline'",
    default: "'default'",
    description: 'Controls the color and style of the badge.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '—',
    description: 'Content inside the badge, usually a short label.',
  },
  {
    name: 'className',
    type: 'string',
    default: "''",
    description: 'Additional CSS classes to merge.',
  },
];

export function BadgePage() {
  return (
    <Flex direction="col" gap="none">
      <PageHero
        badge="Display"
        title="Badge"
        description="Badges are small status indicators used to label, categorize, or highlight items with a short piece of text."
      />

      <Section
        title="Variants"
        description="Use variants to communicate status or category at a glance."
      >
        <Example
          title="All Variants"
          code={`<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
        >
          <Flex gap="sm" wrap>
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </Flex>
        </Example>
      </Section>

      <Section
        title="Usage in context"
        description="Badges work great inside table cells, card headers, or alongside text."
      >
        <Example title="Inline with text">
          <Flex direction="col" gap="sm">
            <Text as="p" className="flex items-center gap-2 !mt-0">
              Order #1042 <Badge variant="success">Delivered</Badge>
            </Text>
            <Text as="p" className="flex items-center gap-2 !mt-0">
              Order #1041 <Badge variant="default">Processing</Badge>
            </Text>
            <Text as="p" className="flex items-center gap-2 !mt-0">
              Order #1040 <Badge variant="destructive">Failed</Badge>
            </Text>
          </Flex>
        </Example>
      </Section>

      <Section title="Props">
        <PropTable props={props} />
      </Section>
    </Flex>
  );
}

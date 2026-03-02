import { Heading, Paragraph, Text } from '@lib/components/ui/typography';
import { Flex, Grid, Container, Padded } from '@lib/components/layout';
import { StickyHeader, StickyFooter } from '@lib/components/layout';
import { Section, Example, PageHero, PropTable } from './DocLayout';

const layoutProps = [
  { name: 'direction', type: "'row' | 'col'", default: "'row'", description: 'Flex direction.' },
  { name: 'justify', type: "string", default: "'start'", description: 'Justify-content alignment.' },
  { name: 'align', type: "string", default: "'start'", description: 'Align-items alignment.' },
  { name: 'gap', type: "'none' | 'sm' | 'md' | 'lg' | 'xl'", default: "'none'", description: 'Gap between children.' },
  { name: 'wrap', type: 'boolean', default: 'false', description: 'Whether to wrap children.' },
];

const spacingProps = [
  { name: 'm, mt, mr, mb, ml, mx, my', type: '-2 to 2 (0.25 increments)', default: '-', description: 'Margin props (values in rem).' },
  { name: 'p, pt, pr, pb, pl, px, py', type: '-2 to 2 (0.25 increments)', default: '-', description: 'Padding props (values in rem).' },
];

const overflowProps = [
  { name: 'overflow', type: "'auto' | 'hidden' | 'visible' | 'scroll'", default: '-', description: 'Overflow control.' },
  { name: 'overflowX / overflowY', type: "'auto' | 'hidden' | 'visible' | 'scroll'", default: '-', description: 'X/Y axis overflow control.' },
];

export function LayoutPage() {
  return (
    <div className="space-y-12">
      <PageHero
        badge="Layout"
        title="Layout Wrappers"
        description="Use these components to create consistent spacing, alignment, and structural organization across your application."
      />

      <Section
        title="Flex"
        description="The most versatile layout component for aligning children in a row or column."
      >
        <Example
          title="Basic Flex Alignment"
          code={`<Flex gap="md" align="center" justify="between">
  <div className="w-12 h-12 bg-primary rounded-md" />
  <div className="w-12 h-12 bg-primary/80 rounded-md" />
  <div className="w-12 h-12 bg-primary/60 rounded-md" />
</Flex>`}
        >
          <Padded padding="md" bordered internalClassName="border-dashed">
            <Flex gap="md" align="center" justify="between">
              <div className="w-12 h-12 bg-primary rounded-md" />
              <div className="w-12 h-12 bg-primary/80 rounded-md" />
              <div className="w-12 h-12 bg-primary/60 rounded-md" />
            </Flex>
          </Padded>
        </Example>

        <Example
          title="Vertical Stack"
          code={`<Flex direction="col" gap="sm">
  <Heading size="sm">Column Item 1</Heading>
  <Paragraph size="xs">Supporting text for the first item.</Paragraph>
</Flex>`}
        >
          <Flex direction="col" gap="sm">
            <Heading size="sm">Column Item 1</Heading>
            <Paragraph size="xs">Supporting text for the first item.</Paragraph>
          </Flex>
        </Example>
      </Section>

      <Section
        title="Grid"
        description="Responsive CSS Grid wrapper for creating multi-column layouts."
      >
        <Example
          title="4-Column Grid"
          code={`<Grid cols={2} mdCols={4} gap="md">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
  <Card>Item 4</Card>
</Grid>`}
        >
          <Grid cols={2} mdCols={4} gap="md">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-muted border border-border rounded-lg flex items-center justify-center font-bold">
                {i}
              </div>
            ))}
          </Grid>
        </Example>
      </Section>

      <Section
        title="Container"
        description="A wrapper that provides horizontal margins to center or constrain content."
      >
        <Example
          title="Container Margins"
          code={`<Container margin="sm" bordered>Small Margin</Container>
<Container margin="md" bordered>Medium Margin</Container>
<Container margin="lg">Large Margin</Container>`}
        >
          <Flex direction="col" gap="md">
            <Container margin="sm" bordered>
              <Padded padding="sm">
                <Text size="sm">Small margin with border</Text>
              </Padded>
            </Container>
            <div className="bg-accent/20 rounded-lg overflow-hidden">
              <Container margin="md" bordered>
                <Padded padding="sm">
                  <Text size="sm">Medium margin with border + bg</Text>
                </Padded>
              </Container>
            </div>
            <Container margin="lg">
              <Padded padding="sm">
                <Text size="sm">Large margin, no border</Text>
              </Padded>
            </Container>
          </Flex>
        </Example>
      </Section>

      <Section
        title="Padded"
        description="Adds consistent inner spacing to elements."
      >
        <Example
          title="Padding Levels"
          code={`<Padded padding="sm" bordered>...</Padded>
<Padded padding="md" bordered>...</Padded>
<Padded padding="lg">...</Padded>`}
        >
          <Flex direction="col" gap="sm">
            <Padded padding="sm" bordered>
              <Text size="sm">Small padding with border</Text>
            </Padded>
            <div className="bg-secondary/20 rounded-lg overflow-hidden">
              <Padded padding="md" bordered>
                <Text size="sm">Medium padding with border + bg</Text>
              </Padded>
            </div>
            <Padded padding="lg">
              <Text size="sm">Large padding, no border</Text>
            </Padded>
          </Flex>
        </Example>
      </Section>

      <Section
        title="Sticky Wrappers"
        description="Layout components for fixed-position headers and footers."
      >
        <Example
          title="Sticky Layout Simulation"
          code={`<StickyHeader>Header Content</StickyHeader>
<StickyFooter>Footer Content</StickyFooter>`}
        >
          <div className="h-48 border-2 border-border rounded-xl overflow-y-auto relative bg-card isolate">
            <StickyHeader>
              <div className="px-4 py-2 text-xs font-semibold border-b bg-background/80 backdrop-blur-sm">Sticky Header</div>
            </StickyHeader>
            <div className="p-4 space-y-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Paragraph key={i} size="xs" variant="muted">
                  Scrollable content line {i}... This demonstrates how the header and footer stay pinned while this area scrolls.
                </Paragraph>
              ))}
            </div>
            <StickyFooter>
              <div className="px-4 py-2 text-xs font-semibold border-t bg-background/80 backdrop-blur-sm">Sticky Footer</div>
            </StickyFooter>
          </div>
        </Example>
      </Section>

      <Section title="Spacing Props">
        <PropTable props={spacingProps} />
      </Section>

      <Section title="Overflow Props">
        <PropTable props={overflowProps} />
      </Section>

      <Section title="Flex Props">
        <PropTable props={layoutProps} />
      </Section>
    </div>
  );
}

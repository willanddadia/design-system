import { Flex } from '@lib/components/layout/Flex';
import { Grid } from '@lib/components/layout/Grid';
import { Container } from '@lib/components/layout/Container';
import { Padded } from '@lib/components/layout/Padded';
import { Badge } from '@lib/components/ui/badge';
import { Section, Example, PropTable, PageHero } from './DocLayout';

const flexProps = [
  {
    name: 'direction',
    type: "'row' | 'col' | 'row-reverse' | 'col-reverse'",
    default: "'row'",
    description: 'Flex direction.',
  },
  {
    name: 'justify',
    type: "'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'",
    default: "'start'",
    description: 'Justify-content value.',
  },
  {
    name: 'align',
    type: "'start' | 'center' | 'end' | 'stretch' | 'baseline'",
    default: "'start'",
    description: 'Align-items value.',
  },
  {
    name: 'gap',
    type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'none'",
    description: 'Gap between children.',
  },
  { name: 'wrap', type: 'boolean', default: 'false', description: 'Enables flex-wrap.' },
];

const gridProps = [
  {
    name: 'cols',
    type: '1|2|3|4|5|6|12|"auto"',
    default: "'auto'",
    description: 'Number of columns, or "auto" for auto-fit with min 250px.',
  },
  {
    name: 'gap',
    type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'md'",
    description: 'Gap between grid items.',
  },
  {
    name: 'rows',
    type: '"auto" | number',
    default: "'auto'",
    description: 'Number of explicit rows.',
  },
];

const containerProps = [
  {
    name: 'margin',
    type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'none'",
    description: 'Outer margin size.',
  },
  { name: 'bordered', type: 'boolean', default: 'false', description: 'Adds a 2px border.' },
];

const paddedProps = [
  {
    name: 'padding',
    type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'none'",
    description: 'Inner padding size.',
  },
  { name: 'bordered', type: 'boolean', default: 'false', description: 'Adds a 2px border.' },
];

const Item = ({
  label,
  color = 'bg-primary text-primary-foreground',
}: {
  label: string;
  color?: string;
}) => <div className={`${color} px-4 py-3 rounded-lg text-sm font-medium`}>{label}</div>;

export function LayoutPage() {
  return (
    <div>
      <PageHero
        badge="Layout"
        title="Layout Components"
        description="Flex, Grid, Container, and Padded are the core layout primitives. Compose them to build any layout without writing custom CSS."
      />

      {/* Flex */}
      <Section
        title="Flex"
        description="A flexbox wrapper with props for direction, alignment, justification, gap, and wrapping."
      >
        <Example
          title="Row with gap"
          code={`<Flex direction="row" gap="md">
  <Item />
  <Item />
  <Item />
</Flex>`}
        >
          <Flex direction="row" gap="md">
            <Item label="Item 1" />
            <Item label="Item 2" color="bg-secondary text-secondary-foreground" />
            <Item label="Item 3" color="bg-accent text-accent-foreground" />
          </Flex>
        </Example>
        <Example
          title="Space between"
          code={`<Flex direction="row" justify="between" align="center">
  <span>Left</span>
  <Badge>Right</Badge>
</Flex>`}
        >
          <Flex
            direction="row"
            justify="between"
            align="center"
            className="border-2 border-border rounded-lg px-4 py-3"
          >
            <span>Left Content</span>
            <Badge variant="secondary">Right</Badge>
          </Flex>
        </Example>
        <PropTable props={flexProps} />
      </Section>

      {/* Grid */}
      <Section title="Grid" description="A CSS grid wrapper with column count and gap controls.">
        <Example
          title="3 columns"
          code={`<Grid cols={3} gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>`}
        >
          <Grid cols={3} gap="md">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="bg-muted rounded-lg p-4 text-center text-sm">
                Item {n}
              </div>
            ))}
          </Grid>
        </Example>
        <PropTable props={gridProps} />
      </Section>

      {/* Container */}
      <Section
        title="Container"
        description="Applies outer margin to its content, with an optional border."
      >
        <Example
          title="Margin sizes"
          code={`<Container margin="sm" bordered><p>Small margin</p></Container>
<Container margin="md" bordered><p>Medium margin</p></Container>
<Container margin="lg"><p>Large margin, no border</p></Container>`}
        >
          <div className="space-y-2">
            <Container margin="sm" bordered>
              <p className="text-sm">Small margin with border</p>
            </Container>
            <Container margin="md" bordered className="bg-accent/20">
              <p className="text-sm">Medium margin with border + bg</p>
            </Container>
            <Container margin="lg">
              <p className="text-sm">Large margin, no border</p>
            </Container>
          </div>
        </Example>
        <PropTable props={containerProps} />
      </Section>

      {/* Padded */}
      <Section
        title="Padded"
        description="Applies inner padding to its content, with an optional border."
      >
        <Example
          title="Padding sizes"
          code={`<Padded padding="sm" bordered><p>Small padding</p></Padded>
<Padded padding="md" bordered><p>Medium padding</p></Padded>
<Padded padding="lg"><p>Large padding, no border</p></Padded>`}
        >
          <div className="space-y-2">
            <Padded padding="sm" bordered>
              <p className="text-sm">Small padding with border</p>
            </Padded>
            <Padded padding="md" bordered className="bg-secondary/20">
              <p className="text-sm">Medium padding with border + bg</p>
            </Padded>
            <Padded padding="lg">
              <p className="text-sm">Large padding, no border</p>
            </Padded>
          </div>
        </Example>
        <PropTable props={paddedProps} />
      </Section>
      {/* Sticky Header & Footer */}
      <Section
        title="Sticky Layout"
        description="Helper components for creating sticky headers and footers with built-in backdrop blur."
      >
        <Example
          title="Sticky Header & Footer"
          code={`<StickyHeader className="p-4 border-b">Header Content</StickyHeader>
<StickyFooter className="p-4 border-t">Footer Content</StickyFooter>`}
        >
          <div className="relative h-[200px] border-2 border-border rounded-xl overflow-y-auto bg-muted/10 custom-scrollbar">
            <StickyHeader className="px-4 py-2 text-xs font-semibold border-b">
              Simulation: Sticky Header
            </StickyHeader>
            <div className="p-4 space-y-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-4 bg-muted rounded w-3/4" />
              ))}
            </div>
            <StickyFooter className="px-4 py-2 text-xs font-semibold border-t">
              Simulation: Sticky Footer
            </StickyFooter>
          </div>
        </Example>
      </Section>

      <PropTable
        props={[
          {
            name: 'blur',
            type: 'boolean',
            default: 'true',
            description: 'Whether to apply backdrop-blur and a semi-transparent background.',
          },
          { name: 'children', type: 'ReactNode', default: '—', description: 'Header or footer content.' },
        ]}
      />
    </div>
  );
}

import { StickyHeader } from '@lib/components/layout/StickyHeader';
import { StickyFooter } from '@lib/components/layout/StickyFooter';

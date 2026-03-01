import { Heading, Paragraph, Span, Text } from '@lib/components/ui/typography';
import { Section, Example, PageHero, PropTable } from './DocLayout';

const props = [
  {
    name: 'as',
    type: 'ElementType',
    default: "depends on component",
    description: 'The HTML element to render (h1-h6, p, span, etc.).',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'base' | 'lg' | 'xl' | ... | '9xl'",
    default: 'base',
    description: 'The font size of the text.',
  },
  {
    name: 'weight',
    type: "'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'",
    default: 'normal',
    description: 'The font weight of the text.',
  },
  {
    name: 'variant',
    type: "'default' | 'muted' | 'primary' | 'success' | 'destructive'",
    default: 'default',
    description: 'Color variants for the text.',
  },
];

export function TypographyPage() {
  return (
    <div>
      <PageHero
        badge="Foundation"
        title="Typography"
        description="A robust sets of components to manage text styles, hierarchy, and consistency using the design system's modular scale."
      />

      <Section
        title="Heading"
        description="Use the Heading component for all header levels. It defaults to h2 but can be customized with the 'as' prop."
      >
        <Example
          title="Heading Levels"
          code={`<Heading as="h1">Heading 1</Heading>
<Heading as="h2">Heading 2</Heading>
<Heading as="h3">Heading 3</Heading>`}
        >
          <div className="space-y-4">
            <Heading as="h1">Heading 1</Heading>
            <Heading as="h2">Heading 2</Heading>
            <Heading as="h3">Heading 3</Heading>
            <Heading as="h4">Heading 4</Heading>
          </div>
        </Example>
      </Section>

      <Section
        title="Paragraph & Span"
        description="The Paragraph component adds standard spacing and line-height, while Span is used for inline text styling."
      >
        <Example
          title="Basic Usage"
          code={`<Paragraph>
  This is a paragraph with a <Span weight="bold" underline>bold underlined</Span> part.
</Paragraph>
<Paragraph variant="muted" size="sm">
  Smaller muted paragraph for secondary content.
</Paragraph>`}
        >
          <div className="space-y-2">
            <Paragraph>
              Typography components make it easy to maintain consistency while allowing for granular adjustments.
              This paragraph includes a <Span weight="bold" underline variant="primary">primary bold span</Span> to highlight important details.
            </Paragraph>
            <Paragraph variant="muted" size="sm">
              Muted text is often used for secondary metadata or legal disclaimers.
            </Paragraph>
          </div>
        </Example>
      </Section>

      <Section
        title="Customization"
        description="Mix and match sizes, weights, and styling props for any use case."
      >
        <Example
          title="Advanced Props"
          code={`<Text size="4xl" weight="black" uppercase align="center">
  Centered Title
</Text>`}
        >
          <div className="border p-8 rounded-xl bg-card">
            <Text size="4xl" weight="black" uppercase align="center" className="tracking-tighter">
              Custom Dashboard
            </Text>
            <Text align="center" variant="muted" italic>
              Last updated 2 minutes ago
            </Text>
          </div>
        </Example>
      </Section>

      <Section title="Props">
        <PropTable props={props} />
      </Section>
    </div>
  );
}

import { Button } from '@lib/components/ui/button';
import { Flex } from '@lib/components/layout/index';
import { Text } from '@lib/components/ui/typography';
import { Heart, Search, Settings, Share2, Trash2, Edit, ChevronRight } from 'lucide-react';
import { Section, Example, PropTable, PageHero } from './DocLayout';

const props = [
  {
    name: 'variant',
    type: "'default' | 'secondary' | 'outline' | 'destructive' | 'ghost' | 'link'",
    default: "'default'",
    description: 'Visual style of the button.',
  },
  {
    name: 'size',
    type: "'sm' | 'default' | 'md' | 'lg' | 'icon'",
    default: "'default'",
    description: 'Controls height and horizontal padding.',
  },
  {
    name: 'asChild',
    type: 'boolean',
    default: 'false',
    description:
      'Change the default rendered element for the one passed as a child, merging their props and behavior.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables interaction and reduces opacity.',
  },
  { name: 'onClick', type: '() => void', default: '—', description: 'Click handler function.' },
];

export function ButtonPage() {
  return (
    <Flex direction="col" gap="none">
      <PageHero
        badge="Action"
        title="Button"
        description="Buttons trigger actions. Use the right variant and size to match the hierarchy of the action on the page."
      />

      <Section
        title="Variants"
        description="Choose a variant that matches the importance and purpose of the action."
      >
        <Example
          title="All Variants"
          code={`<Button variant="default">Default (Primary)</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
        >
          <Flex gap="sm" wrap>
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link" >Link</Button>
            <Button variant="link" target='_blank'>External Link</Button>
          </Flex>
        </Example>
      </Section>

      <Section title="Sizes" description="Multiple sizes to fit different layout contexts.">
        <Example
          title="sm / default / md / lg"
          code={`<Button size="sm">Small</Button>
<Button size="default">Default (9)</Button>
<Button size="md">Medium (11)</Button>
<Button size="lg">Large (12)</Button>`}
        >
          <Flex gap="sm" align="center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Flex>
        </Example>
      </Section>

      <Section
        title="Icon Only"
        description="Square buttons for icon-only actions using size='icon'."
      >
        <Example
          title="Icon variants"
          code={`<Button size="icon" variant="default"><Heart className="w-5 h-5" /></Button>
<Button size="icon" variant="secondary"><Share2 className="w-5 h-5" /></Button>
<Button size="icon" variant="outline"><Settings className="w-5 h-5" /></Button>
<Button size="icon" variant="ghost"><Edit className="w-5 h-5" /></Button>
<Button size="icon" variant="destructive"><Trash2 className="w-5 h-5" /></Button>`}
        >
          <Flex direction="col" gap="md">
            <Flex direction="col" gap="sm">
              <Text variant="muted" size="xs" uppercase weight="medium" className="tracking-widest">
                Variants
              </Text>
              <Flex gap="sm" align="center">
                <Button size="icon" variant="default">
                  <Heart className="size-5" />
                </Button>
                <Button size="icon" variant="secondary">
                  <Share2 className="size-5" />
                </Button>
                <Button size="icon" variant="outline">
                  <Settings className="size-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Edit className="size-5" />
                </Button>
                <Button size="icon" variant="destructive">
                  <Trash2 className="size-5" />
                </Button>
              </Flex>
            </Flex>
            <Flex direction="col" gap="sm">
              <Text variant="muted" size="xs" uppercase weight="medium" className="tracking-widest">
                Sizes (with icon size adjustment)
              </Text>
              <Flex gap="sm" align="center">
                <Button size="icon" variant="default">
                  <Search className="size-4" />
                </Button>
                <Button size="icon" variant="default">
                  <Search className="size-5" />
                </Button>
                <Button size="icon" variant="default">
                  <Search className="size-6" />
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Example>
      </Section>

      <Section title="Icons" description="Add icons to the left or right of the button text.">
        <Example
          title="Left & Right Icons"
          code={`<Button leftIcon={<Heart className="w-4 h-4" />}>Like</Button>
<Button rightIcon={<Share2 className="w-4 h-4" />}>Share</Button>
<Button leftIcon={<Search className="w-4 h-4" />} rightIcon={<ChevronRight className="w-4 h-4" />}>Search with icon</Button>`}
        >
          <Flex gap="sm">
            <Button leftIcon={<Heart className="size-4" />}>Like</Button>
            <Button rightIcon={<Share2 className="size-4" />}>Share</Button>
            <Button
              variant="outline"
              leftIcon={<Search className="size-4" />}
              rightIcon={<ChevronRight className="size-4" />}
            >
              Search
            </Button>
          </Flex>
        </Example>
      </Section>

      <Section title="Link Support" description="Buttons can act as anchors using the href prop.">
        <Example
          title="Internal & External Links"
          code={`<Button href="#colors">Go to Colors</Button>
<Button href="https://google.com" target="_blank" variant="outline">Open Google</Button>`}
        >
          <Flex gap="sm">
            <Button href="#colors">Go to Colors</Button>
            <Button href="https://google.com" target="_blank" variant="outline">
              Open Google
            </Button>
          </Flex>
        </Example>
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            ...props,
            { name: 'leftIcon', type: 'ReactNode', default: '—', description: 'Icon to display on the left.' },
            { name: 'rightIcon', type: 'ReactNode', default: '—', description: 'Icon to display on the right.' },
            { name: 'href', type: 'string', default: '—', description: 'Optional link URL.' },
            { name: 'target', type: 'string', default: '—', description: 'Link target attribute.' },
          ]}
        />
      </Section>
    </Flex>
  );
}

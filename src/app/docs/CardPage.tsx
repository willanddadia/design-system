import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Section, Example, PropTable, PageHero } from './DocLayout';

const props = [
    { name: 'variant', type: "'default' | 'bordered' | 'elevated'", default: "'default'", description: 'Visual style: default (no border), bordered (2px border), elevated (drop shadow).' },
    { name: 'children', type: 'ReactNode', default: '—', description: 'Card content. Compose with CardHeader, CardTitle, CardDescription, and CardContent.' },
    { name: 'className', type: 'string', default: "''", description: 'Additional classes for custom overrides.' },
];

const subProps = [
    { name: 'CardHeader', type: '—', default: '—', description: 'Adds bottom margin. Wrap CardTitle and CardDescription inside.' },
    { name: 'CardTitle', type: '—', default: '—', description: 'Renders as an <h3>. The primary label of the card.' },
    { name: 'CardDescription', type: '—', default: '—', description: 'Renders as a <p> with muted color. Supporting text under the title.' },
    { name: 'CardContent', type: '—', default: '—', description: 'Container for the main body content of the card.' },
];

export function CardPage() {
    return (
        <div>
            <PageHero
                badge="Layout"
                title="Card"
                description="Cards group related content and actions. Use the built-in sub-components to build structured card layouts."
            />

            <Section title="Variants" description="Three visual flavors to fit different surfaces.">
                <Example
                    title="default / bordered / elevated"
                    code={`<Card variant="default">
  <CardHeader><CardTitle>Default</CardTitle></CardHeader>
  <CardContent><p>No border, clean surface.</p></CardContent>
</Card>

<Card variant="bordered">
  <CardHeader><CardTitle>Bordered</CardTitle></CardHeader>
  <CardContent><p>Solid 2px border for definition.</p></CardContent>
</Card>

<Card variant="elevated">
  <CardHeader><CardTitle>Elevated</CardTitle></CardHeader>
  <CardContent><p>Drop shadow for depth.</p></CardContent>
</Card>`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card variant="default">
                            <CardHeader>
                                <CardTitle>Default</CardTitle>
                                <CardDescription>No border, clean surface</CardDescription>
                            </CardHeader>
                            <CardContent><p>Body text goes here.</p></CardContent>
                        </Card>
                        <Card variant="bordered">
                            <CardHeader>
                                <CardTitle>Bordered</CardTitle>
                                <CardDescription>Solid 2px border for definition</CardDescription>
                            </CardHeader>
                            <CardContent><p>Body text goes here.</p></CardContent>
                        </Card>
                        <Card variant="elevated">
                            <CardHeader>
                                <CardTitle>Elevated</CardTitle>
                                <CardDescription>Drop shadow for depth</CardDescription>
                            </CardHeader>
                            <CardContent><p>Body text goes here.</p></CardContent>
                        </Card>
                    </div>
                </Example>
            </Section>

            <Section title="Composition" description="Build rich cards using the provided sub-components.">
                <Example
                    title="Full composition example"
                    code={`<Card variant="bordered">
  <CardHeader>
    <CardTitle>Account Settings</CardTitle>
    <CardDescription>Manage your profile and preferences</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content area for any child elements.</p>
  </CardContent>
</Card>`}
                >
                    <Card variant="bordered" className="max-w-md">
                        <CardHeader>
                            <CardTitle>Account Settings</CardTitle>
                            <CardDescription>Manage your profile and preferences</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Content area for any child elements.</p>
                        </CardContent>
                    </Card>
                </Example>
            </Section>

            <Section title="Card Props">
                <PropTable props={props} />
            </Section>
            <Section title="Sub-component API">
                <PropTable props={subProps} />
            </Section>
        </div>
    );
}

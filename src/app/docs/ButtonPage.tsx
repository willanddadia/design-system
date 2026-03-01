import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { Heart, Search, Settings, Share2, Trash2, Edit } from 'lucide-react';
import { Section, Example, PropTable, PageHero } from './DocLayout';

const props = [
    { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'destructive' | 'ghost'", default: "'primary'", description: 'Visual style of the button.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Controls height and horizontal padding.' },
    { name: 'iconOnly', type: 'boolean', default: 'false', description: 'Makes the button square — use with a single icon child.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction and reduces opacity.' },
    { name: 'onClick', type: '() => void', default: '—', description: 'Click handler function.' },
];

export function ButtonPage() {
    return (
        <div>
            <PageHero
                badge="Action"
                title="Button"
                description="Buttons trigger actions. Use the right variant and size to match the hierarchy of the action on the page."
            />

            <Section title="Variants" description="Choose a variant that matches the importance and purpose of the action.">
                <Example
                    title="All Variants"
                    code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="ghost">Ghost</Button>`}
                >
                    <Flex gap="sm" wrap>
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="ghost">Ghost</Button>
                    </Flex>
                </Example>
            </Section>

            <Section title="Sizes" description="Three sizes to fit different layout contexts.">
                <Example
                    title="sm / md / lg"
                    code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
                >
                    <Flex gap="sm" align="center">
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                    </Flex>
                </Example>
            </Section>

            <Section title="Icon Only" description="Square buttons for icon-only actions. Pass iconOnly and render a single icon as the child.">
                <Example
                    title="Icon variants"
                    code={`<Button iconOnly variant="primary"><Heart className="w-5 h-5" /></Button>
<Button iconOnly variant="secondary"><Share2 className="w-5 h-5" /></Button>
<Button iconOnly variant="outline"><Settings className="w-5 h-5" /></Button>
<Button iconOnly variant="ghost"><Edit className="w-5 h-5" /></Button>
<Button iconOnly variant="destructive"><Trash2 className="w-5 h-5" /></Button>`}
                >
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs text-muted-foreground mb-3">Variants</p>
                            <Flex gap="sm" align="center">
                                <Button iconOnly variant="primary"><Heart className="w-5 h-5" /></Button>
                                <Button iconOnly variant="secondary"><Share2 className="w-5 h-5" /></Button>
                                <Button iconOnly variant="outline"><Settings className="w-5 h-5" /></Button>
                                <Button iconOnly variant="ghost"><Edit className="w-5 h-5" /></Button>
                                <Button iconOnly variant="destructive"><Trash2 className="w-5 h-5" /></Button>
                            </Flex>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground mb-3">Sizes</p>
                            <Flex gap="sm" align="center">
                                <Button iconOnly size="sm" variant="primary"><Search className="w-4 h-4" /></Button>
                                <Button iconOnly size="md" variant="primary"><Search className="w-5 h-5" /></Button>
                                <Button iconOnly size="lg" variant="primary"><Search className="w-6 h-6" /></Button>
                            </Flex>
                        </div>
                    </div>
                </Example>
            </Section>

            <Section title="States">
                <Example
                    title="Disabled"
                    code={`<Button disabled>Disabled</Button>
<Button variant="outline" disabled>Disabled Outline</Button>`}
                >
                    <Flex gap="sm">
                        <Button disabled>Disabled</Button>
                        <Button variant="outline" disabled>Disabled Outline</Button>
                    </Flex>
                </Example>
            </Section>

            <Section title="Props">
                <PropTable props={props} />
            </Section>
        </div>
    );
}

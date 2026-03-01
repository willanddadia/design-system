import { Button } from '../components/ui/button';
import { Flex } from '../components/Flex';
import { Heart, Search, Settings, Share2, Trash2, Edit } from 'lucide-react';
import { Section, Example, PropTable, PageHero } from './DocLayout';

const props = [
    { name: 'variant', type: "'default' | 'secondary' | 'outline' | 'destructive' | 'ghost' | 'link'", default: "'default'", description: 'Visual style of the button.' },
    { name: 'size', type: "'sm' | 'default' | 'md' | 'lg' | 'icon'", default: "'default'", description: 'Controls height and horizontal padding.' },
    { name: 'asChild', type: 'boolean', default: 'false', description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.' },
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
                        <Button variant="link">Link</Button>
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

            <Section title="Icon Only" description="Square buttons for icon-only actions using size='icon'.">
                <Example
                    title="Icon variants"
                    code={`<Button size="icon" variant="default"><Heart className="w-5 h-5" /></Button>
<Button size="icon" variant="secondary"><Share2 className="w-5 h-5" /></Button>
<Button size="icon" variant="outline"><Settings className="w-5 h-5" /></Button>
<Button size="icon" variant="ghost"><Edit className="w-5 h-5" /></Button>
<Button size="icon" variant="destructive"><Trash2 className="w-5 h-5" /></Button>`}
                >
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs text-muted-foreground mb-3">Variants</p>
                            <Flex gap="sm" align="center">
                                <Button size="icon" variant="default"><Heart className="w-5 h-5" /></Button>
                                <Button size="icon" variant="secondary"><Share2 className="w-5 h-5" /></Button>
                                <Button size="icon" variant="outline"><Settings className="w-5 h-5" /></Button>
                                <Button size="icon" variant="ghost"><Edit className="w-5 h-5" /></Button>
                                <Button size="icon" variant="destructive"><Trash2 className="w-5 h-5" /></Button>
                            </Flex>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground mb-3">Sizes (with icon size adjustment)</p>
                            <Flex gap="sm" align="center">
                                <Button size="icon" variant="default"><Search className="w-4 h-4" /></Button>
                                <Button size="icon" variant="default"><Search className="w-5 h-5" /></Button>
                                <Button size="icon" variant="default"><Search className="w-6 h-6" /></Button>
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

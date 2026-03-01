import { Section, Example, PageHero } from './DocLayout';
import { Card } from '../components/ui/card';

export function TypographyPage() {
    return (
        <div>
            <PageHero
                badge="Foundation"
                title="Typography"
                description="Our typography system is built on a modular scale to ensure hierarchy, readability, and consistency across all interfaces."
            />

            <Section title="Headings" description="We use five levels of headings to establish clear information hierarchy.">
                <Example title="Heading scale">
                    <div className="space-y-6">
                        <div>
                            <h1>Heading 1</h1>
                            <p className="text-xs font-mono text-muted-foreground mt-2">font-size: 1.5rem (24px) | line-height: 2rem | weight: 500</p>
                        </div>
                        <div>
                            <h2>Heading 2</h2>
                            <p className="text-xs font-mono text-muted-foreground mt-2">font-size: 1.25rem (20px) | line-height: 1.75rem | weight: 500</p>
                        </div>
                        <div>
                            <h3>Heading 3</h3>
                            <p className="text-xs font-mono text-muted-foreground mt-2">font-size: 1.125rem (18px) | line-height: 1.75rem | weight: 500</p>
                        </div>
                        <div>
                            <h4>Heading 4</h4>
                            <p className="text-xs font-mono text-muted-foreground mt-2">font-size: 1rem (16px) | line-height: 1.5rem | weight: 500</p>
                        </div>
                    </div>
                </Example>
            </Section>

            <Section title="Body Text" description="Standard text styles for paragraph content and secondary information.">
                <Example title="Body and Muted">
                    <div className="space-y-6 max-w-2xl">
                        <div>
                            <p>Regular text is used for body content and descriptions. It is optimized for long-form reading with a balanced line height and neutral color.</p>
                            <p className="text-xs font-mono text-muted-foreground mt-2">font-size: 1rem (16px) | line-height: 1.5rem | weight: 400</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">Muted text is used for secondary information, meta data, and supporting labels that don't need highest prominence.</p>
                            <p className="text-xs font-mono text-muted-foreground mt-2">color: var(--muted-foreground)</p>
                        </div>
                    </div>
                </Example>
            </Section>

            <Section title="Font Stack">
                <Card variant="bordered" className="bg-muted/10 font-mono text-sm leading-relaxed">
                    <p>font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;</p>
                </Card>
            </Section>
        </div>
    );
}

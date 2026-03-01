import { PageHero, Section } from './DocLayout';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { Package, Smartphone, Palette, ShieldCheck } from 'lucide-react';

export function IntroductionPage({ onGetStarted }: { onGetStarted: () => void }) {
    return (
        <div>
            <PageHero
                title="Design System"
                description="A professional UI library for building modern web applications with speed and consistency."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card variant="bordered">
                    <CardHeader>
                        <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                            <Package className="w-6 h-6" />
                        </div>
                        <CardTitle>Atomic Components</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Highly reusable, focus-state compliant components built with accessibility in mind.</p>
                    </CardContent>
                </Card>

                <Card variant="bordered">
                    <CardHeader>
                        <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center mb-4">
                            <Palette className="w-6 h-6" />
                        </div>
                        <CardTitle>Design Tokens</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Consistent color, spacing, and typography systems managed through CSS variables.</p>
                    </CardContent>
                </Card>

                <Card variant="bordered">
                    <CardHeader>
                        <div className="w-10 h-10 bg-green-500/10 text-green-600 rounded-lg flex items-center justify-center mb-4">
                            <Smartphone className="w-6 h-6" />
                        </div>
                        <CardTitle>Fully Responsive</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Layout primitives that handle responsiveness automatically across all devices.</p>
                    </CardContent>
                </Card>

                <Card variant="bordered">
                    <CardHeader>
                        <div className="w-10 h-10 bg-destructive/10 text-destructive rounded-lg flex items-center justify-center mb-4">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <CardTitle>TypeScript Ready</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">First-class TypeScript support with comprehensive prop definitions for all components.</p>
                    </CardContent>
                </Card>
            </div>

            <Section title="Ready to dive in?">
                <p className="text-muted-foreground mb-6">Explore our growing library of components and start building your next project today.</p>
                <Button size="lg" onClick={onGetStarted}>Explore Components</Button>
            </Section>
        </div>
    );
}

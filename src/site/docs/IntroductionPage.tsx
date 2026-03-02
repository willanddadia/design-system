import { PageHero, Section } from './DocLayout';
import { Flex, Grid } from '@lib/components/layout';
import { Paragraph } from '@lib/components/ui/typography';
import { Card, CardHeader, CardTitle, CardContent } from '@lib/components/ui/card';
import { Button } from '@lib/components/ui/button';
import { Package, Smartphone, Palette, ShieldCheck } from 'lucide-react';

export function IntroductionPage({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <Flex direction="col" gap="none">
      <PageHero
        title="Design System"
        description="A professional UI library for building modern web applications with speed and consistency."
      />

      <Grid cols={1} gap="lg">
        <Card variant="bordered">
          <CardHeader>
            <Flex
              align="center"
              justify="center"
            >
              <Package className="size-6" />
            </Flex>
            <CardTitle>Atomic Components</CardTitle>
          </CardHeader>
          <CardContent>
            <Paragraph variant="muted">
              Highly reusable, focus-state compliant components built with accessibility in mind.
            </Paragraph>
          </CardContent>
        </Card>

        <Card variant="bordered">
          <CardHeader>
            <Flex
              align="center"
              justify="center"
            >
              <Palette className="size-6" />
            </Flex>
            <CardTitle>Design Tokens</CardTitle>
          </CardHeader>
          <CardContent>
            <Paragraph variant="muted">
              Consistent color, spacing, and typography systems managed through CSS variables.
            </Paragraph>
          </CardContent>
        </Card>

        <Card variant="bordered">
          <CardHeader>
            <Flex
              align="center"
              justify="center"
            >
              <Smartphone className="size-6" />
            </Flex>
            <CardTitle>Fully Responsive</CardTitle>
          </CardHeader>
          <CardContent>
            <Paragraph variant="muted">
              Layout primitives that handle responsiveness automatically across all devices.
            </Paragraph>
          </CardContent>
        </Card>

        <Card variant="bordered">
          <CardHeader>
            <Flex
              align="center"
              justify="center"
            >
              <ShieldCheck className="size-6" />
            </Flex>
            <CardTitle>TypeScript Ready</CardTitle>
          </CardHeader>
          <CardContent>
            <Paragraph variant="muted">
              First-class TypeScript support with comprehensive prop definitions for all components.
            </Paragraph>
          </CardContent>
        </Card>
      </Grid>

      <Section title="Ready to dive in?">
        <Paragraph variant="muted">
          Explore our growing library of components and start building your next project today.
        </Paragraph>
        <Flex gap="md" wrap>
          <Button size="lg" onClick={onGetStarted}>
            Explore Components
          </Button>
          <Button asChild size="lg" variant="outline">
            <a
              href="https://github.com/willanddadia/design-system"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a
              href="https://www.npmjs.com/package/@will-and/design-system"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on NPM
            </a>
          </Button>
        </Flex>
      </Section>
    </Flex>
  );
}

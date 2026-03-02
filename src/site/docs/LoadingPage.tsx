import { useState } from 'react';
import { Loader, FullScreenLoader, LoadingOverlay } from '@lib/components/ui/loader';
import { Skeleton } from '@lib/components/ui/skeleton';
import { Button } from '@lib/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@lib/components/ui/card';
import { Flex } from '@lib/components/layout/Flex';
import { Grid } from '@lib/components/layout/Grid';
import { Text } from '@lib/components/ui/typography';
import { Section, Example, PageHero, PropTable } from './DocLayout';

export function LoadingPage() {
    const [showFullScreen, setShowFullScreen] = useState(false);

    const triggerFullScreen = () => {
        setShowFullScreen(true);
        setTimeout(() => setShowFullScreen(false), 2000);
    };

    return (
        <Flex direction="col" gap="xl">
            <PageHero
                badge="Feedback"
                title="Loading & Skeletons"
                description="Provide visual feedback during async operations using spinners, overlays, or skeleton placeholders."
            />

            {showFullScreen && <FullScreenLoader />}

            <Section
                title="Spinner Loader"
                description="A simple spinning indicator for short wait times."
            >
                <Example
                    title="Loader Sizes"
                    code={`<Loader size="sm" />
<Loader size="default" />
<Loader size="lg" />
<Loader size="xl" />`}
                >
                    <Flex gap="lg" align="center">
                        <Loader size="sm" />
                        <Loader size="default" />
                        <Loader size="lg" />
                        <Loader size="xl" />
                    </Flex>
                </Example>
            </Section>

            <Section
                title="Full Screen Loader"
                description="Blocks interaction and covers the entire viewport. Useful for initial page loads or critical transitions."
            >
                <Example
                    title="Controlled Trigger"
                    code={`const [show, setShow] = useState(false);
// ...
{show && <FullScreenLoader />}`}
                >
                    <Button onClick={triggerFullScreen}>Show Full Screen (2s)</Button>
                </Example>
            </Section>

            <Section
                title="Loading Overlay"
                description="An absolute-positioned loader that covers its parent container. Parent must have 'relative' or 'isolate' position."
            >
                <Example
                    title="Partial Container Loading"
                    code={`<div className="relative border rounded-lg p-8">
  <LoadingOverlay />
  <Content />
</div>`}
                >
                    <Flex direction="col" align="center" justify="center" p={2} internalClassName="relative border-2 border-border rounded-xl bg-card h-48">
                        <LoadingOverlay />
                        <Text variant="muted">This content is being updated...</Text>
                    </Flex>
                </Example>
            </Section>

            <Section
                title="Skeleton"
                description="Use skeletons to represent the shape of content before it loads. Improves perceived performance."
            >
                <Example
                    title="Card Skeleton"
                    code={`<Card>
  <CardHeader>
    <Skeleton className="h-5 w-1/3" />
  </CardHeader>
  <CardContent className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
    <Skeleton className="h-32 w-full mt-4" />
  </CardContent>
</Card>`}
                >
                    <Grid cols={2} gap="md">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <Skeleton internalClassName="h-6 w-1/2" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent internalClassName="space-y-3">
                                <Skeleton internalClassName="h-4 w-full" />
                                <Skeleton internalClassName="h-4 w-full" />
                                <Skeleton internalClassName="h-4 w-3/4" />
                                <Skeleton internalClassName="h-32 w-full mt-4" />
                            </CardContent>
                        </Card>
                        <Flex gap="md" align="start">
                            <Skeleton internalClassName="size-12 rounded-full shrink-0" />
                            <Flex direction="col" gap="sm" internalClassName="flex-1">
                                <Skeleton internalClassName="h-4 w-1/4" />
                                <Skeleton internalClassName="h-4 w-full" />
                                <Skeleton internalClassName="h-4 w-full" />
                                <Skeleton internalClassName="h-4 w-1/2" />
                            </Flex>
                        </Flex>
                    </Grid>
                </Example>
            </Section>

            <Section title="Props">
                <PropTable
                    props={[
                        { name: 'size', type: "'sm' | 'default' | 'lg' | 'xl'", default: "'default'", description: 'Size of the spinner icon.' },
                        { name: 'className', type: 'string', default: '—', description: 'Additional classes for the container.' },
                        { name: 'blur', type: 'boolean', default: 'true', description: 'Whether to add backdrop-blur to overlays.' },
                    ]}
                />
            </Section>
        </Flex>
    );
}

import {
    Bell,
    Home,
    Search,
    Plus,
    MessageSquare,
    User,
    Settings,
    MoreVertical,
    Heart,
    Share2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@lib/components/ui/card';
import { Button } from '@lib/components/ui/button';
import { Badge } from '@lib/components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from '@lib/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@lib/components/ui/avatar';
import { Flex, Padded, Container } from '@lib/components/layout';
import { Heading, Paragraph, Text } from '@lib/components/ui/typography';

export function MobileSamplePage() {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Container>
                <Flex direction="col" gap="xl">
                    <Flex direction="col" gap="none">
                        <Heading size="4xl" weight="bold">
                            Mobile Sample
                        </Heading>
                        <Paragraph size="lg" variant="muted">
                            A demonstration of how components can be composed for mobile-first interfaces.
                        </Paragraph>
                    </Flex>

                    <Alert>
                        <AlertTitle>Developer Note</AlertTitle>
                        <AlertDescription>
                            This page is best viewed using the browser's responsive design mode (Cmd+Shift+M on Chrome).
                        </AlertDescription>
                    </Alert>

                    {/* Mobile Frame Simulation */}
                    <div className="max-w-[390px] mx-auto border-8 border-border rounded-[3rem] overflow-hidden shadow-2xl bg-background aspect-[9/19.5] relative">
                        <div className="flex flex-col h-full">
                            {/* Status Bar */}
                            <Flex align="center" justify="between" px={1.5} internalClassName="h-10">
                                <Text size="xs" weight="semibold">
                                    9:41
                                </Text>
                                <Flex align="center" gap="sm">
                                    <div className="w-4 h-2.5 border border-foreground/20 rounded-[2px]" />
                                    <div className="w-3 h-3 border-t-2 border-r-2 border-foreground/20 rotate-45" />
                                </Flex>
                            </Flex>

                            {/* Header */}
                            <div className="px-6 py-4 flex items-center justify-between border-b border-border/50">
                                <Flex align="center" gap="md">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <Text size="sm" weight="bold">
                                        Design System
                                    </Text>
                                </Flex>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon">
                                        <Bell className="size-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <MoreVertical className="size-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                                <Flex direction="col" gap="md">
                                    {/* Featured Card */}
                                    <div className="rounded-lg overflow-hidden shadow-lg bg-primary text-primary-foreground">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Summer Sale!</CardTitle>
                                                <CardDescription>
                                                    <span className="text-primary-foreground/70">Get up to 50% off on all components this weekend.</span>
                                                </CardDescription>
                                            </CardHeader>
                                            <CardFooter>
                                                <Button variant="secondary" size="sm">
                                                    Shop Now
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </div>

                                    {/* Activity Feed */}
                                    <Flex direction="col" gap="sm">
                                        <Heading size="xs" weight="bold">
                                            Recent Activity
                                        </Heading>

                                        {[1, 2, 3].map((i) => (
                                            <Card key={i}>
                                                <CardContent>
                                                    <Padded padding="sm">
                                                        <Flex align="start" gap="md">
                                                            <Avatar>
                                                                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} />
                                                                <AvatarFallback>U{i}</AvatarFallback>
                                                            </Avatar>
                                                            <div className="flex-1">
                                                                <Flex align="center" justify="between">
                                                                    <Text size="xs" weight="bold">
                                                                        User_{i}
                                                                    </Text>
                                                                    <Text size="2xs" variant="muted">
                                                                        2h ago
                                                                    </Text>
                                                                </Flex>
                                                                <Paragraph size="xs" variant="muted">
                                                                    Just implemented the new Badge component in the mobile dashboard!
                                                                </Paragraph>
                                                                <div className="flex gap-4 pt-2">
                                                                    <Button variant="ghost" size="none">
                                                                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                                                            <Heart className="size-3" /> 12
                                                                        </div>
                                                                    </Button>
                                                                    <Button variant="ghost" size="none">
                                                                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                                                            <MessageSquare className="size-3" /> 4
                                                                        </div>
                                                                    </Button>
                                                                    <Button variant="ghost" size="none">
                                                                        <Share2 className="size-3 text-muted-foreground" />
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </Flex>
                                                    </Padded>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </Flex>

                                    {/* Tag Cloud */}
                                    <div className="px-1">
                                        <Flex gap="sm" wrap>
                                            <Badge variant="default">Mobile</Badge>
                                            <Badge variant="outline">React</Badge>
                                            <Badge variant="success">Active</Badge>
                                            <Badge variant="outline">Draft</Badge>
                                        </Flex>
                                    </div>
                                </Flex>
                            </div>

                            {/* Tab Bar */}
                            <footer className="h-16 border-t border-border/50 bg-card/80 backdrop-blur-md px-6 flex items-center justify-between relative mt-auto">
                                <Button variant="ghost" size="icon">
                                    <Home className="size-5" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Search className="size-5" />
                                </Button>
                                <div className="size-12 bg-primary rounded-full -translate-y-6 shadow-lg shadow-primary/30 border-4 border-background flex items-center justify-center">
                                    <Plus className="size-6 text-primary-foreground" />
                                </div>
                                <Button variant="ghost" size="icon">
                                    <MessageSquare className="size-5" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <User className="size-5" />
                                </Button>
                            </footer>

                            {/* Home Indicator */}
                            <div className="h-8 flex items-center justify-center bg-card">
                                <div className="w-32 h-1 bg-muted-foreground/20 rounded-full" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted/30 rounded-2xl">
                        <Padded padding="lg">
                            <Flex direction="col" gap="md">
                                <Heading size="sm" weight="bold">
                                    <div className="flex items-center gap-2">
                                        <Settings className="size-4" />
                                        Responsive Design Guidelines
                                    </div>
                                </Heading>
                                <Paragraph as="ul" size="sm" variant="muted">
                                    <li>Use <code>StickyHeader</code> and <code>StickyFooter</code> for persistent navigation.</li>
                                    <li>Maintain minimum touch target sizes of 44x44px.</li>
                                    <li>Use <code>flex-col</code> on mobile that switch to <code>flex-row</code> on larger screens.</li>
                                    <li>Leverage <code>Card</code> components to group content into logical chunks.</li>
                                </Paragraph>
                            </Flex>
                        </Padded>
                    </div>
                </Flex>
            </Container>
        </div>
    );
}

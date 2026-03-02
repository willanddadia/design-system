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
        <Container className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Flex direction="col" gap="xl">
                <Flex direction="col" gap="none">
                    <Heading size="4xl" weight="bold" className="tracking-tight">
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
                <Flex
                    direction="col"
                    className="max-w-[390px] mx-auto border-8 border-border rounded-[3rem] overflow-hidden shadow-2xl bg-background aspect-[9/19.5] relative"
                >
                    {/* Status Bar */}
                    <Flex align="center" justify="between" className="h-10 px-6">
                        <Text size="xs" weight="semibold">
                            9:41
                        </Text>
                        <Flex align="center" gap="sm">
                            <div className="w-4 h-2.5 border border-foreground/20 rounded-[2px]" />
                            <div className="w-3 h-3 border-t-2 border-r-2 border-foreground/20 rotate-45" />
                        </Flex>
                    </Flex>

                    {/* Header */}
                    <Padded
                        padding="none"
                        className="px-6 py-4 flex items-center justify-between border-b border-border/50"
                    >
                        <Flex align="center" gap="md">
                            <Avatar className="size-8">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <Text size="sm" weight="bold">
                                Design System
                            </Text>
                        </Flex>
                        <Flex gap="sm">
                            <Button variant="ghost" size="icon" className="size-8">
                                <Bell className="size-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="size-8">
                                <MoreVertical className="size-4" />
                            </Button>
                        </Flex>
                    </Padded>

                    {/* Scrollable Content */}
                    <Flex direction="col" gap="md" className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                        {/* Featured Card */}
                        <Card className="border-none shadow-lg bg-primary text-primary-foreground">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-xl">Summer Sale!</CardTitle>
                                <CardDescription className="text-primary-foreground/70">
                                    Get up to 50% off on all components this weekend.
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Button variant="secondary" size="sm" className="w-full">
                                    Shop Now
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Activity Feed */}
                        <Flex direction="col" gap="sm">
                            <Heading size="xs" weight="bold" className="px-1">
                                Recent Activity
                            </Heading>

                            {[1, 2, 3].map((i) => (
                                <Card key={i} className="overflow-hidden">
                                    <CardContent className="p-0">
                                        <Padded padding="sm">
                                            <Flex align="start" gap="md">
                                                <Avatar className="size-10 rounded-lg">
                                                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} />
                                                    <AvatarFallback>U{i}</AvatarFallback>
                                                </Avatar>
                                                <Flex direction="col" gap="sm" className="flex-1">
                                                    <Flex align="center" justify="between">
                                                        <Text size="xs" weight="bold">
                                                            User_{i}
                                                        </Text>
                                                        <Text size="2xs" variant="muted" className="italic">
                                                            2h ago
                                                        </Text>
                                                    </Flex>
                                                    <Paragraph size="xs" variant="muted" className="leading-relaxed !mt-0">
                                                        Just implemented the new Badge component in the mobile dashboard!
                                                    </Paragraph>
                                                    <Flex gap="md" className="pt-2">
                                                        <Button variant="ghost" size="none" className="h-auto p-0 flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary">
                                                            <Heart className="size-3" /> 12
                                                        </Button>
                                                        <Button variant="ghost" size="none" className="h-auto p-0 flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary">
                                                            <MessageSquare className="size-3" /> 4
                                                        </Button>
                                                        <Button variant="ghost" size="none" className="h-auto p-0 flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary">
                                                            <Share2 className="size-3" />
                                                        </Button>
                                                    </Flex>
                                                </Flex>
                                            </Flex>
                                        </Padded>
                                    </CardContent>
                                </Card>
                            ))}
                        </Flex>

                        {/* Tag Cloud */}
                        <Flex gap="sm" wrap className="px-1">
                            <Badge variant="default">Mobile</Badge>
                            <Badge variant="outline">React</Badge>
                            <Badge variant="success">Active</Badge>
                            <Badge variant="outline">Draft</Badge>
                        </Flex>
                    </Flex>

                    {/* Tab Bar */}
                    <footer className="h-16 border-t border-border/50 bg-card/80 backdrop-blur-md px-6 flex items-center justify-between relative">
                        <Button variant="ghost" size="icon" className="text-primary">
                            <Home className="size-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-muted-foreground">
                            <Search className="size-5" />
                        </Button>
                        <Flex
                            align="center"
                            justify="center"
                            className="size-12 bg-primary rounded-full -translate-y-6 shadow-lg shadow-primary/30 border-4 border-background"
                        >
                            <Plus className="size-6 text-primary-foreground" />
                        </Flex>
                        <Button variant="ghost" size="icon" className="text-muted-foreground">
                            <MessageSquare className="size-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-muted-foreground">
                            <User className="size-5" />
                        </Button>
                    </footer>

                    {/* Home Indicator */}
                    <Flex align="center" justify="center" className="h-8">
                        <div className="w-32 h-1 bg-muted-foreground/20 rounded-full" />
                    </Flex>
                </Flex>

                <Padded padding="lg" className="bg-muted/30 rounded-2xl">
                    <Flex direction="col" gap="md">
                        <Heading size="sm" weight="bold" className="flex items-center gap-2">
                            <Settings className="size-4" />
                            Responsive Design Guidelines
                        </Heading>
                        <Paragraph as="ul" size="sm" variant="muted" className="space-y-2 list-disc list-inside !mt-0">
                            <li>Use <code>StickyHeader</code> and <code>StickyFooter</code> for persistent navigation.</li>
                            <li>Maintain minimum touch target sizes of 44x44px.</li>
                            <li>Use <code>flex-col</code> on mobile that switch to <code>flex-row</code> on larger screens.</li>
                            <li>Leverage <code>Card</code> components to group content into logical chunks.</li>
                        </Paragraph>
                    </Flex>
                </Padded>
            </Flex>
        </Container>
    );
}

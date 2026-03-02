import {
    Bell,
    Home,
    Search,
    Plus,
    User,
    Settings,
    Zap,
    Cpu,
    Shield
} from 'lucide-react';
import { Button } from '@lib/components/ui/button';
import { Badge } from '@lib/components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from '@lib/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@lib/components/ui/avatar';
import { Flex, Padded, Container, Grid } from '@lib/components/layout';
import { Heading, Paragraph, Text } from '@lib/components/ui/typography';

export function MobileSamplePage() {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
            <Container>
                <Flex direction="col" gap="xl">
                    <Flex direction="col" gap="none">
                        <Heading size="4xl" weight="bold" internalClassName="tracking-tight">
                            Mobile Interface
                        </Heading>
                        <Paragraph size="lg" variant="muted" internalClassName="max-w-2xl">
                            A high-fidelity mobile workspace demonstration using atomic components and responsive primitives.
                        </Paragraph>
                    </Flex>

                    <Alert variant="default" internalClassName="border-primary/20 bg-primary/5">
                        <Cpu className="size-4 text-primary" />
                        <AlertTitle internalClassName="text-primary font-bold uppercase tracking-wider text-xs">Environment Specification</AlertTitle>
                        <AlertDescription internalClassName="text-sm">
                            Interface optimized for 390x844 (Viewport Scale 1.0). Best viewed in responsive inspection mode.
                        </AlertDescription>
                    </Alert>

                    {/* Mobile Frame Simulation */}
                    <div className="max-w-[390px] mx-auto border-[12px] border-[#1a1a1a] rounded-[3.5rem] overflow-hidden shadow-[0_0_80px_-15px_rgba(0,0,0,0.3)] bg-background aspect-[9/19.5] relative ring-1 ring-white/10">
                        {/* Blueprint Watermark */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
                            <Text size="9xl" weight="black" internalClassName="rotate-45 whitespace-nowrap">BLUEPRINT v1.0</Text>
                        </div>

                        <div className="flex flex-col h-full relative z-10 bg-background/50 backdrop-blur-3xl">
                            {/* Status Bar */}
                            <Flex align="center" justify="between" px={1.5} internalClassName="h-12 bg-card/30">
                                <Text size="xs" weight="bold" internalClassName="font-mono">
                                    09:41
                                </Text>
                                <Flex align="center" gap="sm">
                                    <div className="flex gap-0.5 items-end h-3">
                                        <div className="w-0.5 h-1 bg-foreground/60 rounded-full" />
                                        <div className="w-0.5 h-2 bg-foreground/60 rounded-full" />
                                        <div className="w-0.5 h-3 bg-foreground/60 rounded-full" />
                                        <div className="w-0.5 h-2.5 bg-foreground/20 rounded-full" />
                                    </div>
                                    <Zap className="size-3 text-yellow-500 fill-yellow-500" />
                                    <div className="w-5 h-2.5 border border-foreground/40 rounded-[3px] p-0.5 flex relative">
                                        <div className="bg-foreground/80 w-3 h-full rounded-[1px]" />
                                        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-0.5 h-1 bg-foreground/40 rounded-r-full" />
                                    </div>
                                </Flex>
                            </Flex>

                            {/* Header */}
                            <div className="px-6 py-4 flex items-center justify-between border-b border-border/40 bg-card/40">
                                <Flex align="center" gap="md">
                                    <Avatar internalClassName="ring-2 ring-primary/10">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>DS</AvatarFallback>
                                    </Avatar>
                                    <Flex direction="col" gap="none">
                                        <Text size="sm" weight="bold">Core Workspace</Text>
                                        <Text size="2xs" variant="muted" uppercase weight="bold" internalClassName="tracking-tighter opacity-70">Production Node</Text>
                                    </Flex>
                                </Flex>
                                <div className="flex gap-1">
                                    <Button variant="ghost" size="icon" internalClassName="size-8 rounded-lg">
                                        <Bell className="size-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" internalClassName="size-8 rounded-lg">
                                        <Settings className="size-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                                <Flex direction="col" gap="lg">
                                    {/* Featured Dynamic Card */}
                                    <Padded
                                        bordered
                                        padding="none"
                                        internalClassName="overflow-hidden bg-primary text-primary-foreground shadow-lg border-primary/20"
                                    >
                                        <div
                                            className="px-5 py-6 relative"
                                            style={{
                                                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                                                backgroundSize: '16px 16px'
                                            }}
                                        >
                                            <Flex direction="col" gap="md">
                                                <Badge variant="secondary" internalClassName="bg-white/20 text-white border-transparent backdrop-blur-sm self-start text-[10px] font-bold uppercase tracking-widest">
                                                    System Alert
                                                </Badge>
                                                <Flex direction="col" gap="sm">
                                                    <Text size="xl" weight="black" internalClassName="tracking-tighter">NODE_SYNC_COMPLETE</Text>
                                                    <Text size="xs" internalClassName="opacity-80 leading-relaxed font-medium">All design tokens have been propagated to edge locations successfully.</Text>
                                                </Flex>
                                                <Button variant="secondary" size="sm" internalClassName="w-fit font-bold bg-white text-primary hover:bg-white/90">
                                                    View Logs
                                                </Button>
                                            </Flex>
                                            <Shield className="absolute -bottom-2 -right-2 size-20 opacity-10 rotate-12" />
                                        </div>
                                    </Padded>

                                    {/* Activity Feed */}
                                    <Flex direction="col" gap="sm">
                                        <Flex align="center" justify="between" px={0.5}>
                                            <Text size="2xs" weight="black" uppercase internalClassName="tracking-[0.2em] text-muted-foreground opacity-70">Telemetry Stream</Text>
                                            <div className="size-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                        </Flex>

                                        {[1, 2, 3].map((i) => (
                                            <Padded key={i} bordered padding="sm" internalClassName="bg-card/30 backdrop-blur-sm border-border/40 hover:border-primary/30 transition-colors">
                                                <Flex align="start" gap="md">
                                                    <Avatar internalClassName="size-10 border border-border/60 shadow-sm">
                                                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 40}`} />
                                                        <AvatarFallback>U{i}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1 min-w-0">
                                                        <Flex align="center" justify="between">
                                                            <Text size="xs" weight="bold" internalClassName="truncate">Protocol_{i * 256}</Text>
                                                            <Text size="xs" internalClassName="font-mono opacity-40 text-[9px]">T+{i}ms</Text>
                                                        </Flex>
                                                        <Paragraph size="xs" variant="muted" internalClassName="leading-relaxed mt-1 line-clamp-2">
                                                            Deployment of segment `0x{i}AF` finalized. All checksums verified.
                                                        </Paragraph>
                                                    </div>
                                                </Flex>
                                            </Padded>
                                        ))}
                                    </Flex>

                                    {/* System Parameters */}
                                    <Padded bordered padding="md" internalClassName="bg-[#0a0a0a] border-border/20">
                                        <Flex direction="col" gap="sm">
                                            <Text size="2xs" weight="bold" internalClassName="font-mono text-green-500 opacity-80 underline underline-offset-4">SYS_PARAMS.JSON</Text>
                                            <Grid cols={2} gap="sm">
                                                <div className="p-2 rounded bg-white/5 border border-white/5">
                                                    <Text size="xs" variant="muted" internalClassName="font-mono block">CPU_LOAD</Text>
                                                    <Text size="sm" weight="bold" internalClassName="font-mono">14.2%</Text>
                                                </div>
                                                <div className="p-2 rounded bg-white/5 border border-white/5">
                                                    <Text size="xs" variant="muted" internalClassName="font-mono block">MEM_ALLOC</Text>
                                                    <Text size="sm" weight="bold" internalClassName="font-mono">824MB</Text>
                                                </div>
                                            </Grid>
                                        </Flex>
                                    </Padded>
                                </Flex>
                            </div>

                            {/* Navigation Bar */}
                            <footer className="h-20 border-t border-border/40 bg-card/60 backdrop-blur-2xl px-8 flex items-center justify-between relative mt-auto ring-1 ring-white/5">
                                <Button variant="ghost" size="icon" internalClassName="text-primary">
                                    <Home className="size-5" />
                                </Button>
                                <Button variant="ghost" size="icon" internalClassName="opacity-50 hover:opacity-100">
                                    <Cpu className="size-5" />
                                </Button>
                                <div className="size-14 bg-primary rounded-2xl -translate-y-8 shadow-[0_12px_24px_-8px_rgba(var(--primary-rgb),0.5)] border-[3px] border-background flex items-center justify-center rotate-45 group hover:rotate-90 transition-transform duration-500">
                                    <Plus className="size-7 text-primary-foreground -rotate-45" />
                                </div>
                                <Button variant="ghost" size="icon" internalClassName="opacity-50 hover:opacity-100">
                                    <Search className="size-5" />
                                </Button>
                                <Button variant="ghost" size="icon" internalClassName="opacity-50 hover:opacity-100">
                                    <User className="size-5" />
                                </Button>
                            </footer>

                            {/* Device Handle */}
                            <div className="h-6 flex items-center justify-center bg-card/60">
                                <div className="w-32 h-1.5 bg-foreground/10 rounded-full" />
                            </div>
                        </div>
                    </div>

                    <Grid cols={1} mdCols={2} gap="lg">
                        <Padded bordered internalClassName="bg-muted/10 border-dashed">
                            <Flex direction="col" gap="md">
                                <Flex align="center" gap="sm">
                                    <div className="p-1.5 rounded bg-foreground/5 text-foreground/40">
                                        <Smartphone className="size-4" />
                                    </div>
                                    <Text weight="bold" size="sm" uppercase internalClassName="tracking-widest">Viewport Spec</Text>
                                </Flex>
                                <Paragraph size="sm" variant="muted">
                                    Components use a fluid layout engine that adapts to mobile constraints while maintaining accessibility standards.
                                </Paragraph>
                            </Flex>
                        </Padded>
                        <Padded bordered internalClassName="bg-muted/10 border-dashed">
                            <Flex direction="col" gap="md">
                                <Flex align="center" gap="sm">
                                    <div className="p-1.5 rounded bg-foreground/5 text-foreground/40">
                                        <Zap className="size-4" />
                                    </div>
                                    <Text weight="bold" size="sm" uppercase internalClassName="tracking-widest">Input Optimization</Text>
                                </Flex>
                                <Paragraph size="sm" variant="muted">
                                    Touch targets are centered and standardized at 44pt minimum to ensure high input accuracy on handheld devices.
                                </Paragraph>
                            </Flex>
                        </Padded>
                    </Grid>
                </Flex>
            </Container>
        </div>
    );
}

// Sub-components to keep clean
const Smartphone = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>;

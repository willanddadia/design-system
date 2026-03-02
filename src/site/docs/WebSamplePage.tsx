import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as ReChartsTooltip,
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';
import {
    Activity,
    Plus,
    Terminal,
    Cpu,
    Database,
    Globe,
    Lock,
    Download,
    MoreHorizontal
} from 'lucide-react';
import { Button } from '@lib/components/ui/button';
import { Badge } from '@lib/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@lib/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@lib/components/ui/avatar';
import { Flex, Grid, Container, Padded } from '@lib/components/layout';
import { Heading, Paragraph, Text } from '@lib/components/ui/typography';
import { Section } from './DocLayout';

const data = [
    { name: '01', revenue: 4500, load: 2400 },
    { name: '02', revenue: 5200, load: 1398 },
    { name: '03', revenue: 4800, load: 4800 },
    { name: '04', revenue: 6100, load: 3908 },
    { name: '05', revenue: 5900, load: 2800 },
    { name: '06', revenue: 7200, load: 3800 },
];

const transactions = [
    {
        id: 'SEC-8921',
        origin: 'US-EAST-1',
        type: 'ENCRYPT',
        status: 'Success',
        date: '2023.06.23',
        latency: '12ms',
    },
    {
        id: 'NET-4412',
        origin: 'EU-WEST-2',
        type: 'BRIDGE',
        status: 'Warning',
        date: '2023.06.24',
        latency: '142ms',
    },
    {
        id: 'DATA-771',
        origin: 'AP-SOUTH-1',
        type: 'COLLECT',
        status: 'Success',
        date: '2023.06.25',
        latency: '45ms',
    },
    {
        id: 'SYS-009',
        origin: 'GLOBAL',
        type: 'SYNC',
        status: 'Wait',
        date: '2023.06.26',
        latency: '—',
    },
];

export function WebSamplePage() {
    return (
        <div
            className="min-h-screen pb-20 animate-in fade-in duration-1000"
            style={{
                backgroundImage: `
                    radial-gradient(circle at 2px 2px, hsl(var(--border) / 0.3) 1px, transparent 0)
                `,
                backgroundSize: '32px 32px'
            }}
        >
            <Container>
                <Flex direction="col" gap="xl">
                    {/* Header Section */}
                    <header className="pt-8 pb-4 border-b border-border/50">
                        <Flex direction="col" mdDirection="row" mdAlign="end" justify="between" gap="lg">
                            <Flex direction="col" gap="sm">
                                <Flex align="center" gap="sm">
                                    <div className="size-2 bg-primary rounded-full animate-pulse" />
                                    <Text size="2xs" weight="black" uppercase internalClassName="tracking-[0.3em] text-primary">System Dashboard</Text>
                                </Flex>
                                <Heading size="5xl" weight="black" internalClassName="tracking-tighter">
                                    Command Center
                                </Heading>
                                <Paragraph variant="muted" internalClassName="max-w-xl text-lg font-medium">
                                    Real-time telemetry and infrastructure management console v4.0.2
                                </Paragraph>
                            </Flex>
                            <Flex align="center" gap="sm" internalClassName="pb-1">
                                <Button variant="outline" size="sm" internalClassName="font-bold uppercase tracking-wider text-[10px] h-9 px-4">
                                    <Download className="mr-2 size-3" />
                                    Export Logs
                                </Button>
                                <Button size="sm" internalClassName="font-bold uppercase tracking-wider text-[10px] h-9 px-4 shadow-lg shadow-primary/20">
                                    <Plus className="mr-2 size-3" />
                                    Initialize Node
                                </Button>
                            </Flex>
                        </Flex>
                    </header>

                    {/* KPI Technical Cards */}
                    <Grid cols={1} mdCols={2} lgCols={4} gap="lg">
                        {[
                            { label: 'Network Throughput', value: '45.2 GB/s', trend: '+12.5%', color: 'success', icon: Globe },
                            { label: 'Total Requests', value: '1.2M', trend: '+5.2%', color: 'success', icon: Activity },
                            { label: 'Avg Latency', value: '24ms', trend: '-2.1%', color: 'destructive', icon: Cpu },
                            { label: 'Active Clusters', value: '573', trend: '+14', color: 'success', icon: Database },
                        ].map((stat, i) => (
                            <Padded
                                key={i}
                                bordered
                                padding="none"
                                internalClassName="bg-card/40 backdrop-blur-sm group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                            >
                                <div
                                    className="p-6"
                                    style={{
                                        backgroundImage: `radial-gradient(circle, hsl(var(--border) / 0.5) 0.5px, transparent 0.5px)`,
                                        backgroundSize: '12px 12px'
                                    }}
                                >
                                    <Flex direction="col" gap="md">
                                        <Flex align="center" justify="between">
                                            <Text size="2xs" weight="black" uppercase variant="muted" internalClassName="tracking-widest opacity-60">
                                                {stat.label}
                                            </Text>
                                            <stat.icon className="size-4 text-muted-foreground opacity-40 group-hover:text-primary group-hover:opacity-100 transition-all" />
                                        </Flex>
                                        <Flex direction="col" gap="none">
                                            <Text size="3xl" weight="black" internalClassName="font-mono tracking-tighter">
                                                {stat.value}
                                            </Text>
                                            <Flex align="center" gap="sm">
                                                <div className={`size-1.5 rounded-full ${stat.color === 'success' ? 'bg-green-500' : 'bg-red-500'}`} />
                                                <Text size="2xs" variant="muted" weight="bold" internalClassName="font-mono uppercase">
                                                    {stat.trend} <span className="opacity-50">vs last segment</span>
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </div>
                                <div className="absolute -right-4 -bottom-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                                    <stat.icon className="size-24 rotate-12" />
                                </div>
                            </Padded>
                        ))}
                    </Grid>

                    {/* Main Analytics Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Telemetry Chart */}
                        <div className="lg:col-span-8">
                            <Padded bordered padding="none" internalClassName="bg-card/30 backdrop-blur-md overflow-hidden flex flex-col h-full">
                                <Flex align="center" justify="between" px={1.5} py={1} internalClassName="border-b border-border/40 bg-muted/20">
                                    <Flex align="center" gap="sm">
                                        <Terminal className="size-4 text-primary" />
                                        <Text weight="black" size="xs" uppercase internalClassName="tracking-widest">Global Telemetry Stream</Text>
                                    </Flex>
                                    <Badge variant="outline" internalClassName="font-mono text-[9px] uppercase tracking-tighter border-primary/30 text-primary">Live Connection: Established</Badge>
                                </Flex>
                                <div className="p-8 flex-1">
                                    <div className="h-[350px] w-full">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                                <defs>
                                                    <linearGradient id="colorMain" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.2} />
                                                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.4)" />
                                                <XAxis
                                                    dataKey="name"
                                                    axisLine={false}
                                                    tickLine={false}
                                                    fontSize={10}
                                                    tick={{ fill: 'hsl(var(--muted-foreground))', fontWeight: 700 }}
                                                    dy={10}
                                                />
                                                <YAxis
                                                    axisLine={false}
                                                    tickLine={false}
                                                    fontSize={10}
                                                    tick={{ fill: 'hsl(var(--muted-foreground))', fontWeight: 700 }}
                                                    tickFormatter={(v) => `${v / 1000}k`}
                                                />
                                                <ReChartsTooltip
                                                    contentStyle={{
                                                        backgroundColor: '#0a0a0a',
                                                        border: '1px solid hsl(var(--border)/0.5)',
                                                        borderRadius: '8px',
                                                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)',
                                                        fontSize: '11px',
                                                        fontWeight: 700,
                                                        fontFamily: 'monospace'
                                                    }}
                                                />
                                                <Area
                                                    type="stepAfter"
                                                    dataKey="revenue"
                                                    stroke="hsl(var(--primary))"
                                                    strokeWidth={3}
                                                    fillOpacity={1}
                                                    fill="url(#colorMain)"
                                                    animationDuration={2000}
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                                <div className="p-4 bg-muted/10 border-t border-border/40 flex justify-between items-center text-[10px] font-mono text-muted-foreground uppercase tracking-widest px-8">
                                    <span>Offset: 0x018F</span>
                                    <Flex gap="xl">
                                        <span>Status: Operational</span>
                                        <span>Load: 42%</span>
                                    </Flex>
                                </div>
                            </Padded>
                        </div>

                        {/* Node Registry */}
                        <div className="lg:col-span-4">
                            <Padded bordered padding="none" internalClassName="bg-card/30 backdrop-blur-md overflow-hidden h-full flex flex-col">
                                <header className="p-6 border-b border-border/40 bg-muted/20">
                                    <Flex direction="col" gap="sm">
                                        <Text weight="black" size="xs" uppercase internalClassName="tracking-widest">Node Registry</Text>
                                        <Text size="2xs" variant="muted" internalClassName="font-mono">Total cluster nodes: 1,024</Text>
                                    </Flex>
                                </header>
                                <div className="p-6 flex-1">
                                    <Flex direction="col" gap="lg">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Flex key={i} align="center" gap="md" internalClassName="group/node cursor-default">
                                                <div className="relative">
                                                    <Avatar internalClassName="ring-2 ring-border group-hover/node:ring-primary/50 transition-all">
                                                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 60}`} />
                                                        <AvatarFallback>N{i}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="absolute -bottom-0.5 -right-0.5 size-3 bg-green-500 rounded-full border-2 border-background" />
                                                </div>
                                                <Flex direction="col" gap="none" internalClassName="flex-1">
                                                    <Text size="sm" weight="black" internalClassName="tracking-tight group-hover/node:text-primary transition-colors">
                                                        US-WEST-{i}
                                                    </Text>
                                                    <Text size="2xs" variant="muted" internalClassName="font-mono">
                                                        IP: 192.168.{i}.{i * 12}
                                                    </Text>
                                                </Flex>
                                                <div className="text-right">
                                                    <Text size="xs" weight="black" internalClassName="font-mono">
                                                        {i * 14}ms
                                                    </Text>
                                                    <Text size="2xs" internalClassName="text-green-500 font-bold">READY</Text>
                                                </div>
                                            </Flex>
                                        ))}
                                    </Flex>
                                </div>
                                <Button variant="ghost" internalClassName="w-full text-[10px] uppercase font-black tracking-[0.2em] h-12 rounded-none border-t border-border/40 bg-muted/10">
                                    Scan All Nodes
                                </Button>
                            </Padded>
                        </div>
                    </div>

                    {/* Transaction Log Table */}
                    <Section
                        title="Process Transaction Log"
                        description="Audit stream for all low-level system operations across the planetary network."
                    >
                        <Padded bordered padding="none" internalClassName="bg-card/30 backdrop-blur-md overflow-hidden bg-white dark:bg-zinc-950/20">
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader className="bg-muted/30 border-b-2 border-border/60">
                                        <TableRow className="hover:bg-transparent">
                                            <TableHead className="py-4 px-6 text-[10px] font-black uppercase tracking-widest">Process ID</TableHead>
                                            <TableHead className="py-4 text-[10px] font-black uppercase tracking-widest">Origin Cluster</TableHead>
                                            <TableHead className="py-4 text-[10px] font-black uppercase tracking-widest">Protocol</TableHead>
                                            <TableHead className="py-4 text-[10px] font-black uppercase tracking-widest text-right">Latency</TableHead>
                                            <TableHead className="py-4 text-[10px] font-black uppercase tracking-widest text-center">Status</TableHead>
                                            <TableHead className="py-4 px-6 text-right text-[10px] font-black uppercase tracking-widest">Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {transactions.map((tx) => (
                                            <TableRow key={tx.id} className="border-b border-border/40 hover:bg-muted/10 transition-colors group/row">
                                                <TableCell className="py-4 px-6">
                                                    <Flex align="center" gap="sm">
                                                        <Lock className="size-3 text-muted-foreground opacity-40 group-hover/row:text-primary group-hover/row:opacity-100 transition-all" />
                                                        <Text size="xs" weight="black" internalClassName="font-mono text-primary">{tx.id}</Text>
                                                    </Flex>
                                                </TableCell>
                                                <TableCell className="py-4">
                                                    <Text size="xs" weight="bold" internalClassName="font-mono opacity-80">{tx.origin}</Text>
                                                </TableCell>
                                                <TableCell className="py-4">
                                                    <Badge variant="outline" internalClassName="font-mono text-[9px] py-0 px-2 uppercase tracking-tighter border-muted-foreground/30">{tx.type}</Badge>
                                                </TableCell>
                                                <TableCell className="py-4 text-right">
                                                    <Text size="xs" weight="black" internalClassName="font-mono">{tx.latency}</Text>
                                                </TableCell>
                                                <TableCell className="py-4">
                                                    <div className="flex justify-center">
                                                        <Badge
                                                            variant={
                                                                tx.status === 'Success'
                                                                    ? 'success'
                                                                    : tx.status === 'Wait'
                                                                        ? 'outline'
                                                                        : 'destructive'
                                                            }
                                                            internalClassName="h-5 text-[9px] uppercase tracking-tighter px-2"
                                                        >
                                                            {tx.status}
                                                        </Badge>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="py-4 px-6 text-right">
                                                    <Button variant="ghost" size="icon" internalClassName="size-8 rounded-lg group-hover/row:bg-primary group-hover/row:text-white transition-all">
                                                        <MoreHorizontal className="size-4" />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            <div className="p-3 bg-muted/20 border-t border-border/40 text-[9px] font-mono text-center uppercase tracking-[0.3em] opacity-40">
                                End of Telemetry Log
                            </div>
                        </Padded>
                    </Section>
                </Flex>
            </Container>
        </div>
    );
}

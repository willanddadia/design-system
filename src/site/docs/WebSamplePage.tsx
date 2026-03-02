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
    ArrowUpRight,
    ArrowDownRight,
    Users,
    DollarSign,
    CreditCard,
    Search,
    Filter,
    Download,
    MoreHorizontal,
    Plus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@lib/components/ui/card';
import { Button } from '@lib/components/ui/button';
import { Input } from '@lib/components/ui/input';
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
import { Flex, Grid, Container } from '@lib/components/layout';
import { Heading, Paragraph, Text } from '@lib/components/ui/typography';

const data = [
    { name: 'Jan', revenue: 4500, users: 2400 },
    { name: 'Feb', revenue: 5200, users: 1398 },
    { name: 'Mar', revenue: 4800, users: 9800 },
    { name: 'Apr', revenue: 6100, users: 3908 },
    { name: 'May', revenue: 5900, users: 4800 },
    { name: 'Jun', revenue: 7200, users: 3800 },
];

const transactions = [
    {
        id: 'TX1234',
        customer: 'Liam Johnson',
        email: 'liam@example.com',
        type: 'Sale',
        status: 'Approved',
        date: '2023-06-23',
        amount: '$250.00',
    },
    {
        id: 'TX1235',
        customer: 'Olivia Smith',
        email: 'olivia@example.com',
        type: 'Refund',
        status: 'Declined',
        date: '2023-06-24',
        amount: '$150.00',
    },
    {
        id: 'TX1236',
        customer: 'Noah Williams',
        email: 'noah@example.com',
        type: 'Subscription',
        status: 'Approved',
        date: '2023-06-25',
        amount: '$350.00',
    },
    {
        id: 'TX1237',
        customer: 'Emma Brown',
        email: 'emma@example.com',
        type: 'Sale',
        status: 'Pending',
        date: '2023-06-26',
        amount: '$450.00',
    },
    {
        id: 'TX1238',
        customer: 'James Jones',
        email: 'james@example.com',
        type: 'Sale',
        status: 'Approved',
        date: '2023-06-27',
        amount: '$550.00',
    },
];

export function WebSamplePage() {
    return (
        <Container>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Flex direction="col" gap="xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <Flex direction="col" gap="none">
                            <Heading size="4xl" weight="bold">
                                Web Dashboard
                            </Heading>
                            <Paragraph size="lg" variant="muted">
                                A comprehensive example of an analytics dashboard for desktop applications.
                            </Paragraph>
                        </Flex>
                        <Flex align="center" gap="sm">
                            <Button variant="outline" size="sm">
                                <Download className="mr-2 size-4" />
                                Export
                            </Button>
                            <Button size="sm">
                                <Plus className="mr-2 size-4" />
                                New Project
                            </Button>
                        </Flex>
                    </div>

                    {/* KPI Cards */}
                    <Grid cols={1} mdCols={2} lgCols={4} gap="md">
                        <Card>
                            <CardHeader>
                                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle>
                                        <Text size="sm" weight="medium" variant="muted">Total Revenue</Text>
                                    </CardTitle>
                                    <DollarSign className="size-4 text-muted-foreground" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Text size="2xl" weight="bold">
                                    $45,231.89
                                </Text>
                                <Paragraph size="xs" variant="success">
                                    <div className="flex items-center mt-1">
                                        <ArrowUpRight className="mr-1 size-3" />
                                        +20.1% from last month
                                    </div>
                                </Paragraph>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle>
                                        <Text size="sm" weight="medium" variant="muted">Subscriptions</Text>
                                    </CardTitle>
                                    <Users className="size-4 text-muted-foreground" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Text size="2xl" weight="bold">
                                    +2350
                                </Text>
                                <Paragraph size="xs" variant="success">
                                    <div className="flex items-center mt-1">
                                        <ArrowUpRight className="mr-1 size-3" />
                                        +180.1% from last month
                                    </div>
                                </Paragraph>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle>
                                        <Text size="sm" weight="medium" variant="muted">Sales</Text>
                                    </CardTitle>
                                    <CreditCard className="size-4 text-muted-foreground" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Text size="2xl" weight="bold">
                                    +12,234
                                </Text>
                                <Paragraph size="xs" variant="destructive">
                                    <div className="flex items-center mt-1">
                                        <ArrowDownRight className="mr-1 size-3" />
                                        -19% from last month
                                    </div>
                                </Paragraph>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle>
                                        <Text size="sm" weight="medium" variant="muted">Active Now</Text>
                                    </CardTitle>
                                    <Activity className="size-4 text-muted-foreground" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Text size="2xl" weight="bold">
                                    +573
                                </Text>
                                <Paragraph size="xs" variant="success">
                                    <div className="flex items-center mt-1">
                                        <ArrowUpRight className="mr-1 size-3" />
                                        +201 since last hour
                                    </div>
                                </Paragraph>
                            </CardContent>
                        </Card>
                    </Grid>

                    <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                        {/* Charts Section */}
                        <div className="lg:col-span-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Overview</CardTitle>
                                    <CardDescription>Performance metrics for the current year.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[300px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={data}>
                                                <defs>
                                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                                                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" vertical={false} />
                                                <XAxis
                                                    dataKey="name"
                                                    stroke="hsl(var(--muted-foreground))"
                                                    fontSize={12}
                                                    tickLine={false}
                                                    axisLine={false}
                                                />
                                                <YAxis
                                                    stroke="hsl(var(--muted-foreground))"
                                                    fontSize={12}
                                                    tickLine={false}
                                                    axisLine={false}
                                                    tickFormatter={(value) => `$${value}`}
                                                />
                                                <ReChartsTooltip
                                                    contentStyle={{
                                                        backgroundColor: 'hsl(var(--card))',
                                                        borderColor: 'hsl(var(--border))',
                                                        borderRadius: '8px',
                                                        fontSize: '12px',
                                                    }}
                                                />
                                                <Area
                                                    type="monotone"
                                                    dataKey="revenue"
                                                    stroke="hsl(var(--primary))"
                                                    fillOpacity={1}
                                                    fill="url(#colorRevenue)"
                                                    strokeWidth={2}
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Recent Sales/Activity */}
                        <div className="lg:col-span-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Recent Sales</CardTitle>
                                    <CardDescription>You made 265 sales this month.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Flex direction="col" gap="xl">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Flex key={i} align="center" gap="md">
                                                <Avatar>
                                                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} />
                                                    <AvatarFallback>U{i}</AvatarFallback>
                                                </Avatar>
                                                <Flex direction="col" gap="none">
                                                    <Text size="sm" weight="medium">
                                                        Olivia Martin
                                                    </Text>
                                                    <Text size="sm" variant="muted">
                                                        olivia.martin@email.com
                                                    </Text>
                                                </Flex>
                                                <div className="ml-auto">
                                                    <Text size="sm" weight="medium">
                                                        +$1,999.00
                                                    </Text>
                                                </div>
                                            </Flex>
                                        ))}
                                    </Flex>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Data Table Section */}
                    <Card>
                        <CardHeader>
                            <Flex align="center" justify="between">
                                <Flex direction="col" gap="none">
                                    <CardTitle>Transactions</CardTitle>
                                    <CardDescription>Manage and view your recent store transactions.</CardDescription>
                                </Flex>
                                <Flex align="center" gap="sm">
                                    <div className="relative hidden md:flex">
                                        <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                                        <Input
                                            type="search"
                                            placeholder="Search transactions..."
                                        />
                                    </div>
                                    <Button variant="outline" size="sm">
                                        <Filter className="mr-2 size-4" />
                                        Filters
                                    </Button>
                                </Flex>
                            </Flex>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Customer</TableHead>
                                        <TableHead>
                                            <span className="hidden md:table-cell">Type</span>
                                        </TableHead>
                                        <TableHead>
                                            <span className="hidden md:table-cell">Status</span>
                                        </TableHead>
                                        <TableHead>
                                            <span className="hidden md:table-cell">Date</span>
                                        </TableHead>
                                        <TableHead>
                                            <div className="text-right">Amount</div>
                                        </TableHead>
                                        <TableHead />
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {transactions.map((tx) => (
                                        <TableRow key={tx.id}>
                                            <TableCell>
                                                <Text size="sm" weight="medium">
                                                    {tx.customer}
                                                </Text>
                                                <div className="hidden md:block">
                                                    <Text size="xs" variant="muted">
                                                        {tx.email}
                                                    </Text>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="hidden md:table-cell">
                                                    <Text size="xs">{tx.type}</Text>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="hidden md:table-cell">
                                                    <Badge
                                                        variant={
                                                            tx.status === 'Approved'
                                                                ? 'success'
                                                                : tx.status === 'Pending'
                                                                    ? 'outline'
                                                                    : 'destructive'
                                                        }
                                                    >
                                                        {tx.status}
                                                    </Badge>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="hidden md:table-cell">
                                                    <Text size="xs">{tx.date}</Text>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="text-right">
                                                    <Text size="sm" weight="medium">
                                                        {tx.amount}
                                                    </Text>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Button variant="ghost" size="icon">
                                                    <MoreHorizontal className="size-4" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Flex>
            </div>
        </Container>
    );
}

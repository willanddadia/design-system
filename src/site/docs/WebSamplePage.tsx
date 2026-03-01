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
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Web Dashboard</h1>
                    <p className="text-muted-foreground text-lg">
                        A comprehensive example of an analytics dashboard for desktop applications.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                    </Button>
                    <Button size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        New Project
                    </Button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                            <ArrowUpRight className="mr-1 h-3 w-3" />
                            +20.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Subscriptions</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                            <ArrowUpRight className="mr-1 h-3 w-3" />
                            +180.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Sales</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-red-600 flex items-center mt-1">
                            <ArrowDownRight className="mr-1 h-3 w-3" />
                            -19% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Active Now</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                            <ArrowUpRight className="mr-1 h-3 w-3" />
                            +201 since last hour
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Charts Section */}
                <Card className="lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                        <CardDescription>Performance metrics for the current year.</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
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
                                        fontSize: '12px'
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
                    </CardContent>
                </Card>

                {/* Recent Sales/Activity */}
                <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                        <CardDescription>You made 265 sales this month.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} />
                                        <AvatarFallback>U{i}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm font-medium leading-none">Olivia Martin</p>
                                        <p className="text-sm text-muted-foreground truncate max-w-[150px]">
                                            olivia.martin@email.com
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium text-sm">+$1,999.00</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Data Table Section */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Transactions</CardTitle>
                            <CardDescription>Manage and view your recent store transactions.</CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="relative hidden md:block">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search transactions..."
                                    className="pl-8 w-[250px] h-9"
                                />
                            </div>
                            <Button variant="outline" size="sm" className="h-9">
                                <Filter className="mr-2 h-4 w-4" />
                                Filters
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead className="hidden md:table-cell">Type</TableHead>
                                <TableHead className="hidden md:table-cell">Status</TableHead>
                                <TableHead className="hidden md:table-cell">Date</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                                <TableHead />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transactions.map((tx) => (
                                <TableRow key={tx.id}>
                                    <TableCell>
                                        <div className="font-medium text-sm">{tx.customer}</div>
                                        <div className="text-xs text-muted-foreground hidden md:block">{tx.email}</div>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell text-xs">{tx.type}</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <Badge
                                            variant={tx.status === 'Approved' ? 'success' : tx.status === 'Pending' ? 'outline' : 'destructive'}
                                        >
                                            {tx.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell text-xs">{tx.date}</TableCell>
                                    <TableCell className="text-right font-medium text-sm">{tx.amount}</TableCell>
                                    <TableCell>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

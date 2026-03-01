import {
    Bell,
    Home,
    Search,
    User,
    Plus,
    MessageSquare,
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

export function MobileSamplePage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Mobile Sample</h1>
                <p className="text-muted-foreground text-lg">
                    A demonstration of how components can be composed for mobile-first interfaces.
                </p>
            </div>

            <Alert>
                <AlertTitle>Developer Note</AlertTitle>
                <AlertDescription>
                    This page is best viewed using the browser's responsive design mode (Cmd+Shift+M on Chrome).
                </AlertDescription>
            </Alert>

            {/* Mobile Frame Simulation (Optional, but let's just make it a nice section) */}
            <div className="max-w-[390px] mx-auto border-8 border-border rounded-[3rem] overflow-hidden shadow-2xl bg-background aspect-[9/19.5] relative flex flex-col">
                {/* Status Bar */}
                <div className="h-10 px-6 flex items-center justify-between text-[12px] font-semibold">
                    <span>9:41</span>
                    <div className="flex gap-1.5 items-center">
                        <div className="w-4 h-2.5 border rounded-[2px]" />
                        <div className="w-3 h-3 border-t-2 border-r-2 rotate-45" />
                    </div>
                </div>

                {/* Header */}
                <header className="px-6 py-4 flex items-center justify-between border-b border-border/50">
                    <div className="flex items-center gap-3">
                        <Avatar className="size-8">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span className="font-bold text-sm">Design System</span>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="size-8">
                            <Bell className="size-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="size-8">
                            <MoreVertical className="size-4" />
                        </Button>
                    </div>
                </header>

                {/* scrollable Content */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
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
                    <section className="space-y-3">
                        <h3 className="text-sm font-bold px-1">Recent Activity</h3>

                        {[1, 2, 3].map((i) => (
                            <Card key={i} className="overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="p-3 flex items-start gap-3">
                                        <Avatar className="size-10 rounded-lg">
                                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} />
                                            <AvatarFallback>U{i}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-center justify-between">
                                                <span className="font-bold text-xs">User_{i}</span>
                                                <span className="text-[10px] text-muted-foreground italic">2h ago</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                Just implemented the new Badge component in the mobile dashboard!
                                            </p>
                                            <div className="flex gap-4 pt-2">
                                                <button className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors">
                                                    <Heart className="size-3" /> 12
                                                </button>
                                                <button className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors">
                                                    <MessageSquare className="size-3" /> 4
                                                </button>
                                                <button className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors">
                                                    <Share2 className="size-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    {/* Tag Cloud */}
                    <div className="flex flex-wrap gap-2 px-1">
                        <Badge variant="default">Mobile</Badge>
                        <Badge variant="outline">React</Badge>
                        <Badge variant="success">Active</Badge>
                        <Badge variant="outline">Draft</Badge>
                    </div>
                </div>

                {/* Tab Bar */}
                <footer className="h-16 border-t border-border/50 bg-card/80 backdrop-blur-md px-6 flex items-center justify-between relative">
                    <Button variant="ghost" size="icon" className="flex flex-col gap-1 text-primary">
                        <Home className="size-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="flex flex-col gap-1 text-muted-foreground">
                        <Search className="size-5" />
                    </Button>
                    <div className="size-12 bg-primary rounded-full flex items-center justify-center -translate-y-6 shadow-lg shadow-primary/30 border-4 border-background">
                        <Plus className="size-6 text-primary-foreground" />
                    </div>
                    <Button variant="ghost" size="icon" className="flex flex-col gap-1 text-muted-foreground">
                        <MessageSquare className="size-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="flex flex-col gap-1 text-muted-foreground">
                        <User className="size-5" />
                    </Button>
                </footer>

                {/* Home Indicator */}
                <div className="h-8 flex items-center justify-center">
                    <div className="w-32 h-1 bg-muted-foreground/20 rounded-full" />
                </div>
            </div>

            <div className="p-6 bg-muted/30 rounded-2xl space-y-4">
                <h3 className="font-bold flex items-center gap-2">
                    <Settings className="size-4" />
                    Responsive Design Guidelines
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Use <code className="bg-muted px-1 rounded">StickyHeader</code> and <code className="bg-muted px-1 rounded">StickyFooter</code> for persistent navigation.</li>
                    <li>Maintain minimum touch target sizes of 44x44px.</li>
                    <li>Use <code className="bg-muted px-1 rounded">flex-col</code> on mobile that switch to <code className="bg-muted px-1 rounded">flex-row</code> on larger screens.</li>
                    <li>Leverage <code className="bg-muted px-1 rounded">Card</code> components to group content into logical chunks.</li>
                </ul>
            </div>
        </div>
    );
}

import { useState } from 'react';
import { Calendar } from '@lib/components/ui/calendar';
import { Card } from '@lib/components/ui/card';
import { Flex } from '@lib/components/layout/Flex';
import { Text } from '@lib/components/ui/typography';
import { Section, Example, PageHero } from './DocLayout';
import { addDays, format } from 'date-fns';

export function CalendarPage() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [range, setRange] = useState<{ from: Date; to: Date } | undefined>({
        from: new Date(),
        to: addDays(new Date(), 7),
    });

    return (
        <div className="space-y-12">
            <PageHero
                badge="Form"
                title="Calendar"
                description="A date picker component built on top of react-day-picker. Supports single, multiple, and range selection."
            />

            <Section
                title="Single Date"
                description="The default mode for selecting a single day."
            >
                <Example
                    title="Basic Calendar"
                    code={`const [date, setDate] = useState<Date | undefined>(new Date());
// ...
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  internalClassName="rounded-md border shadow"
/>`}
                >
                    <Flex direction="col" mdDirection="row" gap="xl" align="start">
                        <Card internalClassName="p-0 border shadow-md">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                internalClassName="rounded-md"
                            />
                        </Card>
                        <Flex align="center" justify="center" p={1.5} internalClassName="flex-1 border-2 border-dashed border-border rounded-xl bg-muted/20 h-full min-h-[300px]">
                            <Flex direction="col" align="center" gap="sm">
                                <Text size="sm" weight="medium" variant="muted" uppercase internalClassName="tracking-widest">Selected Date</Text>
                                <Text size="2xl" weight="bold">{date ? format(date, 'PPP') : 'No date selected'}</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Example>
            </Section>

            <Section
                title="Date Range"
                description="Select a start and end date."
            >
                <Example
                    title="Range Selection"
                    code={`<Calendar
  mode="range"
  selected={range}
  onSelect={setRange}
  internalClassName="rounded-md border"
/>`}
                >
                    <Card internalClassName="inline-block border shadow-md">
                        <Calendar
                            mode="range"
                            selected={range}
                            onSelect={(r: any) => setRange(r)}
                            internalClassName="rounded-md"
                        />
                    </Card>
                </Example>
            </Section>

            <Section
                title="Styling"
                description="The calendar uses system brand colors by default."
            >
                <p className="text-sm text-muted-foreground mb-4">
                    The primary colors are derived from your <code>--primary</code> and <code>--accent</code> CSS variables.
                </p>
            </Section>
        </div>
    );
}

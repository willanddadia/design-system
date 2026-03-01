import { useState } from 'react';
import type { Story } from '@ladle/react';
import { Calendar } from './calendar';
import { Card } from './card';
import { addDays, format } from 'date-fns';

export const SingleSelection: Story = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <Card className="p-0 border shadow-md">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md"
        />
      </Card>
      <div className="flex-1 p-6 border-2 border-dashed border-border rounded-xl flex items-center justify-center bg-muted/20">
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-2">Selected Date</p>
          <p className="text-2xl font-bold">{date ? format(date, 'PPP') : 'No date selected'}</p>
        </div>
      </div>
    </div>
  );
};

export const RangeSelection: Story = () => {
  const [range, setRange] = useState<{ from: Date; to: Date } | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });
  return (
    <Card className="inline-block border shadow-md">
      <Calendar
        mode="range"
        selected={range}
        onSelect={(r: any) => setRange(r)}
        className="rounded-md"
      />
    </Card>
  );
};

export default {
  title: 'UI/Calendar',
};

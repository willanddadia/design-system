import type { Story } from '@ladle/react';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Button } from './button';
import { Input } from './input';

export const Basic: Story = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open popover</Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-muted-foreground text-sm">
            Set the dimensions for the layer.
          </p>
        </div>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="width" className="text-sm font-medium">Width</label>
            <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="maxWidth" className="text-sm font-medium">Max. width</label>
            <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="height" className="text-sm font-medium">Height</label>
            <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="maxHeight" className="text-sm font-medium">Max. height</label>
            <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);

export default {
  title: 'UI/Popover',
};

import type { Story } from '@ladle/react';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';
import { Button } from './button';

export const Basic: Story = () => (
  <div className="flex items-center justify-center p-12">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </div>
);

export default {
  title: 'UI/Tooltip',
};

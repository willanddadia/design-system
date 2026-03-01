import type { Story } from '@ladle/react';
import { Textarea } from './textarea';

export const Sizes: Story = () => (
  <div className="space-y-3 max-w-sm">
    <Textarea fieldSize="sm" placeholder="Small textarea..." />
    <Textarea fieldSize="default" placeholder="Default textarea..." />
    <Textarea fieldSize="md" placeholder="Medium textarea..." />
    <Textarea fieldSize="lg" placeholder="Large textarea..." />
  </div>
);

export const States: Story = () => (
  <div className="space-y-3 max-w-sm">
    <Textarea error placeholder="Error state" />
    <Textarea disabled placeholder="Disabled" />
  </div>
);

export default {
  title: 'UI/Textarea',
};

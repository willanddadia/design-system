import type { Story } from '@ladle/react';
import { Input } from './input';

export const Sizes: Story = () => (
  <div className="space-y-3 max-w-sm">
    <Input fieldSize="sm" placeholder="Small input..." />
    <Input fieldSize="default" placeholder="Default input..." />
    <Input fieldSize="md" placeholder="Medium input..." />
    <Input fieldSize="lg" placeholder="Large input..." />
  </div>
);

export const States: Story = () => (
  <div className="space-y-3 max-w-sm">
    <Input error placeholder="Error state" />
    <Input disabled placeholder="Disabled" />
    <Input defaultValue="Read only" readOnly />
  </div>
);

export default {
  title: 'UI/Input',
};

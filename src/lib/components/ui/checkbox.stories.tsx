import type { Story } from '@ladle/react';
import { Checkbox } from './checkbox';

export const Basic: Story = () => (
  <div className="items-top flex space-x-2 p-4">
    <Checkbox id="terms" />
    <div className="grid gap-1.5 leading-none">
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
      <p className="text-muted-foreground text-sm">
        You agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  </div>
);

export const Disabled: Story = () => (
  <div className="flex items-center space-x-2 p-4">
    <Checkbox id="terms2" disabled />
    <label
      htmlFor="terms2"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Accept terms and conditions
    </label>
  </div>
);

export default {
  title: 'UI/Checkbox',
};

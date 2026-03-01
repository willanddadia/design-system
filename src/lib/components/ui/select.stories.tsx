import type { Story } from '@ladle/react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './select';

export const Basic: Story = () => (
  <div className="space-y-3 max-w-sm">
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a framework..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="react">React</SelectItem>
        <SelectItem value="vue">Vue</SelectItem>
        <SelectItem value="svelte">Svelte</SelectItem>
      </SelectContent>
    </Select>
    <Select>
      <SelectTrigger error>
        <SelectValue placeholder="Error state..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="error">Error</SelectItem>
      </SelectContent>
    </Select>
    <Select disabled>
      <SelectTrigger>
        <SelectValue placeholder="Disabled state..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="disabled">Disabled</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

export default {
  title: 'UI/Select',
};

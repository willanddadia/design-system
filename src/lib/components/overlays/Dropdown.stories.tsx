import { useState } from 'react';
import type { Story } from '@ladle/react';
import { Dropdown } from './Dropdown';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const Sizes: Story = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-3 max-w-sm">
      <Dropdown
        size="sm"
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Small..."
      />
      <Dropdown
        size="md"
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Medium..."
      />
      <Dropdown
        size="lg"
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Large..."
      />
    </div>
  );
};

export const States: Story = () => {
  return (
    <div className="space-y-3 max-w-sm">
      <Dropdown error options={options} placeholder="Error state..." onChange={() => { }} value="" />
      <Dropdown disabled options={options} placeholder="Disabled state..." onChange={() => { }} value="" />
    </div>
  );
}

export default {
  title: 'Overlays/Dropdown',
};

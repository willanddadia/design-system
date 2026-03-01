import { useState } from 'react';
import type { Story } from '@ladle/react';
import { SelectBox } from './SelectBox';

const options = [
  { value: 'basic', label: 'Basic Plan', description: 'Great for individuals' },
  { value: 'pro', label: 'Pro Plan', description: 'Advanced features for teams' },
  { value: 'enterprise', label: 'Enterprise', description: 'Custom solutions' },
];

export const SingleSelection: Story = () => {
  const [value, setValue] = useState('');
  return (
    <SelectBox
      options={options}
      value={value}
      onChange={(v) => setValue(v as string)}
    />
  );
};

export const MultiSelection: Story = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <SelectBox
      options={options}
      value={value}
      onChange={(v) => setValue(v as string[])}
      multiple
    />
  );
};

export default {
  title: 'UI/SelectBox',
};

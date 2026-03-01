import { useState } from 'react';
import type { Story } from '@ladle/react';
import { Switch } from './switch';

export const States: Story = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="space-y-4">
      <Switch label="Default switch" />
      <Switch
        label="Controlled switch"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <Switch label="Disabled switch" disabled />
      <Switch label="Checked disabled" checked disabled />
    </div>
  );
};

export default {
  title: 'UI/Switch',
};

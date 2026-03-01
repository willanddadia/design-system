import type { Story } from '@ladle/react';
import { Progress } from './progress';

export const Basic: Story = () => (
  <div className="w-[400px] p-8 space-y-8">
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Loading...</span>
        <span>60%</span>
      </div>
      <Progress value={60} />
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Completed</span>
        <span>100%</span>
      </div>
      <Progress value={100} />
    </div>
  </div>
);

export default {
  title: 'UI/Progress',
};

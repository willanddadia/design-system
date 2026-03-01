import type { Story } from '@ladle/react';
import { Badge } from './badge';
import { Flex } from '../layout/Flex';

export const Variants: Story = () => (
  <Flex gap="sm" wrap>
    <Badge variant="default">Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
  </Flex>
);

export const UsageInContext: Story = () => (
  <div className="space-y-2">
    <p className="flex items-center gap-2">
      Order #1042 <Badge variant="success">Delivered</Badge>
    </p>
    <p className="flex items-center gap-2">
      Order #1041 <Badge variant="default">Processing</Badge>
    </p>
    <p className="flex items-center gap-2">
      Order #1040 <Badge variant="destructive">Failed</Badge>
    </p>
  </div>
);

export default {
  title: 'UI/Badge',
};

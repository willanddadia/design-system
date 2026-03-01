import type { Story } from '@ladle/react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

export const Basic: Story = () => (
  <div className="flex gap-4 items-center">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  </div>
);

export default {
  title: 'UI/Avatar',
};

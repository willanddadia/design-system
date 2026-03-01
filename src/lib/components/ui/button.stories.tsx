import type { Story } from '@ladle/react';
import { Button } from './button';
import { Flex } from '../layout/Flex';
import { Heart, Search, Settings, Share2, ChevronRight } from 'lucide-react';

export const Variants: Story = () => (
  <Flex gap="sm" wrap>
    <Button variant="default">Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </Flex>
);

export const Sizes: Story = () => (
  <Flex gap="sm" align="center">
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </Flex>
);

export const Icons: Story = () => (
  <Flex gap="sm" wrap>
    <Button leftIcon={<Heart className="size-4" />}>Like</Button>
    <Button rightIcon={<Share2 className="size-4" />}>Share</Button>
    <Button
      variant="outline"
      leftIcon={<Search className="size-4" />}
      rightIcon={<ChevronRight className="size-4" />}
    >
      Search
    </Button>
    <Button size="icon" variant="default">
      <Settings className="size-5" />
    </Button>
  </Flex>
);

export const LoadingState: Story = () => (
  <Flex gap="sm">
    <Button leftIcon={<Search className="size-4 animate-spin" />} disabled>
      Searching...
    </Button>
    <Button size="icon" disabled>
      <Search className="size-4 animate-spin" />
    </Button>
  </Flex>
);

export const Link: Story = () => (
  <Flex gap="sm">
    <Button href="https://google.com" target="_blank">
      External Link
    </Button>
    <Button href="#target" variant="outline">
      Internal Anchor
    </Button>
  </Flex>
);

export default {
  title: 'UI/Button',
};

'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@lib/utils/utils';

function Avatar({ internalClassName, ...props }: Omit<React.ComponentProps<typeof AvatarPrimitive.Root>, 'className'> & { internalClassName?: string }) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn('relative flex size-10 shrink-0 overflow-hidden rounded-full', internalClassName)}
      {...props}
    />
  );
}

function AvatarImage({ internalClassName, ...props }: Omit<React.ComponentProps<typeof AvatarPrimitive.Image>, 'className'> & { internalClassName?: string }) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full', internalClassName)}
      {...props}
    />
  );
}

function AvatarFallback({ internalClassName, ...props }: Omit<React.ComponentProps<typeof AvatarPrimitive.Fallback>, 'className'> & { internalClassName?: string }) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn('bg-muted flex size-full items-center justify-center rounded-full', internalClassName)}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };

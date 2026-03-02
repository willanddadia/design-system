'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@lib/utils/utils';

import { SpacingProps, getSpacingClasses } from '@lib/utils/spacing';

export interface SeparatorProps extends Omit<React.ComponentProps<typeof SeparatorPrimitive.Root>, 'className'>, SpacingProps {
  internalClassName?: string;
}

function Separator({
  orientation = 'horizontal',
  decorative = true,
  internalClassName,
  // Spacing props
  m, mt, mr, mb, ml, mx, my,
  p, pt, pr, pb, pl, px, py,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        getSpacingClasses({ m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py }),
        internalClassName,
      )}
      {...props}
    />
  );
}

export { Separator };

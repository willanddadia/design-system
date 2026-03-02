'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@lib/utils/utils';

import { SpacingProps, getSpacingClasses } from '@lib/utils/spacing';

export interface LabelProps extends Omit<React.ComponentProps<typeof LabelPrimitive.Root>, 'className'>, SpacingProps {
  internalClassName?: string;
}

function Label({
  internalClassName,
  // Spacing props
  m, mt, mr, mb, ml, mx, my,
  p, pt, pr, pb, pl, px, py,
  ...props
}: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        getSpacingClasses({ m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py }),
        internalClassName
      )}
      {...props}
    />
  );
}

export { Label };

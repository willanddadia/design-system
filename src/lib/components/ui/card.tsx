import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@lib/utils/utils';
import { SpacingProps, getSpacingClasses } from '@lib/utils/spacing';

const cardVariants = cva('bg-card text-card-foreground flex flex-col gap-6 rounded-xl', {
  variants: {
    variant: {
      default: 'border',
      bordered: 'border-2 border-border',
      elevated: 'shadow-lg border-transparent',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

function Card({
  variant,
  internalClassName,
  // Spacing props
  m, mt, mr, mb, ml, mx, my,
  p, pt, pr, pb, pl, px, py,
  ...props
}: Omit<React.ComponentProps<'div'>, 'className'> & VariantProps<typeof cardVariants> & { internalClassName?: string } & SpacingProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        cardVariants({ variant }),
        getSpacingClasses({ m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py }),
        internalClassName
      )}
      {...props}
    />
  );
}

function CardHeader({
  internalClassName,
  // Spacing props
  m, mt, mr, mb, ml, mx, my,
  p, pt, pr, pb, pl, px, py,
  ...props
}: Omit<React.ComponentProps<'div'>, 'className'> & { internalClassName?: string } & SpacingProps) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        getSpacingClasses({ m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py }),
        internalClassName
      )}
      {...props}
    />
  );
}

function CardTitle({
  internalClassName,
  // Spacing props
  m, mt, mr, mb, ml, mx, my,
  p, pt, pr, pb, pl, px, py,
  ...props
}: Omit<React.ComponentProps<'div'>, 'className'> & { internalClassName?: string } & SpacingProps) {
  return (
    <h4
      data-slot="card-title"
      className={cn(
        'leading-none',
        getSpacingClasses({ m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py }),
        internalClassName
      )}
      {...props}
    />
  );
}

function CardDescription({
  internalClassName,
  // Spacing props
  m, mt, mr, mb, ml, mx, my,
  p, pt, pr, pb, pl, px, py,
  ...props
}: Omit<React.ComponentProps<'div'>, 'className'> & { internalClassName?: string } & SpacingProps) {
  return (
    <p
      data-slot="card-description"
      className={cn(
        'text-muted-foreground',
        getSpacingClasses({ m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py }),
        internalClassName
      )}
      {...props}
    />
  );
}

function CardAction({
  internalClassName,
  // Spacing props
  m, mt, mr, mb, ml, mx, my,
  p, pt, pr, pb, pl, px, py,
  ...props
}: Omit<React.ComponentProps<'div'>, 'className'> & { internalClassName?: string } & SpacingProps) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        getSpacingClasses({ m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py }),
        internalClassName
      )}
      {...props}
    />
  );
}

function CardContent({
  internalClassName,
  // Spacing props
  m, mt, mr, mb, ml, mx, my,
  p, pt, pr, pb, pl, px, py,
  ...props
}: Omit<React.ComponentProps<'div'>, 'className'> & { internalClassName?: string } & SpacingProps) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        'px-6 [&:last-child]:pb-6',
        getSpacingClasses({ m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py }),
        internalClassName
      )}
      {...props}
    />
  );
}

function CardFooter({
  internalClassName,
  // Spacing props
  m, mt, mr, mb, ml, mx, my,
  p, pt, pr, pb, pl, px, py,
  ...props
}: Omit<React.ComponentProps<'div'>, 'className'> & { internalClassName?: string } & SpacingProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'flex items-center px-6 pb-6 [.border-t]:pt-6',
        getSpacingClasses({ m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py }),
        internalClassName
      )}
      {...props}
    />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };

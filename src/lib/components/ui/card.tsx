import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@lib/utils/utils';

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
  ...props
}: Omit<React.ComponentProps<'div'>, 'className'> & VariantProps<typeof cardVariants> & { internalClassName?: string }) {
  return <div data-slot="card" className={cn(cardVariants({ variant }), internalClassName)} {...props} />;
}

function CardHeader({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & { internalClassName?: string }) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        internalClassName
      )}
      {...props}
    />
  );
}

function CardTitle({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & { internalClassName?: string }) {
  return <h4 data-slot="card-title" className={cn('leading-none', internalClassName)} {...props} />;
}

function CardDescription({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & { internalClassName?: string }) {
  return (
    <p data-slot="card-description" className={cn('text-muted-foreground', internalClassName)} {...props} />
  );
}

function CardAction({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & { internalClassName?: string }) {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', internalClassName)}
      {...props}
    />
  );
}

function CardContent({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & { internalClassName?: string }) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6 [&:last-child]:pb-6', internalClassName)}
      {...props}
    />
  );
}

function CardFooter({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & { internalClassName?: string }) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 pb-6 [.border-t]:pt-6', internalClassName)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };

import { cn } from '@lib/utils/utils';

function Skeleton({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & { internalClassName?: string }) {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-accent animate-pulse rounded-md', internalClassName)}
      {...props}
    />
  );
}

export { Skeleton };

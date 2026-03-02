import { cn } from '@lib/utils/utils';
import { SpacingProps, getSpacingClasses } from '@lib/utils/spacing';

export interface SkeletonProps extends Omit<React.ComponentProps<'div'>, 'className'>, SpacingProps {
  internalClassName?: string;
}

function Skeleton({
  internalClassName,
  // Spacing props
  m, mt, mr, mb, ml, mx, my,
  p, pt, pr, pb, pl, px, py,
  ...props
}: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        'bg-accent animate-pulse rounded-md',
        getSpacingClasses({ m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py }),
        internalClassName
      )}
      {...props}
    />
  );
}

export { Skeleton };

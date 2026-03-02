import { HTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@lib/utils/utils';
import { SpacingProps, OverflowProps, getSpacingClasses, getOverflowClasses } from '@lib/utils/spacing';

export interface PaddedProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, SpacingProps, OverflowProps {
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  bordered?: boolean;
  asChild?: boolean;
  internalClassName?: string;
}

export const Padded = forwardRef<HTMLDivElement, PaddedProps>(
  (
    {
      padding = 'md',
      bordered = false,
      asChild = false,
      children,
      internalClassName,
      // Spacing props
      m, mt, mr, mb, ml, mx, my,
      p, pt, pr, pb, pl, px, py,
      // Overflow props
      overflow, overflowX, overflowY,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'div';
    const paddings = {
      none: '',
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
    };

    return (
      <Comp
        ref={ref}
        className={cn(
          paddings[padding],
          bordered ? 'border-2 border-border rounded-lg' : '',
          getSpacingClasses({ m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py }),
          getOverflowClasses({ overflow, overflowX, overflowY }),
          internalClassName
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Padded.displayName = 'Padded';

import { HTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@lib/utils/utils';
import { SpacingProps, OverflowProps, getSpacingClasses, getOverflowClasses } from '@lib/utils/spacing';

export interface ContainerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, SpacingProps, OverflowProps {
  margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  bordered?: boolean;
  asChild?: boolean;
  internalClassName?: string;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      margin = 'none',
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
    const margins = {
      none: '',
      sm: 'm-2',
      md: 'm-4',
      lg: 'm-6',
      xl: 'm-8',
    };

    return (
      <Comp
        ref={ref}
        className={cn(
          margins[margin],
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

Container.displayName = 'Container';

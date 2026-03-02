import { HTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface PaddedProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  bordered?: boolean;
  asChild?: boolean;
}

export const Padded = forwardRef<HTMLDivElement, PaddedProps>(
  ({ padding = 'md', bordered = false, asChild = false, children, ...props }, ref) => {
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
        className={`${paddings[padding]} ${bordered ? 'border-2 border-border rounded-lg' : ''}`}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Padded.displayName = 'Padded';

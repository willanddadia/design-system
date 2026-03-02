import { HTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  bordered?: boolean;
  asChild?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ margin = 'none', bordered = false, asChild = false, className = '', children, ...props }, ref) => {
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
        className={`${margins[margin]} ${bordered ? 'border-2 border-border rounded-lg' : ''} ${className}`}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Container.displayName = 'Container';

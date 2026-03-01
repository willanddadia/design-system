import { HTMLAttributes, forwardRef } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  bordered?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ margin = 'none', bordered = false, className = '', children, ...props }, ref) => {
    const margins = {
      none: '',
      sm: 'm-2',
      md: 'm-4',
      lg: 'm-6',
      xl: 'm-8',
    };
    
    return (
      <div
        ref={ref}
        className={`${margins[margin]} ${bordered ? 'border-2 border-border rounded-lg' : ''} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

import { HTMLAttributes, forwardRef } from 'react';

export interface PaddedProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  bordered?: boolean;
}

export const Padded = forwardRef<HTMLDivElement, PaddedProps>(
  ({ padding = 'md', bordered = false, className = '', children, ...props }, ref) => {
    const paddings = {
      none: '',
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
    };
    
    return (
      <div
        ref={ref}
        className={`${paddings[padding]} ${bordered ? 'border-2 border-border rounded-lg' : ''} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Padded.displayName = 'Padded';

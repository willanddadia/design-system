import { SelectHTMLAttributes, forwardRef } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, className = '', children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={`
          w-full h-11 px-4 pr-10 rounded-lg 
          bg-input-background border-2 border-transparent
          transition-colors
          text-foreground
          focus:outline-none focus:border-primary
          disabled:opacity-50 disabled:pointer-events-none
          ${error ? 'border-destructive focus:border-destructive' : ''}
          ${className}
        `}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = 'Select';

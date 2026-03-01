import { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, size = 'md', className = '', ...props }, ref) => {
    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-4',
      lg: 'h-14 px-5 text-lg',
    };
    
    return (
      <input
        ref={ref}
        className={`
          w-full ${sizes[size]} rounded-lg 
          bg-input-background border-2 border-transparent
          transition-colors
          placeholder:text-muted-foreground
          focus:outline-none focus:border-primary
          disabled:opacity-50 disabled:pointer-events-none
          ${error ? 'border-destructive focus:border-destructive' : ''}
          ${className}
        `}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
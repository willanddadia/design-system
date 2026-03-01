import { TextareaHTMLAttributes, forwardRef } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, size = 'md', className = '', ...props }, ref) => {
    const sizes = {
      sm: 'min-h-[80px] px-3 py-2 text-sm',
      md: 'min-h-[100px] px-4 py-3',
      lg: 'min-h-[120px] px-5 py-4 text-lg',
    };
    
    return (
      <textarea
        ref={ref}
        className={`
          w-full ${sizes[size]} rounded-lg 
          bg-input-background border-2 border-transparent
          transition-colors
          placeholder:text-muted-foreground
          resize-y
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

Textarea.displayName = 'Textarea';
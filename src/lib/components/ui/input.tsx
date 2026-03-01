import * as React from 'react';

import { cn } from '@lib/utils/utils';

function Input({
  className,
  type,
  error,
  fieldSize = 'default',
  ...props
}: React.ComponentProps<'input'> & {
  error?: boolean;
  fieldSize?: 'default' | 'sm' | 'md' | 'lg';
}) {
  return (
    <input
      type={type}
      data-slot="input"
      data-size={fieldSize}
      aria-invalid={error}
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        'data-[size=sm]:h-8 data-[size=default]:h-9 data-[size=md]:h-11 data-[size=lg]:h-14',
        className,
      )}
      {...props}
    />
  );
}

export { Input };

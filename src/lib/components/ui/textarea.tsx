import * as React from 'react';

import { cn } from '@lib/utils/utils';

function Textarea({
  error,
  fieldSize = 'default',
  ...props
}: Omit<React.ComponentProps<'textarea'>, 'className'> & {
  error?: boolean;
  fieldSize?: 'default' | 'sm' | 'md' | 'lg';
}) {
  return (
    <textarea
      data-slot="textarea"
      data-size={fieldSize}
      aria-invalid={error}
      className={cn(
        'resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'data-[size=sm]:min-h-20 data-[size=default]:min-h-24 data-[size=md]:min-h-28 data-[size=lg]:min-h-32'
      )}
      {...props}
    />
  );
}

export { Textarea };

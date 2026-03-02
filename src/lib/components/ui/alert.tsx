import * as React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle, X } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@lib/utils/utils';

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr_auto] grid-cols-[0_1fr_auto] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground',
        destructive:
          'text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90',
        success: 'bg-green-50 text-green-900 border-green-200 [&>svg]:text-green-600',
        warning: 'bg-yellow-50 text-yellow-900 border-yellow-200 [&>svg]:text-yellow-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const icons = {
  default: Info,
  success: CheckCircle,
  warning: AlertCircle,
  destructive: XCircle,
};

function Alert({
  variant = 'default',
  onClose,
  title,
  children,
  ...props
}: Omit<React.ComponentProps<'div'>, 'className'> &
  VariantProps<typeof alertVariants> & {
    onClose?: () => void;
    title?: string;
  }) {
  const Icon = icons[variant as keyof typeof icons] || icons.default;

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }))}
      {...props}
    >
      <Icon />
      <div className="col-start-2 flex flex-col gap-1 min-w-0">
        {title && <AlertTitle>{title}</AlertTitle>}
        {children}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="col-start-3 row-start-1 ml-auto -mr-1 -mt-1 p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors"
          aria-label="Close alert"
        >
          <X className="size-4 opacity-50 hover:opacity-100" />
        </button>
      )}
    </div>
  );
}

function AlertTitle({ ...props }: Omit<React.ComponentProps<'div'>, 'className'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn('line-clamp-1 min-h-4 font-medium tracking-tight')}
      {...props}
    />
  );
}

function AlertDescription({ ...props }: Omit<React.ComponentProps<'div'>, 'className'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'text-muted-foreground grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed'
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };

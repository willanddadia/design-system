import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ExternalLink } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@lib/utils/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        none: 'p-0 h-auto',
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        md: 'h-11 rounded-md px-6 has-[>svg]:px-4',
        lg: 'h-12 rounded-md px-8 has-[>svg]:px-6',
        icon: 'size-9 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'className'>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
}

function Button({
  variant,
  size,
  asChild = false,
  leftIcon,
  rightIcon,
  href,
  target,
  children,
  internalClassName,
  ...props
}: ButtonProps & { internalClassName?: string }) {
  const isExternalLink = variant === 'link' && target === '_blank';
  const finalRightIcon = rightIcon || (isExternalLink ? <ExternalLink className="size-3.5 opacity-70" /> : null);

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={cn(buttonVariants({ variant, size }), internalClassName)}
        data-slot="button"
      >
        {leftIcon}
        {children}
        {finalRightIcon}
      </a>
    );
  }

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), internalClassName)}
      {...props}
    >
      {asChild ? children : (
        <>
          {leftIcon}
          {children}
          {finalRightIcon}
        </>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };

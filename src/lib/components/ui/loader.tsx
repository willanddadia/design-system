import * as React from 'react';
import { cn } from '@lib/utils/utils';
import { Loader2 } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const loaderVariants = cva(
    'animate-spin text-muted-foreground',
    {
        variants: {
            size: {
                default: 'size-6',
                sm: 'size-4',
                lg: 'size-8',
                xl: 'size-12',
            },
        },
        defaultVariants: {
            size: 'default',
        },
    }
);

interface LoaderProps extends React.ComponentProps<'div'>, VariantProps<typeof loaderVariants> { }

function Loader({ className, size, ...props }: LoaderProps) {
    return (
        <div data-slot="loader" className={cn('flex items-center justify-center', className)} {...props}>
            <Loader2 className={cn(loaderVariants({ size }))} />
        </div>
    );
}

function FullScreenLoader({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="full-screen-loader"
            className={cn(
                'fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm',
                className
            )}
            {...props}
        >
            <Loader size="xl" />
        </div>
    );
}

function LoadingOverlay({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="loading-overlay"
            className={cn(
                'absolute inset-0 z-10 flex items-center justify-center bg-background/50 backdrop-blur-[1px]',
                className
            )}
            {...props}
        >
            <Loader />
        </div>
    );
}

export { Loader, FullScreenLoader, LoadingOverlay, loaderVariants };

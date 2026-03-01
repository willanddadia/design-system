import * as React from 'react';
import { cn } from '@lib/utils/utils';

interface StickyHeaderProps extends React.ComponentProps<'header'> {
    blur?: boolean;
}

export function StickyHeader({
    className,
    blur = true,
    children,
    ...props
}: StickyHeaderProps) {
    return (
        <header
            data-slot="sticky-header"
            className={cn(
                'sticky top-0 z-40 w-full border-b backdrop-blur-md',
                blur ? 'bg-background/80' : 'bg-background',
                className,
            )}
            {...props}
        >
            {children}
        </header>
    );
}

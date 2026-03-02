import * as React from 'react';
import { cn } from '@lib/utils/utils';

interface StickyHeaderProps extends Omit<React.ComponentProps<'header'>, 'className'> {
    blur?: boolean;
}

export function StickyHeader({
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
            )}
            {...props}
        >
            {children}
        </header>
    );
}

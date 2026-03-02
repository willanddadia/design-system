import * as React from 'react';
import { cn } from '@lib/utils/utils';

interface StickyFooterProps extends Omit<React.ComponentProps<'footer'>, 'className'> {
    blur?: boolean;
}

export function StickyFooter({
    blur = true,
    children,
    ...props
}: StickyFooterProps) {
    return (
        <footer
            data-slot="sticky-footer"
            className={cn(
                'sticky bottom-0 z-40 w-full border-t backdrop-blur-md',
                blur ? 'bg-background/80' : 'bg-background',
            )}
            {...props}
        >
            {children}
        </footer>
    );
}

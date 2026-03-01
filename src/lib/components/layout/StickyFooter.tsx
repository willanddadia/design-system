import * as React from 'react';
import { cn } from '@lib/utils/utils';

interface StickyFooterProps extends React.ComponentProps<'footer'> {
    blur?: boolean;
}

export function StickyFooter({
    className,
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
                className,
            )}
            {...props}
        >
            {children}
        </footer>
    );
}

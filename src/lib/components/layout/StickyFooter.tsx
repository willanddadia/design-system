import * as React from 'react';
import { cn } from '@lib/utils/utils';
import { SpacingProps, OverflowProps, getSpacingClasses, getOverflowClasses } from '@lib/utils/spacing';

interface StickyFooterProps extends Omit<React.ComponentProps<'footer'>, 'className'>, SpacingProps, OverflowProps {
    blur?: boolean;
    internalClassName?: string;
}

export function StickyFooter({
    blur = true,
    children,
    internalClassName,
    // Spacing props
    m, mt, mr, mb, ml, mx, my,
    p, pt, pr, pb, pl, px, py,
    // Overflow props
    overflow, overflowX, overflowY,
    ...props
}: StickyFooterProps) {
    return (
        <footer
            data-slot="sticky-footer"
            className={cn(
                'sticky bottom-0 z-40 w-full border-t backdrop-blur-md',
                blur ? 'bg-background/80' : 'bg-background',
                getSpacingClasses({ m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py }),
                getOverflowClasses({ overflow, overflowX, overflowY }),
                internalClassName
            )}
            {...props}
        >
            {children}
        </footer>
    );
}

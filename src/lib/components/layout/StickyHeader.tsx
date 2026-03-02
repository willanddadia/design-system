import * as React from 'react';
import { cn } from '@lib/utils/utils';
import { SpacingProps, OverflowProps, getSpacingClasses, getOverflowClasses } from '@lib/utils/spacing';

interface StickyHeaderProps extends Omit<React.ComponentProps<'header'>, 'className'>, SpacingProps, OverflowProps {
    blur?: boolean;
    internalClassName?: string;
}

export function StickyHeader({
    blur = true,
    children,
    internalClassName,
    // Spacing props
    m, mt, mr, mb, ml, mx, my,
    p, pt, pr, pb, pl, px, py,
    // Overflow props
    overflow, overflowX, overflowY,
    ...props
}: StickyHeaderProps) {
    return (
        <header
            data-slot="sticky-header"
            className={cn(
                'sticky top-0 z-40 w-full border-b backdrop-blur-md',
                blur ? 'bg-background/80' : 'bg-background',
                getSpacingClasses({ m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py }),
                getOverflowClasses({ overflow, overflowX, overflowY }),
                internalClassName
            )}
            {...props}
        >
            {children}
        </header>
    );
}

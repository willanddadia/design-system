import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
declare function Separator({ orientation, decorative, ...props }: Omit<React.ComponentProps<typeof SeparatorPrimitive.Root>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
export { Separator };

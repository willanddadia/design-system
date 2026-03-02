import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
declare function Label({ internalClassName, ...props }: Omit<React.ComponentProps<typeof LabelPrimitive.Root>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
export { Label };

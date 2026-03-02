import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
declare function Switch({ label, ...props }: Omit<React.ComponentProps<typeof SwitchPrimitive.Root>, 'className'> & {
    label?: string;
}): import("react/jsx-runtime").JSX.Element;
export { Switch };

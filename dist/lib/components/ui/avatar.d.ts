import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
declare function Avatar({ internalClassName, ...props }: Omit<React.ComponentProps<typeof AvatarPrimitive.Root>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function AvatarImage({ internalClassName, ...props }: Omit<React.ComponentProps<typeof AvatarPrimitive.Image>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function AvatarFallback({ internalClassName, ...props }: Omit<React.ComponentProps<typeof AvatarPrimitive.Fallback>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
export { Avatar, AvatarImage, AvatarFallback };

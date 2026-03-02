import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
declare function Avatar({ ...props }: Omit<React.ComponentProps<typeof AvatarPrimitive.Root>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function AvatarImage({ ...props }: Omit<React.ComponentProps<typeof AvatarPrimitive.Image>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function AvatarFallback({ ...props }: Omit<React.ComponentProps<typeof AvatarPrimitive.Fallback>, 'className'>): import("react/jsx-runtime").JSX.Element;
export { Avatar, AvatarImage, AvatarFallback };

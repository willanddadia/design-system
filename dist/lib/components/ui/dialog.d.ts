import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
declare function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
declare function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>): import("react/jsx-runtime").JSX.Element;
declare function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>): import("react/jsx-runtime").JSX.Element;
declare function DialogOverlay({ internalClassName, ...props }: Omit<React.ComponentProps<typeof DialogPrimitive.Overlay>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function DialogContent({ internalClassName, children, ...props }: Omit<React.ComponentProps<typeof DialogPrimitive.Content>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function DialogHeader({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function DialogFooter({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function DialogTitle({ internalClassName, ...props }: Omit<React.ComponentProps<typeof DialogPrimitive.Title>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function DialogDescription({ internalClassName, ...props }: Omit<React.ComponentProps<typeof DialogPrimitive.Description>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, };

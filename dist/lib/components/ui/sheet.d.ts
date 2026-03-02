import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
declare function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
declare function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>): import("react/jsx-runtime").JSX.Element;
declare function SheetContent({ children, side, ...props }: Omit<React.ComponentProps<typeof SheetPrimitive.Content>, 'className'> & {
    side?: 'top' | 'right' | 'bottom' | 'left';
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function SheetHeader({ ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function SheetFooter({ ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function SheetTitle({ ...props }: Omit<React.ComponentProps<typeof SheetPrimitive.Title>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function SheetDescription({ ...props }: Omit<React.ComponentProps<typeof SheetPrimitive.Description>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, };

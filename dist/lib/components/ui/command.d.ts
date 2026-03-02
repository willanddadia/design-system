import { Command as CommandPrimitive } from 'cmdk';
import { Dialog } from './dialog';
import * as React from 'react';
declare function Command({ internalClassName, ...props }: Omit<React.ComponentProps<typeof CommandPrimitive>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CommandDialog({ title, description, children, ...props }: Omit<React.ComponentProps<typeof Dialog>, 'className'> & {
    title?: string;
    description?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CommandInput({ internalClassName, ...props }: Omit<React.ComponentProps<typeof CommandPrimitive.Input>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CommandList({ internalClassName, ...props }: Omit<React.ComponentProps<typeof CommandPrimitive.List>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CommandEmpty({ ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>): import("react/jsx-runtime").JSX.Element;
declare function CommandGroup({ internalClassName, ...props }: Omit<React.ComponentProps<typeof CommandPrimitive.Group>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CommandSeparator({ internalClassName, ...props }: Omit<React.ComponentProps<typeof CommandPrimitive.Separator>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CommandItem({ internalClassName, ...props }: Omit<React.ComponentProps<typeof CommandPrimitive.Item>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CommandShortcut({ internalClassName, ...props }: React.ComponentProps<'span'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator, };

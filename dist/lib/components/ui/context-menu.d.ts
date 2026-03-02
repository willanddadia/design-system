import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
declare function ContextMenu({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function ContextMenuTrigger({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
declare function ContextMenuGroup({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Group>): import("react/jsx-runtime").JSX.Element;
declare function ContextMenuPortal({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Portal>): import("react/jsx-runtime").JSX.Element;
declare function ContextMenuSub({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Sub>): import("react/jsx-runtime").JSX.Element;
declare function ContextMenuRadioGroup({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>): import("react/jsx-runtime").JSX.Element;
declare function ContextMenuSubTrigger({ inset, children, ...props }: Omit<React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger>, 'className'> & {
    inset?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function ContextMenuSubContent({ ...props }: Omit<React.ComponentProps<typeof ContextMenuPrimitive.SubContent>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function ContextMenuContent({ ...props }: Omit<React.ComponentProps<typeof ContextMenuPrimitive.Content>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function ContextMenuItem({ inset, variant, ...props }: Omit<React.ComponentProps<typeof ContextMenuPrimitive.Item>, 'className'> & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
}): import("react/jsx-runtime").JSX.Element;
declare function ContextMenuCheckboxItem({ children, checked, ...props }: Omit<React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function ContextMenuRadioItem({ children, ...props }: Omit<React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function ContextMenuLabel({ inset, ...props }: Omit<React.ComponentProps<typeof ContextMenuPrimitive.Label>, 'className'> & {
    inset?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function ContextMenuSeparator({ ...props }: Omit<React.ComponentProps<typeof ContextMenuPrimitive.Separator>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function ContextMenuShortcut({ ...props }: Omit<React.ComponentProps<'span'>, 'className'>): import("react/jsx-runtime").JSX.Element;
export { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup, };

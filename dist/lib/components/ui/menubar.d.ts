import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
declare function Menubar({ ...props }: Omit<React.ComponentProps<typeof MenubarPrimitive.Root>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function MenubarMenu({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Menu>): import("react/jsx-runtime").JSX.Element;
declare function MenubarGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Group>): import("react/jsx-runtime").JSX.Element;
declare function MenubarPortal({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Portal>): import("react/jsx-runtime").JSX.Element;
declare function MenubarRadioGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>): import("react/jsx-runtime").JSX.Element;
declare function MenubarTrigger({ ...props }: Omit<React.ComponentProps<typeof MenubarPrimitive.Trigger>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function MenubarContent({ align, alignOffset, sideOffset, ...props }: Omit<React.ComponentProps<typeof MenubarPrimitive.Content>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function MenubarItem({ inset, variant, ...props }: Omit<React.ComponentProps<typeof MenubarPrimitive.Item>, 'className'> & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
}): import("react/jsx-runtime").JSX.Element;
declare function MenubarCheckboxItem({ children, checked, ...props }: Omit<React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function MenubarRadioItem({ children, ...props }: Omit<React.ComponentProps<typeof MenubarPrimitive.RadioItem>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function MenubarLabel({ inset, ...props }: Omit<React.ComponentProps<typeof MenubarPrimitive.Label>, 'className'> & {
    inset?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function MenubarSeparator({ ...props }: Omit<React.ComponentProps<typeof MenubarPrimitive.Separator>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function MenubarShortcut({ ...props }: Omit<React.ComponentProps<'span'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function MenubarSub({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Sub>): import("react/jsx-runtime").JSX.Element;
declare function MenubarSubTrigger({ inset, children, ...props }: Omit<React.ComponentProps<typeof MenubarPrimitive.SubTrigger>, 'className'> & {
    inset?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function MenubarSubContent({ ...props }: Omit<React.ComponentProps<typeof MenubarPrimitive.SubContent>, 'className'>): import("react/jsx-runtime").JSX.Element;
export { Menubar, MenubarPortal, MenubarMenu, MenubarTrigger, MenubarContent, MenubarGroup, MenubarSeparator, MenubarLabel, MenubarItem, MenubarShortcut, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarSub, MenubarSubTrigger, MenubarSubContent, };

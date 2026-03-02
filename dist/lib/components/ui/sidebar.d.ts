import { VariantProps } from 'class-variance-authority';
import { Button } from './button';
import { Input } from './input';
import { Separator } from './separator';
import { TooltipContent } from './tooltip';
import * as React from 'react';
type SidebarContextProps = {
    state: 'expanded' | 'collapsed';
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};
declare function useSidebar(): SidebarContextProps;
declare function SidebarProvider({ defaultOpen, open: openProp, onOpenChange: setOpenProp, style, children, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}): import("react/jsx-runtime").JSX.Element;
declare function Sidebar({ side, variant, collapsible, children, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
}): import("react/jsx-runtime").JSX.Element;
declare function SidebarTrigger({ onClick, ...props }: Omit<React.ComponentProps<typeof Button>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarRail({ ...props }: Omit<React.ComponentProps<'button'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarInset({ ...props }: Omit<React.ComponentProps<'main'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarInput({ ...props }: Omit<React.ComponentProps<typeof Input>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarHeader({ ...props }: Omit<React.ComponentProps<'div'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarFooter({ ...props }: Omit<React.ComponentProps<'div'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarSeparator({ ...props }: Omit<React.ComponentProps<typeof Separator>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarContent({ ...props }: Omit<React.ComponentProps<'div'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarGroup({ ...props }: Omit<React.ComponentProps<'div'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarGroupLabel({ asChild, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function SidebarGroupAction({ asChild, ...props }: Omit<React.ComponentProps<'button'>, 'className'> & {
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function SidebarGroupContent({ ...props }: Omit<React.ComponentProps<'div'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenu({ ...props }: Omit<React.ComponentProps<'ul'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuItem({ ...props }: Omit<React.ComponentProps<'li'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare const sidebarMenuButtonVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function SidebarMenuButton({ asChild, isActive, variant, size, tooltip, ...props }: Omit<React.ComponentProps<'button'>, 'className'> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuAction({ asChild, showOnHover, ...props }: Omit<React.ComponentProps<'button'>, 'className'> & {
    asChild?: boolean;
    showOnHover?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuBadge({ ...props }: Omit<React.ComponentProps<'div'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuSkeleton({ showIcon, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    showIcon?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuSub({ ...props }: Omit<React.ComponentProps<'ul'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuSubItem({ ...props }: Omit<React.ComponentProps<'li'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuSubButton({ asChild, size, isActive, ...props }: Omit<React.ComponentProps<'a'>, 'className'> & {
    asChild?: boolean;
    size?: 'sm' | 'md';
    isActive?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, useSidebar, };

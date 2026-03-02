import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
declare function NavigationMenu({ children, viewport, ...props }: Omit<React.ComponentProps<typeof NavigationMenuPrimitive.Root>, 'className'> & {
    viewport?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function NavigationMenuList({ ...props }: Omit<React.ComponentProps<typeof NavigationMenuPrimitive.List>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function NavigationMenuItem({ ...props }: Omit<React.ComponentProps<typeof NavigationMenuPrimitive.Item>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare const navigationMenuTriggerStyle: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
declare function NavigationMenuTrigger({ children, ...props }: Omit<React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function NavigationMenuContent({ ...props }: Omit<React.ComponentProps<typeof NavigationMenuPrimitive.Content>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function NavigationMenuViewport({ ...props }: Omit<React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function NavigationMenuLink({ ...props }: Omit<React.ComponentProps<typeof NavigationMenuPrimitive.Link>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function NavigationMenuIndicator({ ...props }: Omit<React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>, 'className'>): import("react/jsx-runtime").JSX.Element;
export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuIndicator, NavigationMenuViewport, navigationMenuTriggerStyle, };

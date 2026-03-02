import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
declare function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>): import("react/jsx-runtime").JSX.Element;
declare function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>): import("react/jsx-runtime").JSX.Element;
declare function SelectTrigger({ size, error, children, ...props }: Omit<React.ComponentProps<typeof SelectPrimitive.Trigger>, 'className'> & {
    size?: 'sm' | 'default';
    error?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function SelectContent({ children, position, ...props }: Omit<React.ComponentProps<typeof SelectPrimitive.Content>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SelectLabel({ ...props }: Omit<React.ComponentProps<typeof SelectPrimitive.Label>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SelectItem({ children, ...props }: Omit<React.ComponentProps<typeof SelectPrimitive.Item>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SelectSeparator({ ...props }: Omit<React.ComponentProps<typeof SelectPrimitive.Separator>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SelectScrollUpButton({ ...props }: Omit<React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function SelectScrollDownButton({ ...props }: Omit<React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>, 'className'>): import("react/jsx-runtime").JSX.Element;
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, };

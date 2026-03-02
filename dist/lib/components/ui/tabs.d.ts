import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
declare function Tabs({ ...props }: Omit<React.ComponentProps<typeof TabsPrimitive.Root>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function TabsList({ ...props }: Omit<React.ComponentProps<typeof TabsPrimitive.List>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function TabsTrigger({ ...props }: Omit<React.ComponentProps<typeof TabsPrimitive.Trigger>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function TabsContent({ ...props }: Omit<React.ComponentProps<typeof TabsPrimitive.Content>, 'className'>): import("react/jsx-runtime").JSX.Element;
export { Tabs, TabsList, TabsTrigger, TabsContent };

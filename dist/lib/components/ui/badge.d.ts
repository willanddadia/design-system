import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "success" | "secondary" | "outline" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function Badge({ variant, asChild, ...props }: Omit<React.ComponentProps<'span'>, 'className'> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };

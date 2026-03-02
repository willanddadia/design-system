import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const cardVariants: (props?: ({
    variant?: "default" | "bordered" | "elevated" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function Card({ variant, internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & VariantProps<typeof cardVariants> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CardHeader({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CardTitle({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CardDescription({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CardAction({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CardContent({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CardFooter({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };

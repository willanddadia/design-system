import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "link" | "secondary" | "outline" | "ghost" | null | undefined;
    size?: "default" | "none" | "sm" | "md" | "lg" | "icon" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    href?: string;
    target?: string;
}
declare function Button({ className, variant, size, asChild, leftIcon, rightIcon, href, target, children, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export { Button, buttonVariants };

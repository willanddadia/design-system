import { VariantProps } from 'class-variance-authority';
import { SpacingProps } from '../../utils/spacing';
import * as React from 'react';
declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "link" | "secondary" | "outline" | "ghost" | null | undefined;
    size?: "default" | "none" | "sm" | "md" | "lg" | "icon" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ButtonProps extends Omit<React.ComponentProps<'button'>, 'className'>, VariantProps<typeof buttonVariants>, SpacingProps {
    asChild?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    href?: string;
    target?: string;
    internalClassName?: string;
}
declare function Button({ variant, size, asChild, leftIcon, rightIcon, href, target, children, internalClassName, m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export { Button, buttonVariants };

import { VariantProps } from 'class-variance-authority';
import { SpacingProps } from '../../utils/spacing';
import * as React from 'react';
declare const cardVariants: (props?: ({
    variant?: "default" | "bordered" | "elevated" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function Card({ variant, internalClassName, m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & VariantProps<typeof cardVariants> & {
    internalClassName?: string;
} & SpacingProps): import("react/jsx-runtime").JSX.Element;
declare function CardHeader({ internalClassName, m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
} & SpacingProps): import("react/jsx-runtime").JSX.Element;
declare function CardTitle({ internalClassName, m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
} & SpacingProps): import("react/jsx-runtime").JSX.Element;
declare function CardDescription({ internalClassName, m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
} & SpacingProps): import("react/jsx-runtime").JSX.Element;
declare function CardAction({ internalClassName, m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
} & SpacingProps): import("react/jsx-runtime").JSX.Element;
declare function CardContent({ internalClassName, m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
} & SpacingProps): import("react/jsx-runtime").JSX.Element;
declare function CardFooter({ internalClassName, m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
} & SpacingProps): import("react/jsx-runtime").JSX.Element;
export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };

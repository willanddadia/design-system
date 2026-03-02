import { VariantProps } from 'class-variance-authority';
import { SpacingProps } from '../../utils/spacing';
import * as React from 'react';
declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "success" | "secondary" | "outline" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface BadgeProps extends Omit<React.ComponentProps<'span'>, 'className'>, VariantProps<typeof badgeVariants>, SpacingProps {
    asChild?: boolean;
    internalClassName?: string;
}
declare function Badge({ variant, asChild, internalClassName, m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };

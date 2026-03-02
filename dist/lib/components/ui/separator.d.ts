import { SpacingProps } from '../../utils/spacing';
import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
export interface SeparatorProps extends Omit<React.ComponentProps<typeof SeparatorPrimitive.Root>, 'className'>, SpacingProps {
    internalClassName?: string;
}
declare function Separator({ orientation, decorative, internalClassName, m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py, ...props }: SeparatorProps): import("react/jsx-runtime").JSX.Element;
export { Separator };

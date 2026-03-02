import { SpacingProps } from '../../utils/spacing';
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
export interface LabelProps extends Omit<React.ComponentProps<typeof LabelPrimitive.Root>, 'className'>, SpacingProps {
    internalClassName?: string;
}
declare function Label({ internalClassName, m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py, ...props }: LabelProps): import("react/jsx-runtime").JSX.Element;
export { Label };

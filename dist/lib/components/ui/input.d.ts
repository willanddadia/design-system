import { SpacingProps } from '../../utils/spacing';
import * as React from 'react';
export interface InputProps extends Omit<React.ComponentProps<'input'>, 'className'>, SpacingProps {
    error?: boolean;
    fieldSize?: 'default' | 'sm' | 'md' | 'lg';
    internalClassName?: string;
}
declare function Input({ type, error, fieldSize, internalClassName, m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py, ...props }: InputProps): import("react/jsx-runtime").JSX.Element;
export { Input };

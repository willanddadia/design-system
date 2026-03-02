import { HTMLAttributes } from 'react';
import { SpacingProps, OverflowProps } from '../../utils/spacing';
export interface FlexProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, SpacingProps, OverflowProps {
    direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    wrap?: boolean;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    mdDirection?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
    mdAlign?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    mdJustify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    asChild?: boolean;
    internalClassName?: string;
}
export declare const Flex: import('react').ForwardRefExoticComponent<FlexProps & import('react').RefAttributes<HTMLDivElement>>;

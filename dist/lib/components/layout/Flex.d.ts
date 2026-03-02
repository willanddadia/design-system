import { HTMLAttributes } from 'react';
export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    wrap?: boolean;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    mdDirection?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
    mdAlign?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    mdJustify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    asChild?: boolean;
}
export declare const Flex: import('react').ForwardRefExoticComponent<FlexProps & import('react').RefAttributes<HTMLDivElement>>;

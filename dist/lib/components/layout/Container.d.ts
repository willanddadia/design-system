import { HTMLAttributes } from 'react';
import { SpacingProps, OverflowProps } from '../../utils/spacing';
export interface ContainerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, SpacingProps, OverflowProps {
    margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    bordered?: boolean;
    asChild?: boolean;
    internalClassName?: string;
}
export declare const Container: import('react').ForwardRefExoticComponent<ContainerProps & import('react').RefAttributes<HTMLDivElement>>;

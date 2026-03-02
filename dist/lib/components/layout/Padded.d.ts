import { HTMLAttributes } from 'react';
import { SpacingProps, OverflowProps } from '../../utils/spacing';
export interface PaddedProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, SpacingProps, OverflowProps {
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    bordered?: boolean;
    asChild?: boolean;
    internalClassName?: string;
}
export declare const Padded: import('react').ForwardRefExoticComponent<PaddedProps & import('react').RefAttributes<HTMLDivElement>>;

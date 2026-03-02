import { HTMLAttributes } from 'react';
export interface PaddedProps extends HTMLAttributes<HTMLDivElement> {
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    bordered?: boolean;
    asChild?: boolean;
}
export declare const Padded: import('react').ForwardRefExoticComponent<PaddedProps & import('react').RefAttributes<HTMLDivElement>>;

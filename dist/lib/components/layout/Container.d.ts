import { HTMLAttributes } from 'react';
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    bordered?: boolean;
    asChild?: boolean;
}
export declare const Container: import('react').ForwardRefExoticComponent<ContainerProps & import('react').RefAttributes<HTMLDivElement>>;

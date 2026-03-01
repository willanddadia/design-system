import { HTMLAttributes } from 'react';
export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'success' | 'warning' | 'destructive';
    title?: string;
}
export declare const Alert: import('react').ForwardRefExoticComponent<AlertProps & import('react').RefAttributes<HTMLDivElement>>;

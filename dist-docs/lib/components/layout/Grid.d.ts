import { HTMLAttributes } from 'react';
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12 | 'auto';
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    rows?: 'auto' | number;
}
export declare const Grid: import('react').ForwardRefExoticComponent<GridProps & import('react').RefAttributes<HTMLDivElement>>;

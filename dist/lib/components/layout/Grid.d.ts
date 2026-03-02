import { HTMLAttributes } from 'react';
export interface GridProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
    mdCols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
    lgCols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    rows?: 'auto' | number;
    asChild?: boolean;
}
export declare const Grid: import('react').ForwardRefExoticComponent<GridProps & import('react').RefAttributes<HTMLDivElement>>;

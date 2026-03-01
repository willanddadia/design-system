import { HTMLAttributes, forwardRef } from 'react';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12 | 'auto';
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  rows?: 'auto' | number;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ 
    cols = 'auto', 
    gap = 'md',
    rows = 'auto',
    className = '', 
    children, 
    ...props 
  }, ref) => {
    const columns = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      12: 'grid-cols-12',
      auto: 'grid-cols-[repeat(auto-fit,minmax(250px,1fr))]',
    };
    
    const gaps = {
      none: '',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    };
    
    const rowsClass = rows === 'auto' ? '' : `grid-rows-${rows}`;
    
    return (
      <div
        ref={ref}
        className={`grid ${columns[cols]} ${gaps[gap]} ${rowsClass} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

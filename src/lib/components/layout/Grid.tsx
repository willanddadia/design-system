import { HTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
  mdCols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
  lgCols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  rows?: 'auto' | number;
  asChild?: boolean;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ cols = 'auto', mdCols, lgCols, gap = 'md', rows = 'auto', asChild = false, className = '', children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    const columns = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
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

    const mdColsClass = mdCols ? `md:${columns[mdCols]}` : '';
    const lgColsClass = lgCols ? `lg:${columns[lgCols]}` : '';

    return (
      <Comp
        ref={ref}
        className={`grid ${columns[cols]} ${gaps[gap]} ${rowsClass} ${mdColsClass} ${lgColsClass} ${className}`}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Grid.displayName = 'Grid';

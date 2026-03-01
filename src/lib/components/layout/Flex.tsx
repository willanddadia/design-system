import { HTMLAttributes, forwardRef } from 'react';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  wrap?: boolean;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ 
    direction = 'row', 
    justify = 'start', 
    align = 'start', 
    wrap = false,
    gap = 'none',
    className = '', 
    children, 
    ...props 
  }, ref) => {
    const directions = {
      row: 'flex-row',
      col: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'col-reverse': 'flex-col-reverse',
    };
    
    const justifies = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    };
    
    const aligns = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    };
    
    const gaps = {
      none: '',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    };
    
    return (
      <div
        ref={ref}
        className={`flex ${directions[direction]} ${justifies[justify]} ${aligns[align]} ${wrap ? 'flex-wrap' : ''} ${gaps[gap]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = 'Flex';

import { HTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@lib/utils/utils';

export interface FlexProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  wrap?: boolean;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  mdDirection?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  mdAlign?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  mdJustify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  asChild?: boolean;
  internalClassName?: string;
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      direction = 'row',
      justify = 'start',
      align = 'start',
      wrap = false,
      gap = 'none',
      mdDirection,
      mdAlign,
      mdJustify,
      asChild = false,
      internalClassName,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'div';
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

    const mdDirectionClass = mdDirection ? `md:${directions[mdDirection]}` : '';
    const mdAlignClass = mdAlign ? `md:${aligns[mdAlign]}` : '';
    const mdJustifyClass = mdJustify ? `md:${justifies[mdJustify]}` : '';

    return (
      <Comp
        ref={ref}
        className={cn(
          'flex',
          directions[direction],
          justifies[justify],
          aligns[align],
          wrap && 'flex-wrap',
          gaps[gap],
          mdDirectionClass,
          mdAlignClass,
          mdJustifyClass,
          internalClassName
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Flex.displayName = 'Flex';

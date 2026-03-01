import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@lib/utils/utils';

const typographyVariants = cva('transition-colors', {
    variants: {
        variant: {
            default: 'text-foreground',
            muted: 'text-muted-foreground',
            primary: 'text-primary font-medium',
            success: 'text-green-600',
            destructive: 'text-destructive',
        },
        size: {
            xs: 'text-xs',
            sm: 'text-sm',
            base: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'text-2xl',
            '3xl': 'text-3xl',
            '4xl': 'text-4xl',
            '5xl': 'text-5xl',
            '6xl': 'text-6xl',
            '7xl': 'text-7xl',
            '8xl': 'text-8xl',
            '9xl': 'text-9xl',
        },
        weight: {
            thin: 'font-thin',
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold',
            extrabold: 'font-extrabold',
            black: 'font-black',
        },
        align: {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right',
            justify: 'text-justify',
        },
        underline: {
            true: 'underline underline-offset-4',
        },
        italic: {
            true: 'italic',
        },
        strike: {
            true: 'line-through',
        },
        capitalize: {
            true: 'capitalize',
        },
        uppercase: {
            true: 'uppercase',
        },
        lowercase: {
            true: 'lowercase',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'base',
        weight: 'normal',
    },
});

export interface TypographyProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
    asChild?: boolean;
    as?: React.ElementType;
}

const Text = React.forwardRef<HTMLElement, TypographyProps>(
    (
        {
            className,
            variant,
            size,
            weight,
            align,
            underline,
            italic,
            strike,
            capitalize,
            uppercase,
            lowercase,
            asChild = false,
            as: Component = 'p',
            ...props
        },
        ref,
    ) => {
        const Comp = asChild ? Slot : Component;
        return (
            <Comp
                className={cn(
                    typographyVariants({
                        variant,
                        size,
                        weight,
                        align,
                        underline,
                        italic,
                        strike,
                        capitalize,
                        uppercase,
                        lowercase,
                    }),
                    className,
                )}
                ref={ref}
                {...props}
            />
        );
    },
);
Text.displayName = 'Text';

const Heading = React.forwardRef<HTMLHeadingElement, TypographyProps>(
    ({ as = 'h2', size, weight = 'semibold', ...props }, ref) => {
        // Map default sizes if not provided
        const headingSizes: Record<string, TypographyProps['size']> = {
            h1: '3xl',
            h2: '2xl',
            h3: 'xl',
            h4: 'lg',
            h5: 'base',
            h6: 'sm',
        };

        const defaultSize = headingSizes[as as string] || 'xl';

        return <Text as={as} size={size || defaultSize} weight={weight} ref={ref} {...props} />;
    },
);
Heading.displayName = 'Heading';

const Paragraph = React.forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ as = 'p', className, ...props }, ref) => {
        return (
            <Text
                as={as}
                className={cn('leading-relaxed [&:not(:first-child)]:mt-6', className)}
                ref={ref}
                {...props}
            />
        );
    },
);
Paragraph.displayName = 'Paragraph';

const Span = React.forwardRef<HTMLSpanElement, TypographyProps>(
    ({ as = 'span', ...props }, ref) => {
        return <Text as={as} ref={ref} {...props} />;
    },
);
Span.displayName = 'Span';

export { Text, Heading, Paragraph, Span, typographyVariants };

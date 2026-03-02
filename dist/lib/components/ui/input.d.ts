import * as React from 'react';
declare function Input({ type, error, fieldSize, ...props }: Omit<React.ComponentProps<'input'>, 'className'> & {
    error?: boolean;
    fieldSize?: 'default' | 'sm' | 'md' | 'lg';
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
export { Input };

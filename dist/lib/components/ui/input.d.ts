import * as React from 'react';
declare function Input({ className, type, error, fieldSize, ...props }: React.ComponentProps<'input'> & {
    error?: boolean;
    fieldSize?: 'default' | 'sm' | 'md' | 'lg';
}): import("react/jsx-runtime").JSX.Element;
export { Input };

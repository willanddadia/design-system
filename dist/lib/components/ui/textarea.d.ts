import * as React from 'react';
declare function Textarea({ error, fieldSize, ...props }: Omit<React.ComponentProps<'textarea'>, 'className'> & {
    error?: boolean;
    fieldSize?: 'default' | 'sm' | 'md' | 'lg';
}): import("react/jsx-runtime").JSX.Element;
export { Textarea };

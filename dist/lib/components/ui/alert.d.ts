import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | "success" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function Alert({ variant, onClose, title, children, internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & VariantProps<typeof alertVariants> & {
    onClose?: () => void;
    title?: string;
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function AlertTitle({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function AlertDescription({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
export { Alert, AlertTitle, AlertDescription };

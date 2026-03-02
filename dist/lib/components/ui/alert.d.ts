import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | "success" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function Alert({ className, variant, onClose, title, children, ...props }: React.ComponentProps<'div'> & VariantProps<typeof alertVariants> & {
    onClose?: () => void;
    title?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function AlertTitle({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function AlertDescription({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
export { Alert, AlertTitle, AlertDescription };

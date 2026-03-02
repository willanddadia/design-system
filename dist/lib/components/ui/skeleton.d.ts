declare function Skeleton({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
export { Skeleton };

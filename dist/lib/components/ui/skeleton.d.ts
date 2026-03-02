import { SpacingProps } from '../../utils/spacing';
export interface SkeletonProps extends Omit<React.ComponentProps<'div'>, 'className'>, SpacingProps {
    internalClassName?: string;
}
declare function Skeleton({ internalClassName, m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py, ...props }: SkeletonProps): import("react/jsx-runtime").JSX.Element;
export { Skeleton };

import { default as useEmblaCarousel, UseEmblaCarouselType } from 'embla-carousel-react';
import { Button } from './button';
import * as React from 'react';
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: 'horizontal' | 'vertical';
    setApi?: (api: CarouselApi) => void;
};
declare function Carousel({ orientation, opts, setApi, plugins, className, children, ...props }: React.ComponentProps<'div'> & CarouselProps): import("react/jsx-runtime").JSX.Element;
declare function CarouselContent({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CarouselItem({ internalClassName, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CarouselPrevious({ internalClassName, variant, size, ...props }: Omit<React.ComponentProps<typeof Button>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CarouselNext({ internalClassName, variant, size, ...props }: Omit<React.ComponentProps<typeof Button>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, };

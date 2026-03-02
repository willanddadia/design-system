import * as React from 'react';
declare function Breadcrumb({ ...props }: React.ComponentProps<'nav'>): import("react/jsx-runtime").JSX.Element;
declare function BreadcrumbList({ ...props }: Omit<React.ComponentProps<'ol'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function BreadcrumbItem({ ...props }: Omit<React.ComponentProps<'li'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function BreadcrumbLink({ asChild, ...props }: Omit<React.ComponentProps<'a'>, 'className'> & {
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function BreadcrumbPage({ ...props }: Omit<React.ComponentProps<'span'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function BreadcrumbSeparator({ children, ...props }: Omit<React.ComponentProps<'li'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function BreadcrumbEllipsis({ ...props }: Omit<React.ComponentProps<'span'>, 'className'>): import("react/jsx-runtime").JSX.Element;
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis, };

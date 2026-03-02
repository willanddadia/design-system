import { Input } from './input';
import { Button } from './button';
import * as React from 'react';
declare function Table({ internalClassName, ...props }: Omit<React.ComponentProps<'table'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function TableHeader({ internalClassName, ...props }: Omit<React.ComponentProps<'thead'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function TableBody({ internalClassName, ...props }: Omit<React.ComponentProps<'tbody'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function TableFooter({ internalClassName, ...props }: Omit<React.ComponentProps<'tfoot'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function TableRow({ internalClassName, ...props }: Omit<React.ComponentProps<'tr'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function TableHead({ internalClassName, ...props }: Omit<React.ComponentProps<'th'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function TableCell({ internalClassName, ...props }: Omit<React.ComponentProps<'td'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function TableCaption({ internalClassName, ...props }: Omit<React.ComponentProps<'caption'>, 'className'> & {
    internalClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function TableSearch({ ...props }: Omit<React.ComponentProps<typeof Input>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function TableFilter({ children, ...props }: Omit<React.ComponentProps<typeof Button>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function TablePagination({ currentPage, totalPages, onPageChange, }: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}): import("react/jsx-runtime").JSX.Element;
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption, TableSearch, TableFilter, TablePagination, };

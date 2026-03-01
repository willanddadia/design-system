import { HTMLAttributes, ReactNode } from 'react';
export interface Column<T> {
    key: string;
    header: string;
    render?: (item: T) => ReactNode;
}
export interface TableProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    data: T[];
    columns: Column<T>[];
    bordered?: boolean;
    striped?: boolean;
}
export declare function Table<T extends Record<string, any>>({ data, columns, bordered, striped, className, ...props }: TableProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function BorderedTable<T extends Record<string, any>>(props: Omit<TableProps<T>, 'bordered'>): import("react/jsx-runtime").JSX.Element;
export declare function BorderlessTable<T extends Record<string, any>>(props: Omit<TableProps<T>, 'bordered'>): import("react/jsx-runtime").JSX.Element;

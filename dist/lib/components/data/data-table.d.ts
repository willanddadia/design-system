import { HTMLAttributes, ReactNode } from 'react';
export interface Column<T> {
    key: string;
    header: string;
    render?: (item: T) => ReactNode;
}
export interface DataTableProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    data: T[];
    columns: Column<T>[];
    bordered?: boolean;
    striped?: boolean;
}
export declare function DataTable<T extends Record<string, any>>({ data, columns, bordered, striped, ...props }: Omit<DataTableProps<T>, 'className'>): import("react/jsx-runtime").JSX.Element;

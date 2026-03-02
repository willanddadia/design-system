import { HTMLAttributes, ReactNode } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@lib/components/ui/table';
import { cn } from '@lib/utils/utils';

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

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  bordered = true,
  striped = false,
  ...props
}: Omit<DataTableProps<T>, 'className'>) {
  return (
    <div
      className={cn('w-full overflow-auto rounded-lg', bordered && 'border')}
      {...props}
    >
      <Table>
        <TableHeader internalClassName="bg-muted/50">
          <TableRow>
            {columns.map((column, index) => (
              <TableHead key={column.key} internalClassName={cn(bordered && index !== 0 && 'border-l')}>
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, rowIndex) => (
            <TableRow key={rowIndex} internalClassName={cn(striped && rowIndex % 2 === 1 && 'bg-muted/30')}>
              {columns.map((column, colIndex) => (
                <TableCell
                  key={column.key}
                  internalClassName={cn(bordered && colIndex !== 0 && 'border-l')}
                >
                  {column.render ? column.render(item) : item[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {data.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                internalClassName="h-24 text-center text-muted-foreground"
              >
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

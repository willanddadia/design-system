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

export function Table<T extends Record<string, any>>({
  data,
  columns,
  bordered = true,
  striped = false,
  className = '',
  ...props
}: TableProps<T>) {
  return (
    <div
      className={`overflow-x-auto ${bordered ? 'border-2 border-border rounded-lg' : ''} ${className}`}
      {...props}
    >
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            {columns.map((column, index) => (
              <th
                key={column.key}
                className={`
                  px-6 py-4 text-left
                  ${bordered && index !== 0 ? 'border-l-2 border-border' : ''}
                `}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr
              key={rowIndex}
              className={`
                ${bordered ? 'border-t-2 border-border' : ''}
                ${striped && rowIndex % 2 === 1 ? 'bg-muted/30' : ''}
                hover:bg-accent/50 transition-colors
              `}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={column.key}
                  className={`
                    px-6 py-4
                    ${bordered && colIndex !== 0 ? 'border-l-2 border-border' : ''}
                  `}
                >
                  {column.render ? column.render(item) : item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No data available
        </div>
      )}
    </div>
  );
}

export function BorderedTable<T extends Record<string, any>>(
  props: Omit<TableProps<T>, 'bordered'>
) {
  return <Table bordered={true} {...props} />;
}

export function BorderlessTable<T extends Record<string, any>>(
  props: Omit<TableProps<T>, 'bordered'>
) {
  return <Table bordered={false} {...props} />;
}
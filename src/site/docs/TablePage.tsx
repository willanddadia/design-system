import { DataTable } from '@lib/components/data/data-table';
import { Badge } from '@lib/components/ui/badge';
import { TableSearch, TableFilter, TablePagination } from '@lib/components/ui/table';
import { Flex, Padded } from '@lib/components/layout';
import { Section, Example, PropTable, PageHero } from './DocLayout';

const tableProps = [
  { name: 'data', type: 'T[]', default: '—', description: 'Array of data objects to display.' },
  {
    name: 'columns',
    type: 'ColumnDef[]',
    default: '—',
    description: 'Configuration for columns: { key, header, render? }.',
  },
  {
    name: 'bordered',
    type: 'boolean',
    default: 'true',
    description: 'Whether to show internal borders and a rounded wrapper.',
  },
  {
    name: 'striped',
    type: 'boolean',
    default: 'false',
    description: 'Whether to alternate row background colors.',
  },
];

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator', status: 'Active' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active' },
];

const columns = [
  { key: 'id', header: 'ID' },
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  {
    key: 'role',
    header: 'Role',
    render: (item: any) => (
      <Badge variant={item.role === 'Admin' ? 'destructive' : 'secondary'}>{item.role}</Badge>
    ),
  },
  {
    key: 'status',
    header: 'Status',
    render: (item: any) => (
      <Badge variant={item.status === 'Active' ? 'success' : 'outline'}>{item.status}</Badge>
    ),
  },
];

export function TablePage() {
  return (
    <div>
      <PageHero
        badge="Data"
        title="Table"
        description="Tables are used to organize and display data in a grid format. Use custom renderers for rich cell content like badges or buttons."
      />

      <Section
        title="Bordered Table"
        description="The default style with clear separation between cells."
      >
        <Example title="Default Bordered" code={`<DataTable data={data} columns={columns} />`}>
          <DataTable data={data} columns={columns} />
        </Example>
      </Section>

      <Section
        title="Borderless Table"
        description="A cleaner look without internal borders, often used with stripes."
      >
        <Example
          title="Striped Borderless"
          code={`<DataTable data={data} columns={columns} bordered={false} striped />`}
        >
          <DataTable data={data} columns={columns} bordered={false} striped />
        </Example>
      </Section>

      <Section
        title="Table Controls"
        description="Enhance your tables with built-in search, filter, and pagination components."
      >
        <Example
          title="Search, Filter, and Pagination"
          code={`<div className="space-y-4">
  <div className="flex items-center justify-between">
    <div className="max-w-xs w-full">
      <TableSearch />
    </div>
    <TableFilter />
  </div>
  <DataTable data={data} columns={columns} />
  <TablePagination currentPage={1} totalPages={5} onPageChange={(p) => console.log(p)} />
</div>`}
        >
          <Flex direction="col" gap="md">
            <Flex align="center" justify="between">
              <Flex direction="col" internalClassName="max-w-xs w-full">
                <TableSearch />
              </Flex>
              <TableFilter />
            </Flex>
            <DataTable data={data} columns={columns} />
            <TablePagination currentPage={1} totalPages={5} onPageChange={(p: number) => console.log(p)} />
          </Flex>
        </Example>
      </Section>

      <Section title="Props">
        <PropTable props={tableProps} />
      </Section>

      <Section title="Column Definition">
        <Padded padding="lg" bordered internalClassName="overflow-hidden bg-muted/10 font-mono text-sm">
          <pre>{`interface Column<T> {
  key: string;       // Key in the data object
  header: string;    // Display title of the column
  render?: (item: T) => ReactNode; // Optional custom renderer
}`}</pre>
        </Padded>
      </Section>
    </div>
  );
}

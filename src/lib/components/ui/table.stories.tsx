import type { Story } from '@ladle/react';
import { DataTable } from '../data/data-table';
import { Badge } from './badge';
import { TableSearch, TableFilter, TablePagination } from './table';

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

export const Bordered: Story = () => <DataTable data={data} columns={columns} />;

export const Striped: Story = () => (
  <DataTable data={data} columns={columns} bordered={false} striped />
);

export const WithControls: Story = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <TableSearch className="max-w-xs" />
      <TableFilter />
    </div>
    <DataTable data={data} columns={columns} />
    <TablePagination currentPage={1} totalPages={5} onPageChange={(p: number) => console.log(p)} />
  </div>
);

export default {
  title: 'UI/Table',
};

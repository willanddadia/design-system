import { BorderedTable, BorderlessTable } from '../components/Table';
import { Badge } from '../components/Badge';
import { Section, Example, PropTable, PageHero } from './DocLayout';

const tableProps = [
    { name: 'data', type: 'T[]', default: '—', description: 'Array of data objects to display.' },
    { name: 'columns', type: 'ColumnDef[]', default: '—', description: 'Configuration for columns: { key, header, render? }.' },
    { name: 'bordered', type: 'boolean', default: 'true', description: 'Whether to show internal borders and a rounded wrapper.' },
    { name: 'striped', type: 'boolean', default: 'false', description: 'Whether to alternate row background colors.' },
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
            <Badge variant={item.role === 'Admin' ? 'destructive' : 'secondary'}>
                {item.role}
            </Badge>
        )
    },
    {
        key: 'status',
        header: 'Status',
        render: (item: any) => (
            <Badge variant={item.status === 'Active' ? 'success' : 'outline'}>
                {item.status}
            </Badge>
        )
    }
];

export function TablePage() {
    return (
        <div>
            <PageHero
                badge="Data"
                title="Table"
                description="Tables are used to organize and display data in a grid format. Use custom renderers for rich cell content like badges or buttons."
            />

            <Section title="Bordered Table" description="The default style with clear separation between cells.">
                <Example
                    title="Default Bordered"
                    code={`<BorderedTable data={data} columns={columns} />`}
                >
                    <BorderedTable data={data} columns={columns} />
                </Example>
            </Section>

            <Section title="Borderless Table" description="A cleaner look without internal borders, often used with stripes.">
                <Example
                    title="Striped Borderless"
                    code={`<BorderlessTable data={data} columns={columns} striped />`}
                >
                    <BorderlessTable data={data} columns={columns} striped />
                </Example>
            </Section>

            <Section title="Props">
                <PropTable props={tableProps} />
            </Section>

            <Section title="Column Definition">
                <div className="border-2 border-border rounded-xl overflow-hidden p-6 bg-muted/10 font-mono text-sm">
                    <pre>{`interface Column<T> {
  key: string;       // Key in the data object
  header: string;    // Display title of the column
  render?: (item: T) => ReactNode; // Optional custom renderer
}`}</pre>
                </div>
            </Section>
        </div>
    );
}

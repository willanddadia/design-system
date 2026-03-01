import type { Story } from '@ladle/react';
import * as ComponentDeps from './alert-dialog';

// Extract the main component or first exported valid React component
const ComponentName =
  Object.keys(ComponentDeps).find((key) => key !== 'default' && /^[A-Z]/.test(key)) || 'default';
const Component =
  ComponentName === 'default' ? ComponentDeps.default : ComponentDeps[ComponentName];

export const Default: Story = (props) => {
  if (!Component) return <div>Could not auto-resolve component export.</div>;

  // Try to render it. For components that require children or specific contexts,
  // this might render empty or with an error, but it's a starting point for snapshots.
  return (
    <div className="p-8 border border-dashed border-gray-300 rounded-lg w-full min-h-[100px] flex items-center justify-center">
      <Component {...props}>
        <span>{ComponentName} Example</span>
      </Component>
    </div>
  );
};

export default { title: 'UI/Alert Dialog' };

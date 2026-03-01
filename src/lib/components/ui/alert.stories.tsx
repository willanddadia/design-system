import type { Story } from '@ladle/react';
import { Alert } from './alert';

export const Variants: Story = () => (
  <div className="space-y-3">
    <Alert variant="default" title="Info">
      This is an informational message for the user.
    </Alert>
    <Alert variant="success" title="Success">
      Your changes have been saved successfully!
    </Alert>
    <Alert variant="warning" title="Warning">
      Please review your settings before continuing.
    </Alert>
    <Alert variant="destructive" title="Error">
      An error occurred while processing your request.
    </Alert>
  </div>
);

export const WithoutTitle: Story = () => (
  <div className="space-y-3">
    <Alert variant="success">Your changes have been saved.</Alert>
    <Alert variant="destructive">Invalid credentials provided.</Alert>
  </div>
);

export default {
  title: 'UI/Alert',
};

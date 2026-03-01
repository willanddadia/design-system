import { useState } from 'react';
import type { Story } from '@ladle/react';
import { Alert, AlertTitle, AlertDescription } from './alert';
import { Button } from './button';

export const Variants: Story = () => (
  <div className="space-y-3">
    <Alert variant="default">
      <AlertTitle>Info</AlertTitle>
      <AlertDescription>This is an informational message for the user.</AlertDescription>
    </Alert>
    <Alert variant="success">
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Your changes have been saved successfully!</AlertDescription>
    </Alert>
    <Alert variant="warning">
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>Please review your settings before continuing.</AlertDescription>
    </Alert>
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>An error occurred while processing your request.</AlertDescription>
    </Alert>
  </div>
);

export const WithoutTitle: Story = () => (
  <div className="space-y-3">
    <Alert variant="success">Your changes have been saved.</Alert>
    <Alert variant="destructive">Invalid credentials provided.</Alert>
  </div>
);

export const Closable: Story = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="space-y-4 max-w-md">
      {show ? (
        <Alert onClose={() => setShow(false)} variant="success">
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your profile has been updated successfully. This alert is closable.
          </AlertDescription>
        </Alert>
      ) : (
        <Button onClick={() => setShow(true)}>Reset Alert</Button>
      )}
    </div>
  );
};

export default {
  title: 'UI/Alert',
};

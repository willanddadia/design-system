import type { Story } from '@ladle/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card';

export const Variants: Story = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <Card variant="default">
      <CardHeader>
        <CardTitle>Default</CardTitle>
        <CardDescription>No border, clean surface</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Body text goes here.</p>
      </CardContent>
    </Card>
    <Card variant="bordered">
      <CardHeader>
        <CardTitle>Bordered</CardTitle>
        <CardDescription>Solid 2px border for definition</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Body text goes here.</p>
      </CardContent>
    </Card>
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Elevated</CardTitle>
        <CardDescription>Drop shadow for depth</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Body text goes here.</p>
      </CardContent>
    </Card>
  </div>
);

export const Composition: Story = () => (
  <Card variant="bordered" className="max-w-md">
    <CardHeader>
      <CardTitle>Account Settings</CardTitle>
      <CardDescription>Manage your profile and preferences</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <p>Content area for any child elements.</p>
        <div className="p-4 bg-muted rounded-lg">
          Nested content or form elements could go here.
        </div>
      </div>
    </CardContent>
  </Card>
);

export default {
  title: 'UI/Card',
};

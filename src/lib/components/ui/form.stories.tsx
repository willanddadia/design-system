import { useForm } from 'react-hook-form';
import type { Story } from '@ladle/react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form';
import { Input } from './input';
import { Button } from './button';
import { Alert } from './alert';
import { useState } from 'react';

export const RegistrationForm: Story = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
    },
  });

  function onSubmit(values: any) {
    console.log(values);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Alert variant="success" title="Success">
        Form submitted! Check console for values.
      </Alert>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 border rounded-xl shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            rules={{ required: 'Username is required', minLength: { value: 3, message: 'Too short' } }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe" {...field} />
                </FormControl>
                <FormDescription> This is your public display name. </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default {
  title: 'UI/Form',
};

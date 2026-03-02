'use client';

import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';

import { cn } from '@lib/utils/utils';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';

function Command({ internalClassName, ...props }: Omit<React.ComponentProps<typeof CommandPrimitive>, 'className'> & { internalClassName?: string }) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        'bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md',
        internalClassName,
      )}
      {...props}
    />
  );
}

function CommandDialog({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  ...props
}: Omit<React.ComponentProps<typeof Dialog>, 'className'> & {
  title?: string;
  description?: string;
}) {
  return (
    <Dialog {...props}>
      <DialogHeader internalClassName="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent internalClassName="overflow-hidden p-0">
        <Command internalClassName="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

function CommandInput({
  internalClassName,
  ...props
}: Omit<React.ComponentProps<typeof CommandPrimitive.Input>, 'className'> & { internalClassName?: string }) {
  return (
    <div data-slot="command-input-wrapper" className="flex h-9 items-center gap-2 border-b px-3">
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          'placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
          internalClassName,
        )}
        {...props}
      />
    </div>
  );
}

function CommandList({ internalClassName, ...props }: Omit<React.ComponentProps<typeof CommandPrimitive.List>, 'className'> & { internalClassName?: string }) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn('max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto', internalClassName)}
      {...props}
    />
  );
}

function CommandEmpty({ ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  );
}

function CommandGroup({
  internalClassName,
  ...props
}: Omit<React.ComponentProps<typeof CommandPrimitive.Group>, 'className'> & { internalClassName?: string }) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        'text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
        internalClassName,
      )}
      {...props}
    />
  );
}

function CommandSeparator({
  internalClassName,
  ...props
}: Omit<React.ComponentProps<typeof CommandPrimitive.Separator>, 'className'> & { internalClassName?: string }) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn('bg-border -mx-1 h-px', internalClassName)}
      {...props}
    />
  );
}

function CommandItem({ internalClassName, ...props }: Omit<React.ComponentProps<typeof CommandPrimitive.Item>, 'className'> & { internalClassName?: string }) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        internalClassName,
      )}
      {...props}
    />
  );
}

function CommandShortcut({ internalClassName, ...props }: React.ComponentProps<'span'> & { internalClassName?: string }) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn('text-muted-foreground ml-auto text-xs tracking-widest', internalClassName)}
      {...props}
    />
  );
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};

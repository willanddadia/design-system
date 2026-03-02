'use client';

import * as React from 'react';

import { cn } from '@lib/utils/utils';

function Table({ internalClassName, ...props }: Omit<React.ComponentProps<'table'>, 'className'> & { internalClassName?: string }) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table
        data-slot="table"
        className={cn('w-full caption-bottom text-sm', internalClassName)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ internalClassName, ...props }: Omit<React.ComponentProps<'thead'>, 'className'> & { internalClassName?: string }) {
  return <thead data-slot="table-header" className={cn('[&_tr]:border-b', internalClassName)} {...props} />;
}

function TableBody({ internalClassName, ...props }: Omit<React.ComponentProps<'tbody'>, 'className'> & { internalClassName?: string }) {
  return (
    <tbody
      data-slot="table-body"
      className={cn('[&_tr:last-child]:border-0', internalClassName)}
      {...props}
    />
  );
}

function TableFooter({ internalClassName, ...props }: Omit<React.ComponentProps<'tfoot'>, 'className'> & { internalClassName?: string }) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', internalClassName)}
      {...props}
    />
  );
}

function TableRow({ internalClassName, ...props }: Omit<React.ComponentProps<'tr'>, 'className'> & { internalClassName?: string }) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
        internalClassName
      )}
      {...props}
    />
  );
}

function TableHead({ internalClassName, ...props }: Omit<React.ComponentProps<'th'>, 'className'> & { internalClassName?: string }) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        'text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        internalClassName
      )}
      {...props}
    />
  );
}

function TableCell({ internalClassName, ...props }: Omit<React.ComponentProps<'td'>, 'className'> & { internalClassName?: string }) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        internalClassName
      )}
      {...props}
    />
  );
}

function TableCaption({ internalClassName, ...props }: Omit<React.ComponentProps<'caption'>, 'className'> & { internalClassName?: string }) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('text-muted-foreground mt-4 text-sm', internalClassName)}
      {...props}
    />
  );
}

import { Search, Filter } from 'lucide-react';
import { Input } from './input';
import { Button } from './button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './pagination';

// ... (previous table components)

function TableSearch({ ...props }: Omit<React.ComponentProps<typeof Input>, 'className'>) {
  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        {...props}
      />
    </div>
  );
}

function TableFilter({
  children,
  ...props
}: Omit<React.ComponentProps<typeof Button>, 'className'>) {
  return (
    <Button variant="outline" size="sm" {...props}>
      <Filter className="h-4 w-4" />
      {children || 'Filter'}
    </Button>
  );
}

function TablePagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
          />
        </PaginationItem>
        {[...Array(totalPages)].map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={currentPage === i + 1}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(i + 1);
              }}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableSearch,
  TableFilter,
  TablePagination,
};

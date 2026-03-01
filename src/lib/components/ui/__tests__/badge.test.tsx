import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from '../badge';

describe('Badge', () => {
    it('renders correctly with children', () => {
        render(<Badge>New</Badge>);
        expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('renders with different variants', () => {
        const { rerender } = render(<Badge variant="destructive">Error</Badge>);
        expect(screen.getByText('Error')).toHaveClass('bg-destructive');

        rerender(<Badge variant="outline">Outline</Badge>);
        expect(screen.getByText('Outline')).toHaveClass('text-foreground');
    });
});

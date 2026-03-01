import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Alert, AlertTitle, AlertDescription } from '../alert';

describe('Alert', () => {
    it('renders correctly with title and description', () => {
        render(
            <Alert>
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>You can add components to your app using the cli.</AlertDescription>
            </Alert>
        );
        expect(screen.getByText('Heads up!')).toBeInTheDocument();
        expect(screen.getByText('You can add components to your app using the cli.')).toBeInTheDocument();
    });

    it('renders with different variants', () => {
        const { container } = render(
            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
            </Alert>
        );
        // Check if the alert container has the destructive classes
        // Alert components usually apply variants to the root div
        const alert = container.firstChild;
        expect(alert).toHaveClass('text-destructive');
    });
});

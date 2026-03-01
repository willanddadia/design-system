import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'vitest-axe';
import { Button } from '../button';
import { Badge } from '../badge';
import { Alert, AlertTitle, AlertDescription } from '../alert';

describe('Accessibility audits', () => {
    it('Button should not have accessibility violations', async () => {
        const { container } = render(<Button>Click me</Button>);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    it('Badge should not have accessibility violations', async () => {
        const { container } = render(<Badge>New</Badge>);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    it('Alert should not have accessibility violations', async () => {
        const { container } = render(
            <Alert>
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>You can add components to your app using the cli.</AlertDescription>
            </Alert>
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});

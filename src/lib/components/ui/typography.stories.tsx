import type { Story } from '@ladle/react';
import { Heading, Paragraph, Span, Text } from './typography';

export const Headings: Story = () => (
    <div className="space-y-4">
        <Heading as="h1">Heading 1 (3xl)</Heading>
        <Heading as="h2">Heading 2 (2xl)</Heading>
        <Heading as="h3">Heading 3 (xl)</Heading>
        <Heading as="h4">Heading 4 (lg)</Heading>
        <Heading as="h5">Heading 5 (base)</Heading>
        <Heading as="h6">Heading 6 (sm)</Heading>
    </div>
);

export const Customizable: Story = () => (
    <div className="space-y-6">
        <div className="space-y-2 border p-4 rounded-lg">
            <Heading size="5xl" weight="black" uppercase>
                Extreme Header
            </Heading>
            <Paragraph size="lg" weight="light" italic>
                A large, light, and italic paragraph to demonstrate customization.
            </Paragraph>
        </div>

        <Paragraph>
            This is a standard paragraph with some{' '}
            <Span weight="bold" underline variant="primary">
                bold and underlined span text
            </Span>{' '}
            inside of it.
        </Paragraph>

        <Text align="center" variant="muted" strike>
            Centered muted text with a strikethrough.
        </Text>

        <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-primary text-primary-foreground rounded-lg">
                <Heading size="sm" uppercase weight="bold">
                    Inverse Theme
                </Heading>
                <Text size="xs">Small text on dark background.</Text>
            </div>
            <div className="p-4 bg-green-50 text-green-900 border border-green-200 rounded-lg">
                <Heading size="sm" variant="success">
                    Success Theme
                </Heading>
                <Text size="sm">Positive feedback message.</Text>
            </div>
        </div>
    </div>
);

export const Weights: Story = () => (
    <div className="space-y-2">
        <Text weight="thin">Thin Weight</Text>
        <Text weight="light">Light Weight</Text>
        <Text weight="normal">Normal Weight</Text>
        <Text weight="medium">Medium Weight</Text>
        <Text weight="semibold">Semibold Weight</Text>
        <Text weight="bold">Bold Weight</Text>
        <Text weight="extrabold">Extrabold Weight</Text>
        <Text weight="black">Black Weight</Text>
    </div>
);

export const Sizes: Story = () => (
    <div className="space-y-2">
        <Text size="xs">Extra Small (xs)</Text>
        <Text size="sm">Small (sm)</Text>
        <Text size="base">Base (base)</Text>
        <Text size="lg">Large (lg)</Text>
        <Text size="xl">Extra Large (xl)</Text>
        <Text size="2xl">2XL</Text>
        <Text size="3xl">3XL</Text>
        <Text size="4xl">4XL</Text>
        <Text size="5xl">5XL</Text>
        <Text size="6xl">6XL</Text>
        <Text size="7xl">7XL</Text>
        <Text size="8xl">8XL</Text>
        <Text size="9xl">9XL</Text>
    </div>
);

export default {
    title: 'UI/Typography',
};

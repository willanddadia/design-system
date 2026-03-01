import type { Story } from "@ladle/react";
import { Button, ButtonProps } from "./Button";

export const Default: Story<ButtonProps> = (props) => (
    <Button {...props}>Button Text</Button>
);

Default.args = {
    variant: "primary",
    size: "md",
    iconOnly: false,
    disabled: false,
};

Default.argTypes = {
    variant: {
        options: ["primary", "secondary", "outline", "destructive", "ghost"],
        control: { type: "radio" },
        defaultValue: "primary",
    },
    size: {
        options: ["sm", "md", "lg"],
        control: { type: "radio" },
        defaultValue: "md",
    },
    iconOnly: {
        control: { type: "boolean" },
        defaultValue: false,
    },
    disabled: {
        control: { type: "boolean" },
        defaultValue: false,
    },
};

export const Variants: Story = () => (
    <div className="flex flex-col gap-4 p-4">
        <div className="flex gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
        </div>
    </div>
);

export const Sizes: Story = () => (
    <div className="flex items-end gap-4 p-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
    </div>
);

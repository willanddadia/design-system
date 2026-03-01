import type { Story } from "@ladle/react";
import { Input, InputProps } from "./Input";

export const Default: Story<InputProps> = (props) => (
    <div className="w-[300px]">
        <Input {...props} placeholder="Enter your text here..." />
    </div>
);

Default.args = {
    size: "md",
    error: false,
};

Default.argTypes = {
    size: {
        options: ["sm", "md", "lg"],
        control: { type: "radio" },
        defaultValue: "md",
    },
    error: {
        control: { type: "boolean" },
        defaultValue: false,
    },
};

export const States: Story = () => (
    <div className="flex flex-col gap-4 w-[300px] p-4">
        <Input placeholder="Normal state" />
        <Input placeholder="Error state" error />
        <Input placeholder="Disabled state" disabled />
    </div>
);

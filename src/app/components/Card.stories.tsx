import type { Story } from "@ladle/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardProps } from "./Card";

export const Default: Story<CardProps> = (props) => (
    <Card {...props} className="w-[350px]">
        <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>This is a description inside the card header.</CardDescription>
        </CardHeader>
        <CardContent>
            <p>This is the main content of the card. It handles different variants smoothly.</p>
        </CardContent>
    </Card>
);

Default.args = {
    variant: "default",
};

Default.argTypes = {
    variant: {
        options: ["default", "bordered", "elevated"],
        control: { type: "radio" },
        defaultValue: "default",
    },
};

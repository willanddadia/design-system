export interface SelectBoxOption {
    value: string;
    label: string;
    description?: string;
}
export interface SelectBoxProps {
    options: SelectBoxOption[];
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    multiple?: boolean;
    className?: string;
}
export declare function SelectBox({ options, value, onChange, multiple, className, }: SelectBoxProps): import("react/jsx-runtime").JSX.Element;

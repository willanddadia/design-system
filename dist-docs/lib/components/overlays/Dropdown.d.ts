export interface DropdownOption {
    value: string;
    label: string;
}
export interface DropdownProps {
    options: DropdownOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    error?: boolean;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
export declare function Dropdown({ options, value, onChange, placeholder, error, disabled, size, className, }: DropdownProps): import("react/jsx-runtime").JSX.Element;

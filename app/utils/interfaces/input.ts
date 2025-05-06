export interface InputProps {
    id?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    error?: string;
    disabled?: boolean;
    className?: string;
}
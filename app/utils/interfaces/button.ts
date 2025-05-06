export interface ButtonProps {
    title: string;
    colorTheme?: string;
    textColor?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
}
export interface CardProps {
    title: string;
    description: string;
    colorTheme: string;
    buttonTitle: string;
    textColor: string;
    buttonTextColor: string;
    buttonColorTheme: string;
    buttonDisabled?: boolean;
    buttonPosition?: "left" | "right" | "center";
    onClick?: () => void;
    className?: string;
    isCompleted?: boolean;
    isDeleted?: boolean;
    isLoading?: boolean;
}
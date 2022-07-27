export interface IButton {
    title: string;
    variant?:  "primary" | "secondary";
    onClick?: () => void;
    type?: string;
}

export interface IButtonStyles {
    variant?:  "primary" | "secondary";
}
export interface CardProps {
    title: string;
    image?: string;
    description?: string;
}

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
}

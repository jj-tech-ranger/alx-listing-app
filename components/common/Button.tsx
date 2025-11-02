import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({ children, onClick, type = "button" }) => (
    <button
        type={type}
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
        {children}
    </button>
);

export default Button;

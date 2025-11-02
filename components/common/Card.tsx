import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, image, description }) => (
    <div className="bg-white rounded-lg shadow-md p-4">
        {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-3" />}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default Card;

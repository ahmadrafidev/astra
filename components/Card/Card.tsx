import React, { ReactNode } from 'react';

export interface CardProps {
    children: ReactNode; 
    title: String;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
    return (
        <div className="card">
            <div className="card-header">{title}</div>
            <div className="card-body">{children}</div>
        </div>
    );
};

Card.displayName = "Card";
export default Card;

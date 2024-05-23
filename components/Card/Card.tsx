import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode; 
    title: String;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
        <div className="card">
            <div className="card-header">{title}</div>
            <div className="card-body">{children}</div>
        </div>
    );
};

export default Card;

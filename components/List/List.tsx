// components/List/List.tsx
import React from 'react';

export interface ListItemProps {
    children: React.ReactNode;
    className?: string;
}

export interface ListProps {
    items: React.ReactNode[];
    className?: string;
}

const ListItem: React.FC<ListItemProps> = ({ children, className }) => (
    <li className="border-b p-2">{children}</li>
);

const List: React.FC<ListProps> = ({ items, className = '' }) => (
    <ul className={`list-none p-0 ${className}`}>
        {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
        ))}
    </ul>
);

List.displayName = "List";
export { List, ListItem };

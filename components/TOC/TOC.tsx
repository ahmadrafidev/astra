import React from 'react';

type TOCItem = {
    id: string;
    label: string;
};

interface TOCProps {
    items: TOCItem[];
    title?: string;
    className?: string;
    itemClassName?: string;
    titleClassName?: string;
}

const TOC: React.FC<TOCProps> = ({
    items,
    title = "On This Page",
    className,
    itemClassName = "text-sm text-gray-700 dark:text-gray-100 hover:text-gray-800 dark:hover:text-gray-200",
    titleClassName = "text-lg font-medium text-gray-900 dark:text-gray-50 mb-2 tracking-tight",
}) => {
    return (
        <aside className={className}>
            <div className="sticky top-20">
                <h3 className={titleClassName}>{title}</h3>
                <ul className="space-y-2">
                    {items.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`} className={itemClassName}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

TOC.displayName = "TOC";
export default TOC;

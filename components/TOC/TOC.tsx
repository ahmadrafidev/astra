import React from 'react';

/**
 * Represents an item in the Table of Contents (TOC).
 * 
 * @typedef {Object} TOCItem
 * @property {string} id - The ID of the section that the TOC item links to.
 * @property {string} label - The text label for the TOC item.
 */
type TOCItem = {
    id: string;
    label: string;
};

/**
 * Props for the TOC component.
 * 
 * @typedef {Object} TOCProps
 * @property {TOCItem[]} items - The list of items to display in the Table of Contents.
 * @property {string} [title="On This Page"] - The title of the TOC section.
 * @property {string} [className] - Additional class names for the TOC container.
 * @property {string} [itemClassName="text-sm text-gray-700 dark:text-gray-100 hover:text-gray-800 dark:hover:text-gray-200"] - Class names for each TOC item.
 * @property {string} [titleClassName="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2 tracking-tight"] - Class names for the TOC title.
 */
export interface TOCProps {
    items: TOCItem[];
    title?: string;
    className?: string;
    itemClassName?: string;
    titleClassName?: string;
}

/**
 * TOC component for rendering a table of contents with links to various sections of a page.
 * 
 * @component
 * @param {TOCProps} props - Props for the TOC component.
 * @returns {JSX.Element} The rendered TOC component.
 */
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

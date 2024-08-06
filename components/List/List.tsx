import React, { forwardRef } from 'react';
import { cn } from "@/lib/utils";

/**
 * Props for the ListItem component.
 * 
 * @typedef {Object} ListItemProps
 * @property {React.ReactNode} children - The content of the list item.
 * @property {React.ReactNode} [icon] - Optional icon to display next to the list item.
 */
export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

/**
 * Props for the List component.
 * 
 * @typedef {Object} ListProps
 * @property {Array<{ content: React.ReactNode; icon?: React.ReactNode; }>} [items] - Optional array of items to render, each with content and an optional icon.
 * @property {'ordered' | 'unordered'} [variant='unordered'] - Determines whether the list is ordered or unordered.
 * @property {string} [className] - Additional CSS classes to apply to the list.
 * @property {string} [iconClassName] - Additional CSS classes to apply to the icons.
 */
export interface ListProps extends React.OlHTMLAttributes<HTMLOListElement> {
  items?: Array<{
    content: React.ReactNode;
    icon?: React.ReactNode;
  }>;
  variant?: 'ordered' | 'unordered';
  className?: string;
  iconClassName?: string;
}

/**
 * ListItem component for rendering individual items within a List.
 * 
 * @component
 * @param {ListItemProps} props - Props for the ListItem component.
 * @param {React.Ref<HTMLLIElement>} ref - Ref for the list item element.
 * @returns {JSX.Element} The rendered ListItem component.
 */
export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, className, icon: Icon, ...props }, ref) => (
    <li
      ref={ref}
      className={cn(
        "border-b p-2 flex items-center",
        Icon ? "list-none pl-0" : "list-item", 
        className
      )}
      {...props}
    >
      {Icon ? (
        <span className="mr-2 h-5 w-5 flex items-center">{Icon}</span>
      ) : (
        <span className="h-4 w-4 flex-shrink-0" />
      )}
      <span>{children}</span>
    </li>
  )
);

ListItem.displayName = "ListItem";

/**
 * List component for displaying multiple items with optional icons.
 * 
 * @component
 * @param {ListProps} props - Props for the List component.
 * @param {React.Ref<HTMLOListElement>} ref - Ref for the list element.
 * @returns {JSX.Element} The rendered List component.
 */
export const List = forwardRef<HTMLOListElement, ListProps>(
  ({ items, variant = 'unordered', className, iconClassName, children, ...props }, ref) => {
    const Component = variant === 'ordered' ? 'ol' : 'ul';
    
    return (
      <Component
        ref={ref}
        className={cn(
          variant === 'ordered' ? "list-decimal" : "list-disc",
          "pl-4", 
          "list-inside",
          className
        )}
        {...props}
      >
        {items
          ? items.map((item, index) => (
              <ListItem key={index} icon={item.icon} className={iconClassName}>
                {item.content}
              </ListItem>
            ))
          : children}
      </Component>
    );
  }
);

List.displayName = "List";

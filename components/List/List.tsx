import React, { forwardRef } from 'react';
import { cn } from "@/lib/utils";

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
}

export interface ListProps extends React.OlHTMLAttributes<HTMLOListElement> {
  items?: React.ReactNode[];
  variant?: 'ordered' | 'unordered';
  className?: string;
}

/**
 * ListItem component for rendering individual items within a List.
 */
export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn("border-b p-2", className)}
      {...props}
    >
      {children}
    </li>
  )
);
ListItem.displayName = "ListItem";

/**
 * List component for displaying multiple items in a vertical or horizontal arrangement.
 * 
 * @param items - Optional array of items to render. If not provided, children will be rendered instead.
 * @param variant - Determines whether the list is ordered or unordered. Defaults to 'unordered'.
 * @param direction - Specifies the layout direction of the list. Defaults to 'vertical'.
 * @param className - Additional CSS classes to apply to the list.
 */
export const List = forwardRef<HTMLOListElement, ListProps>(
  ({ items, variant = 'unordered', className, children, ...props }, ref) => {
    const Component = variant === 'ordered' ? 'ol' : 'ul';
    
    return (
      <Component
        ref={ref}
        className={cn(
          "list-none p-0",
          variant === 'ordered' && "list-decimal",
          className
        )}
        {...props}
      >
        {items
          ? items.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))
          : children}
      </Component>
    );
  }
);

List.displayName = "List";



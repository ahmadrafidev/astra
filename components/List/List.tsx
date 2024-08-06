import React, { forwardRef } from 'react';
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

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
 */
export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, className, icon: Icon, ...props }, ref) => (
    <li
      ref={ref}
      className={cn("border-b p-2 flex items-center", className)}
      {...props}
    >
      {Icon && <Icon className="mr-2 h-4 w-4 flex-shrink-0" />}
      <span>{children}</span>
    </li>
  )
);

ListItem.displayName = "ListItem";

/**
 * List component for displaying multiple items with optional icons.
 * 
 * @param items - Optional array of items to render, each with content and an optional icon.
 * @param variant - Determines whether the list is ordered or unordered. Defaults to 'unordered'.
 * @param className - Additional CSS styling classes to apply to the list.
 * @param iconClassName - Additional CSS classes to apply to the icons.
 */
export const List = forwardRef<HTMLOListElement, ListProps>(
  ({ items, variant = 'unordered', className, iconClassName, children, ...props }, ref) => {
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
import React, { forwardRef, ElementType } from 'react';
import { cn } from '@/lib/utils';

const baseStyles = "inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors rounded-full";

const variantStyles = {
  contained: "text-white",
  outlinedBorder: "border text-blue-500",
  outlinedNoBorder: "text-blue-500",
};

const sizeStyles = {
  sm: "p-1",
  md: "p-2",
  lg: "p-3",
};

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
  iconClassName?: string;
  variant?: 'contained' | 'outlinedBorder' | 'outlinedNoBorder';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

/**
 * IconButton component renders a button with an icon.
 * It supports contained, outlined with border, and outlined without border variants and different sizes.
 * Users can specify custom colors.
 *
 * @param {ElementType} icon - The icon component to be rendered inside the button.
 * @param {string} [iconClassName] - Additional class names for the icon.
 * @param {'contained' | 'outlinedBorder' | 'outlinedNoBorder'} [variant="contained"] - The variant of the button, determining its style.
 * @param {'sm' | 'md' | 'lg'} [size="md"] - The size of the button.
 * @param {string} [color] - Custom color for the button.
 * @param {IconButtonProps} props - Additional props for the IconButton component.
 * @returns {JSX.Element} The rendered IconButton component.
 */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, variant = "contained", size = "md", className, iconClassName, color, ...props }, ref) => {

    const colorStyles = {
      contained: `bg-${color}-600 hover:bg-${color}-500 focus-visible:ring-${color}-500`,
      outlinedBorder: `border-${color}-600 hover:bg-${color}-200 dark:hover:bg-${color}-800 focus-visible:ring-${color}-600 text-${color}-600 dark:text-${color}-200`,
      outlinedNoBorder: `hover:bg-${color}-200 dark:hover:bg-${color}-800 focus-visible:ring-${color}-600 text-${color}-600 dark:text-${color}-200`,
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          colorStyles[variant],
          className
        )}
        {...props}
      >
        <Icon className={cn("w-6 h-6", iconClassName)} aria-hidden="true" />
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
export default IconButton;

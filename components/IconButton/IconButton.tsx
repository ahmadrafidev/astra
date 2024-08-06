import React, { forwardRef, ElementType } from 'react';
import { cn } from '@/lib/utils'; 

const iconButtonVariants = {
  base: "inline-flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors",
  variants: {
    variant: {
      contained: "bg-green-500 text-white hover:bg-green-600 focus-visible:ring-green-500",
      outlinedBorder: "bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-100 focus-visible:ring-gray-500",
      outlinedNoBorder: "bg-transparent text-current hover:bg-gray-100 focus-visible:ring-gray-500",
    },
    size: {
      sm: "p-1",
      md: "p-2",
      lg: "p-3",
    },
  },
  defaultVariants: {
    variant: "contained",
    size: "md",
  },
};

type Variant = keyof typeof iconButtonVariants.variants.variant;
type Size = keyof typeof iconButtonVariants.variants.size;

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
  iconClassName?: string;
  variant?: Variant;
  size?: Size;
  color?: string; 
}

/**
 * IconButton component renders a button with an icon.
 * It supports contained, outlined with border, and outlined without border variants and different sizes.
 * Users can specify custom colors.
 *
 * @param {ElementType} icon - The icon component to be rendered inside the button.
 * @param {string} [iconClassName] - Additional class names for the icon.
 * @param {Variant} [variant="contained"] - The variant of the button, determining its style.
 * @param {Size} [size="md"] - The size of the button.
 * @param {string} [color] - Custom color for the button.
 * @param {IconButtonProps} props - Additional props for the IconButton component.
 * @returns {JSX.Element} The rendered IconButton component.
 */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, variant = "contained", size = "md", className, iconClassName, color, ...props }, ref) => {
    const customColorStyles = color
      ? {
          contained: `bg-${color}-500 text-white hover:bg-${color}-600 focus-visible:ring-${color}-500`,
          outlinedBorder: `border-${color}-500 text-${color}-500 hover:bg-${color}-100 focus-visible:ring-${color}-500`,
          outlinedNoBorder: `text-${color}-500 hover:bg-${color}-100 focus-visible:ring-${color}-500`,
        }
      : {};
    
    return (
      <button
        ref={ref}
        className={cn(
          iconButtonVariants.base,
          customColorStyles[variant] || iconButtonVariants.variants.variant[variant],
          iconButtonVariants.variants.size[size],
          className
        )}
        {...props}
      >
        <Icon className={cn("w-5 h-5", iconClassName)} aria-hidden="true" />
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
export default IconButton;

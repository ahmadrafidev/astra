import React, { forwardRef, ElementType } from 'react';
import { cn } from '@/lib/utils'; 

type Variant = keyof typeof iconButtonVariants.variants.variant;
type Size = keyof typeof iconButtonVariants.variants.size;

const iconButtonVariants = {
  base: "inline-flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors",
  variants: {
    variant: {
      default: "bg-gray-200 hover:bg-gray-300 focus-visible:ring-gray-500",
      primary: "bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-blue-500",
      secondary: "bg-gray-500 text-white hover:bg-gray-600 focus-visible:ring-gray-500",
      danger: "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500",
    },
    size: {
      sm: "p-1",
      md: "p-2",
      lg: "p-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
};

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
  iconClassName?: string;
  variant?: Variant;
  size?: Size;
}

/**
 * IconButton component renders a button with an icon.
 * It supports different variants and sizes.
 *
 * @param {ElementType} icon - The icon component to be rendered inside the button.
 * @param {string} [iconClassName] - Additional class names for the icon.
 * @param {Variant} [variant="default"] - The variant of the button, determining its color scheme.
 * @param {Size} [size="md"] - The size of the button.
 * @param {IconButtonProps} props - Additional props for the IconButton component.
 * @returns {JSX.Element} The rendered IconButton component.
 */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, variant = "default", size = "md", className, iconClassName, ...props }, ref) => {
    
    return (
      <button
        ref={ref}
        className={cn(
          iconButtonVariants.base,
          iconButtonVariants.variants.variant[variant],
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

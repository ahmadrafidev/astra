import React, { ReactNode, ButtonHTMLAttributes, memo } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Button variants using class-variance-authority for better type safety and maintainability
 */
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
  {
    variants: {
      variant: {
        default: 'bg-gray-800 dark:bg-gray-100 hover:bg-gray-900 dark:hover:bg-gray-200 focus:ring-blue-700 text-white dark:text-gray-800',
        destructive: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white',
        outline: 'bg-transparent border border-gray-400 hover:bg-gray-100 focus:ring-gray-400 text-gray-400',
        secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 text-white',
        ghost: 'bg-transparent hover:bg-gray-100 focus:ring-gray-400 text-blue-500',
        link: 'bg-transparent underline hover:no-underline focus:ring-0 text-blue-500',
      },
      size: {
        xs: 'px-2 py-1 text-sm',
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
      iconPosition: {
        left: 'flex-row',
        right: 'flex-row-reverse',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      iconPosition: 'left',
    },
  }
);

/**
 * Props for the Button component.
 */
export interface ButtonProps 
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  isLoading?: boolean;
  loadingText?: string;
}

/**
 * Button component for rendering a button with various styles, sizes, and optional icons.
 * 
 * @component
 * @param {ButtonProps} props - Props for the Button component.
 * @returns {JSX.Element} The rendered Button component.
 */
const Button = memo<ButtonProps>(({
  variant = 'default',
  size = 'md',
  iconPosition = 'left',
  icon,
  className,
  children,
  disabled,
  isLoading = false,
  loadingText,
  ...props
}) => {
  // Combine the variants with the incoming className
  const combinedClassName = cn(
    buttonVariants({ variant, size, iconPosition }),
    className
  );

  // If the button is loading, it should be disabled
  const isDisabled = disabled || isLoading;
  
  // Determine what to display as content when loading
  const content = isLoading 
    ? (
      <>
        <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em]"></span>
        {loadingText || children}
      </>
    ) 
    : (
      <>
        {icon && <span className={iconPosition === 'left' ? 'mr-2' : 'ml-2'}>{icon}</span>}
        {children}
      </>
    );

  return (
    <button 
      className={combinedClassName} 
      disabled={isDisabled} 
      aria-disabled={isDisabled}
      {...props}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;

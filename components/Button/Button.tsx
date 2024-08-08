import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const buttonSizes = {
  xs: 'px-2 py-1 text-sm',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const buttonVariants = {
  default:
    'bg-gray-800 dark:bg-gray-100 hover:bg-gray-900 dark:hover:bg-gray-200 focus:ring-blue-700 text-white dark:text-gray-800',
  destructive:
    'bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white',
  outline:
    'bg-transparent border border-gray-400 hover:bg-gray-100 focus:ring-gray-400 text-gray-400',
  secondary:
    'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 text-white',
  ghost:
    'bg-transparent hover:bg-gray-100 focus:ring-gray-400 text-blue-500',
  link:
    'bg-transparent underline hover:no-underline focus:ring-0 text-blue-500',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  icon,
  iconPosition = 'left',
  className,
  children,
  disabled,
  ...props
}) => {
  const combinedClassName = cn(
    'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
    buttonSizes[size],
    buttonVariants[variant],
    {
      'cursor-not-allowed opacity-60': disabled,
      'flex-row-reverse': iconPosition === 'right',
    },
    className
  );

  return (
    <button className={combinedClassName} disabled={disabled} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

Button.displayName = 'Button';
export default Button;
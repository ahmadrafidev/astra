// components/Button/Button.tsx
'use client';

import React, { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'; 
  className?: string;
}

const buttonStyles = {
  default: "px-4 py-2 border-none rounded-md text-base cursor-pointer transition-colors duration-300 bg-blue-500 text-white hover:bg-blue-700",
  destructive: "px-4 py-2 border-none rounded-md text-base cursor-pointer transition-colors duration-300 bg-red-600 text-white hover:bg-red-700",
  outline: "px-4 py-2 border rounded-md text-base cursor-pointer transition-colors duration-300 bg-transparent border-gray-400 text-gray-400 hover:bg-gray-100",
  secondary: "px-4 py-2 border-none rounded-md text-base cursor-pointer transition-colors duration-300 bg-gray-600 text-white hover:bg-gray-700",
  ghost: "px-4 py-2 border-none rounded-md text-base cursor-pointer transition-colors duration-300 bg-transparent text-blue-500 hover:bg-gray-100",
  link: "px-4 py-2 border-none text-base cursor-pointer transition-colors duration-300 bg-none text-blue-500 underline hover:no-underline",
};

const Button: React.FC<ButtonProps> = ({ variant = 'default', children, className = '',  ...props }) => {
  const combinedClassName = `${buttonStyles[variant] || buttonStyles.default} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

Button.displayName = "Button";
export default Button;

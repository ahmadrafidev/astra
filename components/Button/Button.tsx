import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'; // Added type for variant
}

const buttonStyles = {
  default: "button button-default",
  destructive: "button button-destructive",
  outline: "button button-outline",
  secondary: "button button-secondary",
  ghost: "button button-ghost",
  link: "button button-link",
};

const Button: React.FC<ButtonProps>  = ({ variant = 'default', children, ...props }) => {
  const className = buttonStyles[variant] || buttonStyles.default;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;

import React from 'react';

const buttonStyles = {
  default: "button button-default",
  destructive: "button button-destructive",
  outline: "button button-outline",
  secondary: "button button-secondary",
  ghost: "button button-ghost",
  link: "button button-link",
};

const Button = ({ variant = 'default', children, ...props }) => {
  const className = buttonStyles[variant] || buttonStyles.default;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;

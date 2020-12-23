import React, { ReactNode } from 'react';
import './button.scss';

export type ButtonProps = {
  value?: string;
  className?: string;
  name?: string;
  onClick?: (event: any) => void;
  children?: ReactNode
  disabled?: boolean;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props}>{children}</button>
  )
}
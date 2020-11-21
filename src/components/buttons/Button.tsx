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

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={props.className}
      value={props.value}>
      {props.children}</button>
  )
}
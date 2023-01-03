import React, { HTMLAttributes, ReactNode, useMemo } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Label of button */
  children: ReactNode;
  /** The variant button to use */
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline-primary'
    | 'outline-secondary'
    | 'ghost';
  //** The size of button to use */
  size?: 'small' | 'medium' | 'large';
  /** If `true`, the button will add a gap for the content of the button */
  icon?: boolean;
  /** If `true`, the button will take up full width of parent element */
  fullWidth?: boolean;
  /** The html button type to use */
  type?: 'button' | 'reset' | 'submit';
  /** If `true`, the button will be disabled */
  disabled?: boolean;
}

//** Button Component */
export const Button = ({
  variant = 'primary',
  size = 'small',
  fullWidth = false,
  type = 'button',
  disabled = false,
  icon = false,
  children,
  ...props
}: Props) => {
  return (
    <button
      className={`btn btn-${variant} btn-small`}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

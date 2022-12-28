import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide a text for the button */
  children: ReactNode;
  /** Which variant look would you like to use */
  variant: 'primary' | 'secondary';
}

/**  This is a special button!!! */
export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button {...props} className="text-lg text-indigo-500 bg-black p-4 rounded">
      {children}
    </button>
  );
};

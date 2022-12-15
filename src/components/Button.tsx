import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide a text for the button */
  children: ReactNode;
  /** Which variant look would you like to use */
  variant: 'primary' | 'secondary' | 'success';
}

/**  This is a special button!!! */
export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? '#5b2ee2' : variant === 'secondary' ? '#078c54' : variant === 'success' ? 'green' : '',
        minWidth: '175px',
        height: '45px',
        margin: '10px auto',
        border: 'none',
        borderRadius: '4px',
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '24px',
        transition: '0.3s ease',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};

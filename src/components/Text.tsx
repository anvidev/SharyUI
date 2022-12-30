import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'medium' | 'semibold';
  color?: 'blue' | 'purple' | 'green';
  as?: 'p' | 'span';
}

const BASE_TEXT_CLASSES = '';

const getSizeClasses = (size: string) => {
  switch (size) {
    default:
    case 'small':
      return 'text-small';
      break;
    case 'medium':
      return 'text-base';
      break;
    case 'large':
      return 'text-xl';
      break;
  }
};

const getWeightClasses = (weight: string) => {
  switch (weight) {
    default:
    case 'normal':
      return 'font-normal';
      break;
    case 'medium':
      return 'font-medium';
      break;
    case 'semibold':
      return 'font-semibold';
      break;
  }
};

export const Text = ({
  children,
  size = 'small',
  weight = 'normal',
  color = 'blue',
  as = 'p',
}: Props) => {
  if (as == 'span') {
    return <span>{children}</span>;
  }

  return <p>{children}</p>;
};

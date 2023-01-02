import React, { HTMLAttributes, ReactNode, useMemo } from 'react';

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'medium' | 'semibold';
  color?: 'black' | 'purple' | 'green';
  as?: 'p' | 'span';
}

const BASE_TEXT_CLASSES = '';

const getSizeClasses = (size: string) => {
  switch (size) {
    default:
    case 'small':
      return 'text-sm';
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

const getColorClasses = (color: string) => {
  switch (color) {
    default:
    case 'black':
      return 'text-black';
      break;
    case 'purple':
      return 'text-primary';
      break;
    case 'green':
      return 'text-secondary';
      break;
  }
};

export const Text = ({
  children,
  size = 'small',
  weight = 'normal',
  color = 'black',
  as = 'p',
}: Props) => {
  const computedClasses = useMemo(() => {
    const sizeClasses = getSizeClasses(size);
    const weightClasses = getWeightClasses(weight);
    const colorClasses = getColorClasses(color);

    return [sizeClasses, weightClasses, colorClasses].join(' ');
  }, [size, weight, color]);

  if (as == 'span') {
    return (
      <span className={`${BASE_TEXT_CLASSES} ${computedClasses}`}>
        {children}
      </span>
    );
  }

  return (
    <p className={`${BASE_TEXT_CLASSES} ${computedClasses}`}>{children}</p>
  );
};

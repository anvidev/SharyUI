import React, { FC, HTMLAttributes, ReactNode, useMemo } from 'react';

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
  size?: 'sm' | 'md' | 'lg';
  /** If added, the button will show an icon before the button's label */
  leftIcon?: boolean;
  /** If added, the button will show an icon after the button's label */
  rightIcon?: React.ReactElement;
  /** If `true`, the button will take up full width of parent element */
  block?: boolean;
  /** The html button type to use */
  type?: 'button' | 'reset' | 'submit';
  /** If `true`, the button will be disabled */
  disabled?: boolean;
}

const BASE_BUTTON_CLASSES =
  'rounded px-4 text-base flex justify-center items-center text-white font-semibold';

const getVariantClasses = (variant: string) => {
  switch (variant) {
    case 'primary':
      return 'bg-primary hover:bg-primaryLight transition-all duration-200 ease-linear focus:outline-none focus:border-primaryLight focus:ring-2 focus:ring-primaryLight disabled:bg-disabled';
      break;
    case 'secondary':
      return 'bg-secondary hover:bg-secondaryLight transition-all duration-200 ease-linear focus:outline-none focus:border-secondaryLight focus:ring-2 focus:ring-secondaryLight disabled:bg-disabled';
      break;
    case 'outline-primary':
      return 'bg-transparent text-primary border-2 border-primary hover:bg-primaryLight hover:text-white transition-all ease-linear duration-200 focus:bg-primaryLight disabled:border-disabled disabled:text-disabled';
      break;
    case 'outline-secondary':
      return 'bg-transparent text-secondary border-2 border-secondary hover:bg-secondaryLight hover:text-white transition-all duration-200 ease-linear focus:bg-secondaryLight disabled:border-disabled disabled:text-disabled';
      break;
    case 'ghost':
      return 'bg-transparent !text-black hover:bg-disabled transition-all duration-200 ease-linear focus:outline-none focus:border-black focus:ring-2 focus:ring-black disabled:text-disabled';
      break;
    default:
      return 'bg-primary hover:bg-primaryLight transition-all duration-200 ease-linear focus:outline-none focus:border-primaryLight focus:ring-2 focus:ring-primaryLight disabled:bg-disabled';
      break;
  }
};

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'sm':
      return 'h-8';
      break;
    case 'md':
      return 'h-10';
      break;
    case 'lg':
      return 'h-12';
      break;
    default:
      return 'h-8';
      break;
  }
};

const getBlockClasses = (block: boolean) => (block ? 'w-full' : '');

// TODO: Fix icon prop. Is it just a boolean prop or can we import icons dynamically?
const getIconClasses = (leftIcon: boolean) => (leftIcon ? 'gap-2' : '');

//** Button Component */
export const Button = ({
  variant = 'primary',
  size = 'sm',
  block = false,
  type = 'button',
  disabled = false,
  leftIcon = false,
  rightIcon,
  children,
  ...props
}: Props) => {
  const computedClasses = useMemo(() => {
    const buttonVariant = getVariantClasses(variant);
    const buttonSize = getSizeClasses(size);
    const buttonBlock = getBlockClasses(block);
    const buttonIcon = getIconClasses(leftIcon);

    return [buttonVariant, buttonSize, buttonBlock, buttonIcon].join(' ');
  }, [variant, size, block, leftIcon]);

  return (
    <button
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

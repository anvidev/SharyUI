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

const BASE_BUTTON_CLASSES =
  'rounded px-4 text-base flex justify-center items-center text-white font-semibold';

const getVariantClasses = (variant: string) => {
  switch (variant) {
    case 'primary':
      return 'bg-primary hover:bg-primaryLight transition-all duration-200 ease-linear focus:outline-none focus:border-primaryLight focus:ring-2 focus:ring-primaryLight disabled:bg-disabled disabled:pointer-events-none';
      break;
    case 'secondary':
      return 'bg-secondary hover:bg-secondaryLight transition-all duration-200 ease-linear focus:outline-none focus:border-secondaryLight focus:ring-2 focus:ring-secondaryLight disabled:bg-disabled disabled:pointer-events-none';
      break;
    case 'outline-primary':
      return 'bg-transparent text-primary border-2 border-primary hover:bg-primaryLight hover:text-white transition-all ease-linear duration-200 focus:bg-primaryLight focus:text-white focus:outline-none disabled:border-disabled disabled:text-disabled disabled:pointer-events-none';
      break;
    case 'outline-secondary':
      return 'bg-transparent text-secondary border-2 border-secondary hover:bg-secondaryLight hover:text-white transition-all duration-200 ease-linear focus:bg-secondaryLight focus:text-white focus:outline-none disabled:border-disabled disabled:text-disabled disabled:pointer-events-none';
      break;
    case 'ghost':
      return 'bg-transparent !text-black hover:bg-disabled transition-all duration-200 ease-linear focus:outline-none focus:border-black focus:ring-2 focus:ring-black disabled:!text-disabled disabled:pointer-events-none';
      break;
    default:
      return 'bg-primary hover:bg-primaryLight transition-all duration-200 ease-linear focus:outline-none focus:border-primaryLight focus:ring-2 focus:ring-primaryLight disabled:bg-disabled disabled:pointer-events-none';
      break;
  }
};

const getSizeClasses = (size: string) => {
  switch (size) {
    default:
    case 'small':
      return 'h-8';
      break;
    case 'medium':
      return 'h-10';
      break;
    case 'large':
      return 'h-12';
      break;
  }
};

const getBlockClasses = (fullWidth: boolean) => (fullWidth ? 'w-full' : '');

const getIconClasses = (icon: boolean) => (icon ? 'gap-2' : '');

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
  const computedClasses = useMemo(() => {
    const buttonVariant = getVariantClasses(variant);
    const buttonSize = getSizeClasses(size);
    const buttonBlock = getBlockClasses(fullWidth);
    const buttonIcon = getIconClasses(icon);

    return [buttonVariant, buttonSize, buttonBlock, buttonIcon].join(' ');
  }, [variant, size, fullWidth, icon]);

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

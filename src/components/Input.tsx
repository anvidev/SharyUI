import React, { HTMLAttributes, useMemo } from 'react';

export interface Props extends HTMLAttributes<HTMLInputElement> {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  type?: 'text' | 'password' | 'email' | 'textarea';
  pattern?: 'none' | 'password' | 'email';
  placeholder?: string;
  required?: boolean;
  fullWidth?: boolean;
  inputId: string;
}

const BASE_INPUT_CLASSES =
  'px-3 rounded w-64 border-2 border-slate-400 text-black placeholder:text-slate-400 focus:border-2 focus:border-primary focus:outline-none invalid:border-red-500 transition-colors duration-200 ease-linear flex justify-center items-center';

const getRegex = (regex: string) => {
  switch (regex) {
    default:
    case 'none':
      return '.*';
      break;
    case 'password':
      return '^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$';
      break;
    case 'email':
      return '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';
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
    case 'xlarge':
      return 'h-14';
  }
};

const getWidthClasses = (fullWidth: boolean) => (fullWidth ? '!w-full' : '');

export const Input = ({
  size = 'medium',
  type = 'text',
  fullWidth = false,
  required = false,
  pattern = 'none',
  inputId,
  placeholder,
  ...props
}: Props) => {
  const computedClasses = useMemo(() => {
    const sizeClasses = getSizeClasses(size);
    const widthClasses = getWidthClasses(fullWidth);

    return [sizeClasses, widthClasses].join(' ');
  }, [size, fullWidth]);

  if (type == 'textarea') {
    return (
      <textarea
        className={`${BASE_INPUT_CLASSES} ${computedClasses} py-2`}
        aria-placeholder={placeholder}
        placeholder={placeholder}
        aria-required={required}
        required={required}
        id={inputId}
        name={inputId}
        maxLength={350}
      />
    );
  }

  return (
    <input
      className={`${BASE_INPUT_CLASSES} ${computedClasses}`}
      aria-placeholder={placeholder}
      placeholder={placeholder}
      aria-required={required}
      required={required}
      id={inputId}
      name={inputId}
      pattern={getRegex(pattern)}
      type={type}
      {...props}
    />
  );
};

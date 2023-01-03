import React, { HTMLAttributes, useMemo } from 'react';

export interface Props extends HTMLAttributes<HTMLInputElement> {
  /** Variant of radio */
  variant?: 'circle' | 'chip';
  /** Group name of radios */
  name: string;
  /** ID of radio */
  id: string;
  /** If `chip` is selected, provide a value */
  value: string | number;
}

const BASE_RADIO_CLASSES =
  'outline-none border-2 border-slate-400 w-6 h-6 appearance-none flex justify-center items-center focus:border-primary text-black';

const getVariantClasses = (variant: string) => {
  switch (variant) {
    default:
    case 'circle':
      return 'rounded-full checked:bg-white checked:before:block checked:before:bg-primary checked:before:w-4 checked:before:h-4 checked:before:rounded-full';
      break;
    case 'chip':
      return 'w-14 h-8 rounded-2xl checked:bg-white checked:before:block checked:before:bg-primary checked:before:w-12 checked:before:h-6 checked:before:rounded-2xl peer';
      break;
  }
};

/** Checkbox component */
export const Radio = ({
  variant = 'circle',
  name,
  id,
  value,
  ...props
}: Props) => {
  const computedClasses = useMemo(() => {
    const variantClasses = getVariantClasses(variant);

    return [variantClasses].join(' ');
  }, [variant]);

  if (variant == 'chip') {
    return (
      <div className="relative flex items-center justify-center w-fit">
        <input
          className={`${BASE_RADIO_CLASSES} ${computedClasses}`}
          type="radio"
          name={name}
          id={id}
          value={value}
          {...props}
        />
        <label
          className="absolute text-sm select-none peer-checked:text-white"
          htmlFor={id}
        >
          {value}
        </label>
      </div>
    );
  }

  return (
    <input
      className={`${BASE_RADIO_CLASSES} ${computedClasses}`}
      type="radio"
      name={name}
      id={id}
      value={value}
    />
  );
};

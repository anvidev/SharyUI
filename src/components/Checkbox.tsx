import React, { HTMLAttributes, useMemo } from 'react';

export interface Props extends HTMLAttributes<HTMLInputElement> {
  /** Variant of checkbox */
  variant?: 'box' | 'chip';
  /** Group name of checkboxes */
  name: string;
  /** ID of checkbox */
  id: string;
  /** If `chip` is selected, provide a value */
  value: string | number;
}

const BASE_CHECKBOX_CLASSES =
  'outline-none border-2 border-slate-400 w-6 h-6 appearance-none flex justify-center items-center focus:border-primary text-black';

const getVariantClasses = (variant: string) => {
  switch (variant) {
    default:
    case 'checkbox':
      return 'rounded checked:bg-white checked:before:block checked:before:bg-primary checked:before:w-4 checked:before:h-4';
      break;
    case 'chip':
      return 'w-14 h-8 rounded-2xl checked:bg-white checked:before:block checked:before:bg-primary checked:before:w-12 checked:before:h-6 checked:before:rounded-2xl peer';
      break;
  }
};

/** Checkbox component */
export const Checkbox = ({
  variant = 'box',
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
          className={`${BASE_CHECKBOX_CLASSES} ${computedClasses}`}
          type="checkbox"
          name={name}
          id={id}
          value={value}
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
      className={`${BASE_CHECKBOX_CLASSES} ${computedClasses}`}
      type="checkbox"
      name={name}
      id={id}
      value={value}
    />
  );
};

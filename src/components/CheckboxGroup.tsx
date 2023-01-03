import React, { HTMLAttributes, ReactNode } from 'react';
import { Label } from './Label';
import { Checkbox } from './Checkbox';

export interface Props extends HTMLAttributes<HTMLInputElement> {
  /** Variant of Checkbox */
  variant?: 'box' | 'chip';
  /** Group name of Checkboxes */
  name: string;
  /** ID of Checkbox */
  id: string;
  /** If `chip` is selected, provide a value */
  value: string | number;
  /** Content for label (typically the same as corresponding input component) */
  label: ReactNode;
  /** `id` of corresponding input component */
  inputId: string;
  /** if corresponding input component is required to fill out */
  required?: boolean;
}

export const CheckboxGroup = ({
  variant = 'box',
  name,
  id,
  value,
  label,
  required = false,
  ...props
}: Props) => {
  return (
    <div className="flex items-center gap-2 w-fit">
      <Checkbox
        variant={variant}
        name={name}
        id={id}
        value={value}
        {...props}
      />
      <Label required={required} inputId={id}>
        {label}
      </Label>
    </div>
  );
};

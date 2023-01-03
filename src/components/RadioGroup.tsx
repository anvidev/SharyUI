import React, { HTMLAttributes, ReactNode } from 'react';
import { Label } from './Label';
import { Radio } from './Radio';

export interface Props extends HTMLAttributes<HTMLInputElement> {
  /** Variant of radio */
  variant?: 'box' | 'chip';
  /** Group name of radios */
  name: string;
  /** ID of radio */
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

export const RadioGroup = ({
  variant = 'box',
  name,
  id,
  value,
  label,
  required = false,
}: Props) => {
  return (
    <div className="flex items-center gap-2 w-fit">
      <Radio variant={variant} name={name} id={id} value={value} />
      <Label required={required} inputId={id}>
        {label}
      </Label>
    </div>
  );
};

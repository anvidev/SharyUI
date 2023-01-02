import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLLabelElement> {
  /** Content for label (typically the same as corresponding input component) */
  children: ReactNode;
  /** `id` of corresponding input component */
  inputId: string;
  /** if corresponding input component is required to fill out */
  required?: boolean;
}

const BASE_LABEL_CLASSES = 'text-[#383F60] font-medium';

/** Label component */
export const Label = ({
  children,
  required = false,
  inputId,
  ...props
}: Props) => {
  return (
    <label className={`${BASE_LABEL_CLASSES}`} htmlFor={inputId}>
      {children}
      {required && <span className="text-red-500">*</span>}
    </label>
  );
};

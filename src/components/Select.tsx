import React, { useMemo, useState } from 'react';

type Option = {
  label: string;
  value: string | number;
};

export interface Props {
  /** String content of select button. */
  placeholder: string;
  /** Array of objects for options. */
  options: Option[];
  /** if `true`, a search field will appear in options. Seaches options. */
  isSearchable?: boolean;
  /** Choose size of select button. */
  size?: 'small' | 'medium' | 'large';
  /** if `true`, the select will take up all available horizontal space. */
  fullWidth?: boolean;
  /** Pass function to trigger on change of selection. */
  onChange: (selection: Option) => void;
  /** Pass a state value from parent component. */
  selected: Option | null;
}

const BASE_SELECT_CLASSES =
  'w-64 px-3 text-black border-2 rounded border-slate-400 cursor-pointer flex items-center transition-colors duration-200 ease-linear select-none';

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
      break;
  }
};

const getWidthClasses = (fullWidth: boolean) => (fullWidth ? '!w-full' : '');

export const Select = ({
  placeholder,
  options,
  size = 'medium',
  fullWidth = false,
  onChange,
  selected,
  isSearchable = false,
}: Props) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const computedClasses = useMemo(() => {
    const sizeClasses = getSizeClasses(size);
    const widthClasses = getWidthClasses(fullWidth);

    return [sizeClasses, widthClasses].join(' ');
  }, [size, fullWidth]);

  const onSearch = (e: any) => {
    setSearchValue(e.target.value);
  };

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      option =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );
  };

  return (
    <div className="relative">
      <div
        className={`${BASE_SELECT_CLASSES} ${computedClasses} ${showOptions &&
          '!border-primary'}`}
        onClick={() => setShowOptions(!showOptions)}
      >
        <span className="flex items-center justify-between w-full">
          {selected ? selected.label : placeholder}
          {Icon}
        </span>
      </div>
      {showOptions && (
        <div className="absolute w-64 mt-2 border rounded select-none border-slate-400">
          {isSearchable && (
            <div className="w-full px-3">
              <input
                className="w-full h-8 px-3 my-2 border rounded border-slate-400/30 focus:border-primary focus:outline-none text-small"
                onChange={onSearch}
                value={searchValue}
                autoFocus
              />
            </div>
          )}
          {getOptions().map(option => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option);
                setShowOptions(false);
              }}
              className="flex items-center h-8 px-3 cursor-pointer hover:bg-slate-400/30"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="feather feather-chevron-down"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

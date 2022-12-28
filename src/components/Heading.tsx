import React, { HTMLAttributes, ReactNode, useMemo } from 'react';

export interface Props extends HTMLAttributes<HTMLHeadingElement> {
  /** Type of heading */
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  /** Color of heading */
  color?: 'blue' | 'purple' | 'green';
  /** Content for heading*/
  children: ReactNode;
}

const BASE_HEADING_CLASSES = 'font-medium';

const getHeadingColor = (color: string) => {
  switch (color) {
    case 'blue':
      return 'text-[#383F60]';
      break;
    case 'purple':
      return 'text-[#5B2EE2]';
      break;
    case 'green':
      return 'text-[#078C54]';
    default:
      return 'text-[#383F60]';
      break;
  }
};

const getheadingSize = (as: string) => {
  switch (as) {
    case 'h1':
      return 'text-3xl';
      break;
    case 'h2':
      return 'text-2xl';
      break;
    case 'h3':
      return 'text-xl';
      break;
    case 'h4':
      return 'text-base';
    default:
      return 'text-3xl';
      break;
  }
};

/**  This is the Heading component */
export const Heading = ({ as = 'h1', color = 'blue', children }: Props) => {
  const computedClasses = useMemo(() => {
    const headingColor = getHeadingColor(color);
    const headingSize = getheadingSize(as);

    return [headingColor, headingSize].join(' ');
  }, [color, as]);

  if (as == 'h2') {
    return (
      <h2 className={`${BASE_HEADING_CLASSES} ${computedClasses}`}>
        {children}
      </h2>
    );
  }

  if (as == 'h3') {
    return (
      <h3 className={`${BASE_HEADING_CLASSES} ${computedClasses}`}>
        {children}
      </h3>
    );
  }

  if (as == 'h4') {
    return (
      <h4 className={`${BASE_HEADING_CLASSES} ${computedClasses}`}>
        {children}
      </h4>
    );
  }

  return (
    <h1 className={`${BASE_HEADING_CLASSES} ${computedClasses}`}>{children}</h1>
  );
};

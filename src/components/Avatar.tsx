import React, { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLImageElement> {
  /** Choose a size for avatar component */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** URL or reference to avatar image */
  imageURL: string;
}

const BASE_AVATAR_CLASSES = 'rounded-full';

const getAvatarSize = (size: string) => {
  switch (size) {
    case 'sm':
      return 'w-6 h-6 ';
      break;
    case 'md':
      return 'w-10 h-10';
      break;
    case 'lg':
      return 'w-12 h-12';
      break;
    case 'xl':
      return 'w-24 h-24';
    default:
      return 'w-6 h-6';
      break;
  }
};

/**  This is the user avatar component. */
export const Avatar = ({ size = 'sm', imageURL }: Props) => {
  return (
    <img
      src={imageURL}
      alt="User Avatar"
      className={`${BASE_AVATAR_CLASSES} ${getAvatarSize(size)}`}
    />
  );
};

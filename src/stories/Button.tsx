// ./src/stories/Button.js

import { useMemo } from 'react';

const getSizeClasses = (size?: string | 'small' | 'large') => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5';
    }
    case 'large': {
      return 'px-6 py-3';
    }
    default: {
      return 'px-5 py-2.5 w-full';
    }
  }
};

const BASE_BUTTON_CLASSES =
  'text-dark bg-greeny font-body cursor-pointer border-2 leading-none inline-block font-extrabold border-dark shadow-button';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ size = 'large', label = 'Button', ...props }) => {
  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClasses(size);

    return sizeClass;
  }, [size]);

  return (
    <button
      type="button"
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      {...props}
    >
      {label}
    </button>
  );
};

import React from 'react';

const BASE_CONTAINER_CLASSES =
  'relative flex h-12 sm:h-14 border-2 border-dark rounded-lg w-full flex-row';
const BASE_INPUT_CLASSES =
  'p-2 bg-grey border-none ring-0 outline-0 font-extrabold text-lg w-full rounded-r-md';

interface InputProps {
  value: string;
  classNames?: string;
  handleInput: (value: React.SetStateAction<string>) => void;
}
export const Input: React.FC<InputProps> = ({
  value,
  classNames,
  handleInput,
}) => {
  return (
    <div className={`${BASE_CONTAINER_CLASSES}  ${classNames}`}>
      <div className="h-full w-14 bg-greeny rounded-l-md flex items-center justify-center border-r-2 border-dark">
        <span className="text-xl font-extrabold ">$</span>
      </div>

      <input
        type="number"
        className={BASE_INPUT_CLASSES}
        value={value}
        onChange={e => handleInput(e.target.value)}
      />
    </div>
  );
};

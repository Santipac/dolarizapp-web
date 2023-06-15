import { CopyCheck, Files } from 'lucide-react';
import React, { useState } from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';
const BASE_CONTAINER_CLASSES =
  'relative flex h-12 sm:h-14 border-2 border-dark rounded-lg w-full ';
const BASE_INPUT_CLASSES =
  'p-2 bg-grey border-none ring-0 outline-0 font-extrabold text-lg w-full';

interface InputProps {
  isReadOnly: boolean;
  value: string;
  classNames?: string;
  handleInput: (value: React.SetStateAction<string>) => void;
}
export const Input: React.FC<InputProps> = ({
  isReadOnly = false,
  value,
  classNames,
  handleInput,
}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onHandleCopy = () => {
    navigator.clipboard.writeText(`$${value}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div
      className={`${BASE_CONTAINER_CLASSES} ${
        isReadOnly ? 'flex-row-reverse' : 'flex-row'
      } ${classNames}`}
    >
      {isCopied && (
        <span className="bg-greeny rounded-full px-2 absolute right-0 -top-8">
          Copied!
        </span>
      )}
      {isReadOnly ? (
        <button
          type="button"
          className="h-full w-14 bg-greeny rounded-r-md flex items-center justify-center border-l-2 border-dark flex-2 "
          onClick={onHandleCopy}
        >
          <span className="text-xl font-extrabold">
            <AnimatePresence>
              {isCopied ? (
                <m.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CopyCheck />
                </m.span>
              ) : (
                <m.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Files />
                </m.span>
              )}
            </AnimatePresence>
          </span>
        </button>
      ) : (
        <div className="h-full w-14 bg-greeny rounded-l-md flex items-center justify-center border-r-2 border-dark">
          <span className="text-xl font-extrabold ">$</span>
        </div>
      )}

      <input
        type="number"
        className={`${BASE_INPUT_CLASSES} ${
          isReadOnly ? 'rounded-l-md' : 'rounded-r-md'
        }`}
        value={value}
        readOnly={isReadOnly}
        onChange={e => handleInput(e.target.value)}
      />
    </div>
  );
};

import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

export interface SelectOption {
  value: 'USD' | 'ARS';
  label: string;
}
interface Props {
  options: SelectOption[];
  selectValue: string;
  handleChangeCurrency: (value: 'USD' | 'ARS') => void;
}
const Select: React.FC<Props> = ({
  options,
  selectValue,
  handleChangeCurrency,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // Estado para controlar la apertura del menú desplegable

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: 'USD' | 'ARS') => {
    handleChangeCurrency(value);
    setIsOpen(false);
  };

  return (
    <div className="custom-select flex flex-col w-20 ">
      <div
        className="relative top-0 left-0 bottom-0 right-0 h-full py-2 px-2 selected-value bg-greeny flex items-center justify-between cursor-pointer gap-2"
        onClick={handleToggleMenu}
      >
        <p className="text-lg font-extrabold">{selectValue}</p>
        <ChevronDownIcon
          className={`h-4 w-4 text-dark ${
            isOpen
              ? '-rotate-180 transition-transform delay-75'
              : 'rotate-0 transition-transform delay-75'
          }`}
        />
      </div>
      {isOpen && (
        <ul className="absolute options bg-greeny border-dark mt-14 border-2  w-20">
          {options.map(option => (
            <li
              key={option.value}
              className="option text-center hover:bg-dark hover:text-greeny py-3 font-bold first:border-b-2 first:border-b-dark cursor-pointer"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;

import {useState, type FC} from 'react';
import type Props from './BigDropDown.props';

export const BigDropDown: FC<Props> = ({label, children, className}) => {
  const [isOpen, setIsOpen] = useState(false); // Состояние для управления открытием/закрытием блока
  const toggleContent = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <div className='flex flex-col items-start p-4'>
      <button
        onClick={toggleContent}
        className={`flex items-center justify-between w-full
         p-2 text-left bg-gray-200 rounded-md
          hover:bg-gray-300 focus:outline-none ${className}`}>
        <span className='font-semibold text-black'>{label}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          viewBox='0 0 20 20'
          fill='currentColor'>
          <path
            fillRule='evenodd'
            d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      {isOpen && (
        <div className={`mt-2 p-4 bg-gray-100 rounded-md ${isOpen && 'animate-appear-top-1000'}`}>{children}</div>
      )}
    </div>
  );
};

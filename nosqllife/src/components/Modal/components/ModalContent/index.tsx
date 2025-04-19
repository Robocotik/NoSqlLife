// components/Modal.js
import React, {type FC} from 'react';
import type Props from './Modal.props';

const ModalContent: FC<Props> = ({onClose, className, children}) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${className}`}>
      <div className='bg-white rounded-lg shadow-lg p-4 relative w-2/3'>
        <button
          onClick={onClose}
          className='absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-700'>
          &times; {/* Символ крестика */}
        </button>
        {children} {/* Содержимое модального окна */}
      </div>
    </div>
  );
};
export default ModalContent;

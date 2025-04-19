// pages/index.js
import React, {useState, type FC} from 'react';
import ModalContent from './components/ModalContent';
import type Props from './Modal.props';
const Modal: FC<Props> = ({buttonTitle, children, className}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button
        onClick={openModal}
        className={`${className} px-4 py-2 bg-blue-500 text-white rounded`}>
        {buttonTitle}
      </button>
      {isModalOpen && (
        <ModalContent onClose={closeModal} className='animate-appear-opacity-400 duration-200'>
          {children}
        </ModalContent>
      )}
    </>
  );
};
export default Modal;

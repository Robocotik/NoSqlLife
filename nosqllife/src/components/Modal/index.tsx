// pages/index.js
import React, {useState, type FC} from 'react';
import ModalContent from './components/ModalContent';
import type Props from './Modal.props';
const Modal: FC<Props> = ({className}) => {
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
        Открыть модальное окно
      </button>
      {isModalOpen && (
        <ModalContent onClose={closeModal} className='animate-appear-opacity-400 duration-200'>
          <div className='flex flex-col h-80'>
            <h2 className={`text-lg font-bold text-black  ${className}`}>
              Заголовок модального окна
            </h2>
            <p className='text-black'>Это содержимое модального окна.</p>
          </div>
        </ModalContent>
      )}
    </>
  );
};
export default Modal;

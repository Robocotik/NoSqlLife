import {useState, useEffect, type FC} from 'react';
import type Props from './DropDown.props';
import type { dataBit } from './DropDown.props';
export const DropDown: FC<Props> = ({data, className, onItemClick}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null); // Состояние для хранения выбранного элемента
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };
  const handleItemClick = (item: dataBit) => {
    setSelectedItem(item.label); // Обновляем состояние выбранного элемента
    if (onItemClick) {
      onItemClick(item); // Вызываем переданный обработчик, если он есть
    }
    if (item.onClick) {
      item.onClick(); // Вызываем функцию onClick, если она есть
    }
    setIsOpen(false); // Закрываем меню после выбора
  };
  // Обработчик клика вне выпадающего списка
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    // Проверяем, что клик был вне кнопки и выпадающего меню
    if (isOpen && !target.closest('.dropdown-container')) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    // Добавляем обработчик события клика на документ
    document.addEventListener('click', handleClickOutside);
    return () => {
      // Удаляем обработчик события при размонтировании компонента
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className='relative inline-block text-left dropdown-container'>
      <button
        type='button'
        className={`${className} hover:opacity-70 duration-200 transition-opacity inline-flex w-full justify-center gap-x-1.5
           rounded-md bg-white px-3 py-2 text-sm font-semibold
            text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset
             hover:bg-gray-50`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-haspopup='true'>
        {selectedItem || 'Класс 1'} {/* Отображаем выбранный элемент или текст по умолчанию */}
        <svg
          className='-mr-1 size-5 text-gray-400'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
          data-slot='icon'>
          <path
            fillRule='evenodd'
            d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabIndex={-1}>
          <div role='none'>
            {data.map((item, index) => (
              <p
                key={index}
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 duration-150 transition-colors'
                role='menuitem'
                tabIndex={-1}
                onClick={() => handleItemClick(item)}>
                {item.label}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

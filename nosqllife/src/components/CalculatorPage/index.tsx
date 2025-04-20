'use client';
import {FC, useState, useEffect} from 'react';
// import type Props from './CalculatorPage.props';
import { Props } from './CalculatorPage.props';
import {PageLayout} from '@/layouts/PageLayout';
import {DropDown} from '../DropDown';
import {data} from './CalculatorPage.usecase';
import {Tons} from '../icons/Tons';
import {HandsIcon} from '../icons/HandsIcon';
import src from '@/assets/img/bg_main.jpg';
export const CalculatorPage: FC<Props> = ({className, ...props}) => {
  const [tons, setTons] = useState<number | ''>(''); // Состояние для хранения количества тонн
  const [selectedClass, setSelectedClass] = useState<string>('Класс 1'); // Состояние для хранения выбранного класса
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null); // Состояние для хранения рассчитанной стоимости
  const handleItemClick = (item: {label: string; onClick: () => void}) => {
    setSelectedClass(item.label); // Устанавливаем выбранный класс
    item.onClick(); // Вызываем функцию onClick, если она есть
  };
  // Эффект для пересчета стоимости при изменении количества тонн или выбранного класса
  useEffect(() => {
    if (tons && selectedClass) {
      const tonsValue = Number(tons);
      let price = 0;
      if (selectedClass === 'Класс 1') {
        price = 222907.36 * tonsValue;
      } else if (selectedClass === 'Класс 2') {
        price = 62468.26 * tonsValue;
      }
      setCalculatedPrice(price); // Устанавливаем рассчитанную стоимость
    } else {
      setCalculatedPrice(null); // Если нет данных, сбрасываем стоимость
    }
  }, [tons, selectedClass]); // Зависимости: пересчитываем стоимость при изменении этих значений
  // Функция для форматирования стоимости в миллионах и тысячах
  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `${(price / 1000000).toFixed(2)} млн`;
    } else if (price >= 1000) {
      return `${(price / 1000).toFixed(2)} тыс`;
    }
    return `${price.toFixed(2)} руб`;
  };
  return (
    <PageLayout
      image={src.src}
      className={`${className} bg-white h-dvh flex items-center justify-center`}
      {...props}>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-[28rem] h-68 flex flex-col gap-4 bg-white/60 p-8 items-start justify-between rounded-2xl border-2 border-white'>
          <p className='mx-auto font-bold text-3xl text-white'>Рассчет стоимости</p>
          <div className='flex gap-4 items-center text-black'>
            <HandsIcon className='w-12' />
            <DropDown data={data} defaultValue={"Класс 1"} onItemClick={handleItemClick} />{' '}
            {/* Передаем обработчик выбора */}
          </div>
          <div className='flex gap-4 items-center text-black'>
            <Tons className='h-4 w-12' />
            <input
              placeholder='кол-во тонн'
              className='border-2 border-gray-300 rounded-md ps-2'
              type='number'
              value={tons} // Привязываем значение к состоянию
              onChange={e => setTons(+e.target.value)} // Обновляем состояние при изменении
            />
          </div>
          <p className='h-10 w-full border border-gray-300 rounded-md ps-2'>
            {calculatedPrice !== null ? formatPrice(calculatedPrice) : ''}
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

'use client';

import type {FC} from 'react';
import Props from './AboutPage.props';
import {PageLayout} from '@/layouts/PageLayout';
export const AboutPage: FC<Props> = ({className}) => {
  return (
    <PageLayout className={`h-dvh ${className}`}>
      <div className='w-full h-full flex justify-center items-center'>
        <p className='text-center text-balance leading-10 text-lg'>
          Добро пожаловать на наш сервис расчёта утилизации отходов! Этот инструмент разработан
          специально для юридических лиц — АО, ИП, ООО и тп. — которые обязаны соблюдать
          экологические нормы и отчитываться об обращении с отходами. Утилизация отходов — это не
          только соблюдение законодательства, но и вклад в сохранение окружающей среды. Наш сервис
          поможет быстро и точно рассчитать нормативы, сформировать отчётность и избежать штрафов за
          несвоевременные или некорректные данные. Начните с расчёта — и убедитесь, как просто
          соблюдать экологические требования вместе с нами!
        </p>
      </div>
    </PageLayout>
  );
};

'use client'

import type { FC } from 'react'
import Props from './AboutPage.props'
import { PageLayout } from '@/layouts/PageLayout'
export const AboutPage:FC<Props> = ({className}) => {
  return (
    <PageLayout className={`h-dvh ${className}`}>
      <div className='w-full h-full flex justify-center items-center'>
        <p>
          Рады приветсвовать на нашем сайте 
          Мы приложение помощник
          Готовы оказать любую помощь с
          вашими отходами и расчетами
        </p>
      </div>
    </PageLayout>
  );
}
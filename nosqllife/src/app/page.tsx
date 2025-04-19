'use client'
import {PageLayout} from '@/layouts/PageLayout';
import {Header} from '@/components/Header';
import {CalculatorPage} from '@/components/CalculatorPage';
export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <Header />
      <CalculatorPage />
    </div>
  );
}

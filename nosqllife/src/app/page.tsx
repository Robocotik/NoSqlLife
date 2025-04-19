'use client'
import {PageLayout} from '@/layouts/PageLayout';
import {Header} from '@/components/Header';
import {CalculatorPage} from '@/components/CalculatorPage';
import { AboutPage } from '@/components/AboutPage';
export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <Header />
      <AboutPage />
      <CalculatorPage />
    </div>
  );
}

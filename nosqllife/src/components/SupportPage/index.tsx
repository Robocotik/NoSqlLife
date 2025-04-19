'use client';

import {PageLayout} from '@/layouts/PageLayout';
import {BigDropDown} from '@/components/BigDropDown';
import {Player} from '@/components/Player';
import Modal from '@/components/Modal';
import EmblaCarousel from '../Carousel';
import type {EmblaOptionsType} from 'embla-carousel';
export const SupportPage = () => {
  const OPTIONS: EmblaOptionsType = {dragFree: true};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <PageLayout className='mt-38 bg-white'>
      <div className='w-full h-full flex flex-col justify-start'>
        <BigDropDown label='Пошаговая инструкиця по настройке  электронной подписи '>
          <div className='flex flex-col gap-4'>
            <Modal className='' buttonTitle={'Инструкиця по настройке  электронной подписи'}>
              <div className='flex flex-col h-full w-full'>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
              </div>
            </Modal>
            <p className='text-black'>
              Все равно не понятно как настроить электронную подпись?
              <br />
              Надеемся ролик ниже поможет вам в этом
            </p>
            <Player videoUrl='https://gisopvk.ru/media/files/filepublic/8/f/4/%D0%B3%D0%B8%D1%81_%D0%BE%D0%BF%D0%B2%D0%BA_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D0%BF%D0%B5%D1%80%D0%B5%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_5SYipcN.mp4' />
          </div>
        </BigDropDown>
        <BigDropDown label='Пошаговая инструкиця регистрации  в системе ГИС ОПВК '>
          <div className='flex flex-col gap-4'>
            <Modal className='' buttonTitle={'Инструкиця по настройке  электронной подписи'}>
              <div className='flex flex-col h-80'>
                <h2 className={`text-lg font-bold text-black`}>Заголовок модального окна</h2>
                <p className='text-black'>Это содержимое модального окна.</p>
              </div>
            </Modal>
            <p className='text-black'>
              Все равно не понятно как зарегистрироваться в системе ГИС ОПВК?
              <br />
              Надеемся ролик ниже поможет вам в этом
            </p>
            <Player videoUrl='https://gisopvk.ru/media/files/filepublic/8/f/4/%D0%B3%D0%B8%D1%81_%D0%BE%D0%BF%D0%B2%D0%BA_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D0%BF%D0%B5%D1%80%D0%B5%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_5SYipcN.mp4' />
          </div>
        </BigDropDown>
      </div>
    </PageLayout>
  );
};

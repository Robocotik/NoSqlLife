import React, {useCallback, useEffect, useState} from 'react';
import {EmblaCarouselType, EmblaOptionsType} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {NextButton, PrevButton, usePrevNextButtons} from './CarouselArrows';
import './index.css';
import Image from 'next/image';
import photo1 from '@/assets/img/photo_1.png';
import photo2 from '@/assets/img/photo2.png';
import photo3 from '@/assets/img/photo3.png';
import photo4 from '@/assets/img/photo4.png';
import photo5 from '@/assets/img/photo5.png';
import photo6 from '@/assets/img/photo6.png';
import photo7 from '@/assets/img/photo7.png';

const photoes = [
  photo1.src,
  photo2.src,
  photo3.src,
  photo4.src,
  photo5.src,
  photo6.src,
  photo7.src,
];

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = props => {
  const {slides, options} = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);

  const {prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick} =
    usePrevNextButtons(emblaApi);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on('reInit', onScroll).on('scroll', onScroll).on('slideFocus', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {photoes.map((item, index) => (
            <div className='embla__slide' key={index}>
              <Image
                src={item}
                alt='ph1'
                className='w-full h-full object-contain object-center overflow-hidden'
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className='embla__progress'>
          <div
            className='embla__progress__bar'
            style={{transform: `translate3d(${scrollProgress}%,0px,0px)`}}
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

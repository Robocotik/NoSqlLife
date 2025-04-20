import {type FC} from 'react';
import Image from 'next/image';
// import Props from './HandsIcon.props';
import { Props } from './HandsIcon.props';
import src from '@/assets/icons/hands.svg';

export const HandsIcon: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      src={src}
      className={` hover:opacity-80 size-12 duration-200 transition-all ${className}`}
      {...props}
      alt='Hands'
      width={29}
      height={30}
    />
  );
};

import {type FC} from 'react';
import Image from 'next/image';
import Props from './Lks.props';
import src from '@/assets/icons/lks.svg';

export const Lks: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      src={src}
      className={`cursor-pointer hover:opacity-80 w-fit max-h-12 h-full duration-200  transition-all ${className}`}
      {...props}
      alt='Lks'
      width={29}
      height={30}
    />
  );
};

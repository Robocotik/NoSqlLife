import {type FC} from 'react';
import Image from 'next/image';
import Props from './Tons.props';
import src from '@/assets/icons/tons.svg';

export const Tons: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      src={src}
      className={`cursor-pointer hover:opacity-80 w-fit h-full max-h-10 duration-200 transition-all ${className}`}
      {...props}
      alt='Tons'
      width={29}
      height={30}
    />
  );
};

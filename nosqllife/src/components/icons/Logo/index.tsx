import {type FC} from 'react';
import Image from 'next/image';
import Props from './Logo.props';
import src from '@/assets/icons/logo.svg';

export const Logo: FC<Props> = ({className,onClick, ...props}) => {
  return (
    <Image
      src={src}
      onClick={onClick}
      className={`cursor-pointer hover:opacity-80 h-full w-fit  duration-200 transition-all ${className}`}
      {...props}
      alt='Logo'
      width={29}
      height={30}
    />
  );
};


import {type FC} from 'react';
import Image from 'next/image';
import Props from './Support.props';
import src from '@/assets/icons/support.svg';

export const Support: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      src={src}
      className={` hover:opacity-80 w-fit max-h-12 h-full duration-200 transition-all ${className}`}
      {...props}
      alt='Support'
      width={29}
      height={30}
    />
  );
};

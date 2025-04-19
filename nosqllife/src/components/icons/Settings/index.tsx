import {type FC} from 'react';
import Image from 'next/image';
import Props from './Settings.props';
import src from '@/assets/icons/settings.svg';

export const Settings: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      src={src}
      className={` hover:opacity-80 w-fit  h-full duration-200 transition-all ${className}`}
      {...props}
      alt='Settings'
      width={29}
      height={30}
    />
  );
};

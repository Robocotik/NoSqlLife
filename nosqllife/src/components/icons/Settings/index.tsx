import {type FC} from 'react';
import Image from 'next/image';
import Props from './Settings.props';
import src from '@/assets/icons/settings.svg';

export const Settings: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      src={src}
      className={`cursor-pointer hover:opacity-80 w-fit max-h-12  h-full duration-200 transition-all ${className}`}
      {...props}
      alt='Settings'
      width={29}
      height={30}
    />
  );
};

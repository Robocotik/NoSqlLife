import {type FC} from 'react';
import Image from 'next/image';
import Props from './Telegram.props';
import src from '@/assets/icons/tg.svg';

export const TelegramIcon: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      src={src}
      className={`cursor-pointer hover:opacity-80 w-fit h-full max-h-10 duration-200 transition-all ${className}`}
      {...props}
      alt='TelegramIcon'
      width={29}
      height={30}
    />
  );
};

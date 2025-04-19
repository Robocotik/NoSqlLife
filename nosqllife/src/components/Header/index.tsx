import type {FC} from 'react';
import type Props from './Header.props';
import {HeaderLayout} from '@/layouts/HeaderLayout';
import {Logo} from '../icons/Logo';
import {Support} from '../icons/Support';
import {TelegramIcon} from '../icons/Telegram';
import {Lks} from '../icons/Lks';

export const Header: FC<Props> = ({className, ...props}) => {
  return (
    <HeaderLayout
      head={<Logo />}
      lhs={<Support />}
      rhs={<TelegramIcon />}
      trailer={<Lks />}
      {...props}
    />
  );
};

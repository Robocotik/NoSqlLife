import type {FC} from 'react';
import type Props from './Header.props';
import {HeaderLayout} from '@/layouts/HeaderLayout';
import {Logo} from '../icons/Logo';
import {Support} from '../icons/Support';
import {TelegramIcon} from '../icons/Telegram';
import {Lks} from '../icons/Lks';
import {useRouter} from 'next/navigation';

export const Header: FC<Props> = ({className, ...props}) => {
  const router = useRouter();
  return (
    <HeaderLayout
      
      head={<Logo onClick={() => router.push('/')} />}
      lhs={<Support onClick={() => router.push('/support')} />}
      rhs={<TelegramIcon onClick={() => router.push('https://t.me/+gHz_nFWr_lxkNjIy')} />}
      trailer={<Lks onClick={() => router.push('/profile')} />}
      {...props}
    />
  );
};

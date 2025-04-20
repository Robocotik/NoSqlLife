'use client';
import {Lks} from '@/components/icons/Lks';
import {Logo} from '@/components/icons/Logo';
import {Settings} from '@/components/icons/Settings';
import {PageLayout} from '@/layouts/PageLayout';
import {DropDown} from '@/components/DropDown';
import account_bg from '@/assets/img/account.jpg';
import {useRouter} from 'next/navigation';
export default function Profile() {
  const router = useRouter();
  const data = [
    {
      label: 'Юр. лицо',
      onClick: () => {},
    },
    {
      label: 'Физ. лицо',
      onClick: () => {},
    },
  ];
  return (
    <PageLayout className='h-dvh bg-white' image={account_bg.src}>
      <header className='flex px-inline-main fixed top-0 left-0 justify-between items-center w-full h-40'>
        <Logo
          onClick={() => {
            router.push('/');
          }}
        />
        <Lks className='size-24' />
        <Settings />
      </header>
      <div className='flex flex-col justify-center items-center w-full h-full px-inline-main'>
        <div className='flex justify-center  w-80 h-30'>
          <p className='border-b-2 h-12 text-2xl font-bold text-black'>Александр Старкин</p>
        </div>
        <DropDown defaultValue={'Юр. лицо'} data={data} />
      </div>
    </PageLayout>
  );
}

import {PageLayout} from '../../../layouts/PageLayout';
import {PrimaryButton} from '../../../components/PrimaryButton';
export default function Login() {
  return (
    <PageLayout className='h-dvh'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='flex flex-col gap-4 w-80 h-40 p-12 rounded-2xl'>
          <div className='flex gap-2 w-full'>
            <label htmlFor='email' className='w-24'>
              email
            </label>
            <input type='email' id='email' />
          </div>
          <div className='flex gap-2 w-full'>
            <label htmlFor='password' className='w-24'>
              password
            </label>
            <input type='password' id='password' />
          </div>
          <div className='flex items-center'>
            <input
              //   checked
              defaultChecked
              id='checked-checkbox'
              type='checkbox'
              value=''
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
            <label
              htmlFor='checked-checkbox'
              className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              У меня есть организация
            </label>
          </div>
          <PrimaryButton>Зарегистрироваться</PrimaryButton>
        </div>
      </div>
    </PageLayout>
  );
}

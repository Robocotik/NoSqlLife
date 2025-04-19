import {PageLayout} from '../../../layouts/PageLayout';
import {PrimaryButton} from '../../../components/PrimaryButton';
import reg_img from '@/assets/img/bg_reg.jpg';
export default function Login() {
  return (
    <PageLayout className='h-dvh my-auto' image={reg_img.src}>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='flex flex-col justify-between items-stretch gap-4 w-96 h-72 p-12 text-black rounded-2xl border-2 border-white bg-white/50'>
          <div className='flex flex-col w-full h-full justify-start gap-4 items-start'>
            <div className='flex gap-2 w-full '>
              <label htmlFor='email' className='w-24'>
                email
              </label>
              <input
                type='email'
                placeholder='email'
                id='email'
                className='ps-2 rounded-md border border-white/40'
              />
            </div>
            <div className='flex gap-2 w-full'>
              <label htmlFor='password' className='w-24'>
                password
              </label>
              <input
                placeholder='password'
                type='password'
                id='password'
                className='ps-2 rounded-md border border-white/40'
              />
            </div>
            <div className='flex items-center mt-4'>
              <input
                defaultChecked
                id='checked-checkbox'
                type='checkbox'
                value=''
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label htmlFor='checked-checkbox' className='ms-2 text-sm font-medium text-gray-900 '>
                У меня есть организация
              </label>
            </div>
          </div>

          <PrimaryButton className='bg-main_green'>Зарегистрироваться</PrimaryButton>
        </div>
      </div>
    </PageLayout>
  );
}

'use client';
import {PageLayout} from '@/layouts/PageLayout';
import {PrimaryButton} from '@/components/PrimaryButton';
import reg_img from '@/assets/img/bg_reg.jpg';
import * as yup from 'yup'; // Импортируем yup
import {useFormik} from 'formik'; // Импортируем useFormik из formik
const validationSchema = yup.object().shape({
  email: yup.string().email('Неверный формат email').required('Email обязателен'),
  password: yup
    .string()
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .required('Пароль обязателен'),
});
interface FormValues {
  email: string;
  password: string;
  organization: boolean;
}

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      organization: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormValues) => {
      console.log(values);
    },
  });
  return (
    <PageLayout className='h-dvh my-auto' image={reg_img.src}>
      <div className='w-full h-full flex justify-center items-center'>
        <form
          onSubmit={formik.handleSubmit}
          className='flex flex-col justify-between items-stretch gap-4 w-96 h-72 p-12 text-black rounded-2xl border-3 shadow-2xl border-main_green/80 bg-white/50'>
          <div className='flex flex-col w-full h-full justify-start gap-4 items-start'>
            <div className='flex flex-col gap-2 w-full'>
              <div className='flex gap-2 w-full'>
                <label htmlFor='email' className='w-24'>
                  email
                </label>
                <input
                  type='email'
                  id='email'
                  className='ps-2 rounded-md border border-white/40'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>

              {formik.touched.email && formik.errors.email ? (
                <div className='text-red-500'>{formik.errors.email}</div>
              ) : null}
            </div>

            <div className='flex flex-col gap-2 w-full'>
              <div className='flex gap-2 w-full'>
                <label htmlFor='password' className='w-24'>
                  password
                </label>
                <input
                  type='password'
                  id='password'
                  className='ps-2 rounded-md border border-white/40'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>

              {formik.touched.password && formik.errors.password ? (
                <div className='text-red-500'>{formik.errors.password}</div>
              ) : null}
            </div>
            <div className='flex items-center mt-4'>
              <input
                id='organization'
                type='checkbox'
                checked={formik.values.organization}
                onChange={formik.handleChange}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label htmlFor='organization' className='ms-2 text-sm font-medium text-gray-900'>
                У меня есть организация
              </label>
            </div>
          </div>
          <PrimaryButton className='bg-main_green ' type='submit'>
            Зарегистрироваться
          </PrimaryButton>
        </form>
      </div>
    </PageLayout>
  );
}

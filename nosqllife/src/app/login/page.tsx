'use client';
import {PageLayout} from '@/layouts/PageLayout';
import {PrimaryButton} from '@/components/PrimaryButton';
import reg_img from '@/assets/img/bg_reg.jpg';
import * as yup from 'yup'; // Импортируем yup
import {useFormik} from 'formik'; // Импортируем useFormik из formik
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      organization: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormValues) => {
      router.push('/');
    },
  });
  return (
    <PageLayout className='h-dvh my-auto' image={reg_img.src}>
      <div className='w-full h-full flex justify-center items-center'>
        <form
          onSubmit={formik.handleSubmit}
          className='flex flex-col justify-between items-stretch gap-4 w-96 min-h-60 p-12 text-black rounded-2xl border-3 shadow-2xl border-main_green/80 bg-white/50'>
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
          </div>
          <div className='flex flex-col gap-8 items-center w-full justify-center '>
            <PrimaryButton  className='bg-main_green w-full' type='submit'>
              Войти
            </PrimaryButton>
            <a href='#'>У меня проблемы со входом</a>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}

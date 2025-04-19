import type {FC} from 'react';
import type Props from './HeaderLayout.props';

export const HeaderLayout: FC<Props> = ({head, lhs, rhs, trailer, className, ...props}) => {
  return (
    <header
      className={`${className} bg-white/5  text-white flex w-full h-28 py-2  items-center px-inline-main justify-between fixed z-20`}
      {...props}>
      <div className='h-1/2 w-full border-t-1 border-white/70 absolute bottom-0 left-0 -z-20' />
      {head}
      {lhs}
      {rhs}
      {trailer}
    </header>
  );
};

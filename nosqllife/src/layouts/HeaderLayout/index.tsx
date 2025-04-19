import type {FC} from 'react';
import type Props from './HeaderLayout.props';

export const HeaderLayout: FC<Props> = ({head, lhs, rhs, trailer, className, ...props}) => {
  return (
    <header
      className={`${className} bg-main_green text-white flex w-full h-20 py-2  items-center px-inline-main justify-between`}
      {...props}>
      {head}
      {lhs}
      {rhs}
      {trailer}
    </header>
  );
};

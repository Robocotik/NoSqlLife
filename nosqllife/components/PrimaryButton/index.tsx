import type {FC} from 'react';
import type Props from './PrimaryButton.props';

export const PrimaryButton: FC<Props> = ({children, className}) => {
  return (
    <button
      className={`${className} cursor-pointer rounded-2xl w-full py-1 flex items-center justify-center`}>
      {children}
    </button>
  );
};

import type {FC} from 'react';
import type Props from './PrimaryButton.props';

export const PrimaryButton: FC<Props> = ({children, className}) => {
  return <button className={`${className} rounded-2xl w-full h-12 flex items-center justify-center`}>{children}</button>;
};

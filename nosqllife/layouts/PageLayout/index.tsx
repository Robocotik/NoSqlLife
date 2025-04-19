import type {FC} from 'react';
import type Props from './PageLayout.props';

export const PageLayout: FC<Props> = ({children, className}) => {
  return <div className={`w-dvh min-h-dvh px-inline-main mx-auto ${className}`}>{children}</div>;
};

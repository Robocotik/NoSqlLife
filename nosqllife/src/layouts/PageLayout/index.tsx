import type {FC} from 'react';
import type Props from './PageLayout.props';

export const PageLayout: FC<Props> = ({children, className, image}) => {
  return (
    <div className={`w-full min-h-dvh px-inline-main mx-auto ${className}`}>
      {image && (
        <img
          src={image}
          alt='Page background'
          className='absolute inset-0 w-full h-full object-cover z-0 object-center filter blur-md'
        />
      )}
      <div className='relative z-10 w-full h-full'>{children}</div>
    </div>
  );
};

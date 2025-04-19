import type { FC } from 'react';
import type Props from './PageLayout.props';

export const PageLayout: FC<Props> = ({children}) =>{
    return(
        <div className='w-dvh min-h-dvh px-20'>
            {children}
        </div>
    )
}
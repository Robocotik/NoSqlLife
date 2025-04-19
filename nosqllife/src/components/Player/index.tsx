import type {FC} from 'react';
import type Props from './Player.props';

export const Player: FC<Props> = ({videoUrl, className}) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <iframe
        width='560'
        height='315'
        src={videoUrl}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
};

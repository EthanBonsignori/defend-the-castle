import React from 'react';
import {
  GAME_WIDTH,
  GAME_HEIGHT,
} from '../utils/constants';

const Sky = () => {
  const skyStle = {
    fill: '#30abef',
  };
  return (
    <rect
      style={skyStle}
      x={GAME_WIDTH / -2}
      y={100 - GAME_HEIGHT}
      width={GAME_WIDTH}
      height={GAME_HEIGHT}
    />
  );
};

export default Sky;

import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import CannanBall from './CannonBall';

const Canvas = props => {
  const viewBox = [window.innerWidth / -2, 200 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    <svg
      id='defend-the-castle-canvas'
      preserveAspectRatio='xMaxYMax'
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <Sky />
      <Ground />
      <CannonPipe rotation={props.angle} />
      <CannonBase />
      <CannanBall position={{ x: 0, y: -100 }}/>
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;

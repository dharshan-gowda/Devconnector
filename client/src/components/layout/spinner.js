import React, { Fragment } from 'react';
import spinner from '../../gif/25.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '75px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);

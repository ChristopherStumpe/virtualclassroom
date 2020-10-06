import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function StudSplashScreen({ name }) {
  return (
    <div>
      <h1>
        Hello
        {' '}
        {name}
      </h1>
    </div>
  );
}
StudSplashScreen.propTypes = {
  name: PropTypes.string,
};

StudSplashScreen.defaultProps = {
  name: '',
};

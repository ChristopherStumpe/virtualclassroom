import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function TeachSplashScreen({ name }) {
  return (
    <div>
      <h1>
        Hello Mr. or Mrs.
        {' '}
        {name}
      </h1>
    </div>
  );
}

TeachSplashScreen.propTypes = {
  name: PropTypes.string,
};

TeachSplashScreen.defaultProps = {
  name: '',
};

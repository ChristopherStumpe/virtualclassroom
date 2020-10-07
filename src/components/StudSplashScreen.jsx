import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AnnouncementList from './allUsers/AnnouncementList';
import AssignmentList from './allUsers/AssignmentList';

export default function StudSplashScreen({ name }) {
  return (
    <div>
      <h1>
        Hello
        {' '}
        {name}
      </h1>
      <AnnouncementList />
      <AssignmentList />
    </div>
  );
}
StudSplashScreen.propTypes = {
  name: PropTypes.string,
};

StudSplashScreen.defaultProps = {
  name: '',
};

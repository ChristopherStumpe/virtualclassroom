import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AnnouncementList from './allUsers/AnnouncementList';
import AssignmentList from './allUsers/AssignmentList';
import ClassList from './allUsers/ClassList';

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
      <ClassList />
    </div>
  );
}
StudSplashScreen.propTypes = {
  name: PropTypes.string,
};

StudSplashScreen.defaultProps = {
  name: '',
};

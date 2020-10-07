import React from 'react';
import PropTypes from 'prop-types';
import AnnouncementList from './allUsers/AnnouncementList';
import AssignmentList from './allUsers/AssignmentList';
import ClassList from './allUsers/ClassList';
import StudentList from './teacher/StudentList';

export default function TeachSplashScreen({ name, user }) {
  return (
    <div>
      <h1>
        Hello Mr. or Mrs.
        {' '}
        {name}
      </h1>
      <AnnouncementList user={user} />
      <AssignmentList user={user} />
      <ClassList user={user} />
      <StudentList />
    </div>
  );
}

TeachSplashScreen.propTypes = {
  name: PropTypes.string,
  user: PropTypes.string,
};

TeachSplashScreen.defaultProps = {
  name: '',
  user: '',
};

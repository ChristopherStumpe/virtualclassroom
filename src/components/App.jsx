import React, { useState, useEffect } from 'react';
import TeachSplashScreen from './TeachSplashScreen';
import StudSplashScreen from './StudSplashScreen';

export default function App() {
  const [user, setUser] = useState(null);
  const viewRender = (e) => {
    if (e.target.name === 'teacher') {
      setUser(e.target.name);
      console.log(e.target.name);
    } else if (e.target.name === 'student') {
      setUser(e.target.name);
      console.log(e.target.name);
    } else if (e.target.name === 'logout') {
      setUser(null);
      console.log(e.target.name);
    }
  };
  // on login click
  // direct users to a page based off of the type of user they are
  // check if they are a teacher or student
  // if teacher render teach splash screen
  // if student render student splash screen
  // redirect to log in and alert you are not a authorized _(fill in role)_
  // currently state changes to is logged in and is logged out on click
  return (
    <div>
      <button
        name="teacher"
        type="button"
        onClick={viewRender}
      >
        teacher login
      </button>
      <button
        name="student"
        type="button"
        onClick={viewRender}
      >
        student login
      </button>
      <button
        name="logout"
        type="button"
        onClick={viewRender}
      >
        logout
      </button>
      <div>
        {user === 'teacher' && <TeachSplashScreen />}
        {user === 'student' && <StudSplashScreen />}
      </div>
    </div>
  );
}

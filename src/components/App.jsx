import React, { useState, useEffect, useRef } from 'react';
import TeachSplashScreen from './TeachSplashScreen';
import StudSplashScreen from './StudSplashScreen';

// on login click
// direct users to a page based off of the type of user they are
// check if they are a teacher or student
// if teacher render teach splash screen
// if student render student splash screen
// redirect to log in and alert you are not a authorized _(fill in role)_
// currently state changes to is logged in and is logged out on click

export default function App() {
  const [view, setView] = useState('logout');
  const [data, setData] = useState(null);

  const grabData = () => new Promise((resolve) => {
    console.log('grabData');
    const result = {
      user: 'teacher',
      id: 123,
      fullName: 'John Doe',
      idSchool: 1,
      email: 'johndone@fake.news',
      created_at: new Date(),
    };
    resolve(result);
  });

  const handleLogInClick = () => {
    console.log('login');
    const fetchData = async () => {
      const obj = await grabData();
      setData(obj);
      setView(obj.user);
    };
    fetchData();
  };

  useEffect(() => {});

  return (
    <div>
      {view === 'logout' && (
      <button
        name="login"
        type="button"
        onClick={handleLogInClick}
      >
        login
      </button>
      )}
      <button
        name="logout"
        type="button"
        onClick={() => setView('logout')}
      >
        logout
      </button>
      <div>
        {view === 'teacher' && <TeachSplashScreen name={data.fullName} />}
        {view === 'student' && <StudSplashScreen name={data.fullName} />}
      </div>
    </div>
  );
}

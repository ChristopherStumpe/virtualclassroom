import React, { useState, useEffect, useRef } from 'react';
import TeachSplashScreen from './TeachSplashScreen';
import StudSplashScreen from './StudSplashScreen';

export default function App() {
  const [view, setView] = useState('');
  const [data, setData] = useState(null);

  const grabData = () => new Promise((resolve) => {
    console.log('grabData');
    const result = {
      user: 'student',
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
        name="login"
        type="button"
        onClick={handleLogInClick}
      >
        login
      </button>
      <button
        name="logout"
        type="button"
        onClick={() => setView('logout')}
      >
        logout
      </button>
      <div>
        {view === 'teacher' && <TeachSplashScreen />}
        {view === 'student' && <StudSplashScreen student={data} />}
      </div>
    </div>
  );
}

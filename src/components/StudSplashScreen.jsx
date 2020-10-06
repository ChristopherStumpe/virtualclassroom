import React, { useState, useEffect } from 'react';

export default function StudSplashScreen(props) {
  const { student } = props;
  const { fullName } = student;

  return (
    <div>
      <h1>
        Hello
        {' '}
        {fullName}
      </h1>
    </div>
  );
}

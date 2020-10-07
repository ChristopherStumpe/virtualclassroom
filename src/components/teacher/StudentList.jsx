import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import AddStudent from './AddStudent';

export default function StudentList() {
  const [list, setList] = useState([]);
  const data = [
    {
      fullName: 'Jane Doe',
    },
    {
      fullName: 'Doe Jane',
    },
  ];
  const grabData = () => data;

  const fetchData = async () => {
    const result = await grabData();
    setList(result);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <AddStudent />
      {list.length > 0
        && (
        <ul>
          All Students
          {list.map((obj, key1) => (
            <li key={key1}>
              {_.map(obj, (item, key2) => <p key={key2}>{item}</p>)}
            </li>
          ))}
        </ul>
        )}
    </div>
  );
}

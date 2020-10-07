import React, { useState, useEffect } from 'react';
import _ from 'lodash';

export default function ClassList() {
  const [list, setList] = useState([]);
  const data = [
    {
      id: 1,
      class_name: 'math',
      period: 1,
      start_time: '10:00 am',
      end_time: '11:00 am',
      id_school: 1,
      id_teacher: 1,
      created_at: '10/7/2020',
    },
    {
      id: 2,
      class_name: 'english',
      period: 2,
      start_time: '10:00 am',
      end_time: '11:00 am',
      id_school: 1,
      id_teacher: 1,
      created_at: '10/7/2020',
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
      {list.length > 0
        && (
        <ul>
          All class
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

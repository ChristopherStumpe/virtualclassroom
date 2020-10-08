import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import _ from 'lodash';

export default function AddStudent() {
  const [showForm, setShowForm] = useState(false);
  const [period, setPeriod] = useState('');
  const [email, setEmail] = useState('');
  const [classNames, setClassNames] = useState([]);
  const [endTime, setEndTime] = useState('');
  const [selectedNames, setSelectedNames] = useState([]);

  const grabClassList = () => new Promise((resolve) => resolve(['math', 'science']));
  const fetchClassList = async () => {
    const arrOfNames = await grabClassList();
    setClassNames(arrOfNames);
  };

  useEffect(() => {
    fetchClassList();
  }, []);

  const addStudent = () => {
    const date = new Date();
    // post request to server to add class
    const formSubmit = {
      period,
      email,
      classNames,
      endTime,
      createdAt: date,
    };
    // console.log(formSubmit);
    alert('submitted');
    setShowForm(false);
  };

  return (
    <div>
      { showForm
        ? (
          <form onSubmit={addStudent}>
            <h2>Add Student</h2>
            <label>
              period:
              <input
                name="period"
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  const clean = DOMPurify.sanitize(e.target.value);
                  setPeriod(clean);
                }}
              />
            </label>
            <br />
            <label>
              email:
              <input
                name="email"
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  const clean = DOMPurify.sanitize(e.target.value);
                  setEmail(clean);
                }}
              />
            </label>
            <br/>
            <label>
              Class Names:
              <span>{selectedNames}</span>
              <select multiple={true} value={selectedNames} onChange={() => {setSelectedNames()}}>
                { _.map(classNames, (name, index) => <option key={index} value={name}>{name}</option>) }
              </select>
            </label>
            <br />
            <label>
              Period:
              <input
                name="period"
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  const clean = DOMPurify.sanitize(e.target.value);
                  setEndTime(clean);
                }}
              />
            </label>
            <br/>
            <button type="submit">Submit</button>
          </form>
        )
        : (<button type="button" onClick={() => setShowForm(true)}>Add Student</button>)}
    </div>
  );
}

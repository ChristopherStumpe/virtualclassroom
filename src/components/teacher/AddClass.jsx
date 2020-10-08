import React, { useState } from 'react';
import DOMPurify from 'dompurify';

export default function AddClass() {
  const [showForm, setShowForm] = useState(false);
  const [className, setClassName] = useState('');
  const [period, setPeriod] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const addClass = () => {
    const date = new Date();
    // post request to server to add class
    const formSubmit = {
      className,
      period,
      startTime,
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
          <form onSubmit={addClass}>
            <label>
              className:
              <input
                name="className"
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  const clean = DOMPurify.sanitize(e.target.value);
                  setClassName(clean);
                }}
              />
            </label>
            <br />
            <label>
              period:
              <textarea
                name="period"
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  const clean = DOMPurify.sanitize(e.target.value);
                  setPeriod(clean);
                }}
              />
            </label>
            <label>
              Release Time:
              <input
                name="startTime"
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  const clean = DOMPurify.sanitize(e.target.value);
                  setStartTime(clean);
                }}
              />
            </label>
            <br />
            <label>
              Expiration Date:
              <input
                name="className"
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  const clean = DOMPurify.sanitize(e.target.value);
                  setEndTime(clean);
                }}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        )
        : (<button type="button" onClick={() => setShowForm(true)}>Add class</button>)}
    </div>
  );
}

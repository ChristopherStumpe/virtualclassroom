import React, { useState } from 'react';
import DOMPurify from 'dompurify';

export default function AddAnnouncement() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseTime, setReleaseTime] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const addAnnouncement = () => {
    const date = new Date();
    // post request to server to add announcement
    const formSubmit = {
      title,
      description,
      releaseTime,
      expirationDate,
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
          <form onSubmit={addAnnouncement}>
            <label>
              Title:
              <input
                name="title"
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  const clean = DOMPurify.sanitize(e.target.value);
                  setTitle(clean);
                }}
              />
            </label>
            <br />
            <label>
              Description:
              <textarea
                name="description"
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  const clean = DOMPurify.sanitize(e.target.value);
                  setDescription(clean);
                }}
              />
            </label>
            <label>
              Release Time:
              <input
                name="releaseTime"
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  const clean = DOMPurify.sanitize(e.target.value);
                  setReleaseTime(clean);
                }}
              />
            </label>
            <br />
            <label>
              Expiration Date:
              <input
                name="title"
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  const clean = DOMPurify.sanitize(e.target.value);
                  setExpirationDate(clean);
                }}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        )
        : (<button type="button" onClick={() => setShowForm(true)}>Add Announcement</button>)}
    </div>
  );
}

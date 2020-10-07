import React, { useState } from 'react';
import DOMPurify from 'dompurify';

export default function AddAnnouncement() {
  const [announcement, setAnnouncement] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseTime, setReleaseTime] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const addAnnouncement = () => {
    // post request to server to add announcement
    console.log({
      title,
      description,
      releaseTime,
      expirationDate,
      createdAt: Date.now(),
    });
    alert('submitted');
    setAnnouncement('');
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
          </form>
        )
        : (<button type="button" onClick={() => setShowForm(true)}>Add Announcement</button>)}
    </div>
  );
}

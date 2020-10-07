import React, { useState } from 'react';
import DOMPurify from 'dompurify';

export default function SubmitAssignment() {
  const [assignment, setAssignment] = useState('');
  const [showForm, setShowForm] = useState(false);

  const submitAssignment = () => {
    // post request to server to add assignment
    console.log(assignment);
    alert('submitted');
    setAssignment('');
    setShowForm(false);
  };

  return (
    <div>
      { showForm
        ? (
          <form onSubmit={submitAssignment}>
            <label>
              Assignment:
              <input
                type="test"
                placeholder="Google Drive Link"
                value={assignment}
                onChange={(e) => {
                  e.preventDefault();
                  const clean = DOMPurify.sanitize(e.target.value);
                  setAssignment(clean);
                }}
              />
            </label>
            <input
              type="submit"
              value="Submit"
            />
          </form>
        )
        : (<button type="button" onClick={() => setShowForm(true)}>Submit Assignment</button>)}
    </div>
  );
}

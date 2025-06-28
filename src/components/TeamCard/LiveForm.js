import React, { useState } from 'react';
import './LiveForm.css';

function LiveForm() {
  const [name, setName] = useState('');

  return (
    <>
      <tr><tr></tr></tr><p className="char-count"><b>LIVE FORM</b></p>
      <textarea
        className="auto-expand"
        placeholder="Type something..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        rows={1}
      />
      <p className="char-count">{name.length} / 100 characters</p>
      <p className="char-count">Hello, <strong>{name || '...'}</strong></p>
    </>
  );
}

export default LiveForm;

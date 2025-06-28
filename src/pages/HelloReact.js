import React from 'react';
import myPhoto from '../my-photo.jpg'; // if inside src/

function HelloReact() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>Hello React! 👋</h1>
      <h2>I’m Srija S</h2>
      <img
        src={myPhoto}
        alt="Srija"
        width="200"
        style={{ borderRadius: '10px', marginTop: '20px' }}
      />
    </div>
  );
}

export default HelloReact;

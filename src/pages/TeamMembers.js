import React from 'react';
import TeamCard from '../components/TeamCard';
import myPhoto from '../my-photo.jpg'; // if inside src/

function TeamMembers() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>🚀 Our Team</h1>
      <div style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '30px'
      }}>
        <TeamCard
          name="Srija S"
          role="Frontend Developer"
          photo={myPhoto}
        >
          React • HTML • CSS
        </TeamCard>

        <TeamCard
          name="Varshni"
          role="Backend Developer"
          photo="https://i.pravatar.cc/150?img=15"
        >
          Node.js • MongoDB
        </TeamCard>

        <TeamCard
          name="Ankit"
          role="UX Designer"
          photo="https://i.pravatar.cc/150?img=16"
        >
          Figma • Wireframing
        </TeamCard>
      </div>
    </div>
  );
}

export default TeamMembers;

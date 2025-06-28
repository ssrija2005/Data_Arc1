import React from 'react';
import './TeamCard.css';

function TeamCard({ name, role, photo, children }) {
  return (
    <div className="team-card">
      <img src={photo} alt={name} className="team-photo" />
      <h3>{name}</h3>
      <p className="team-role">{role}</p>
      <div className="team-extra">{children}</div>
    </div>
  );
}

export default TeamCard;

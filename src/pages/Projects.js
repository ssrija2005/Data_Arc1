// src/pages/Projects.js
import React, { useEffect, useState } from 'react';
//import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="section">
      <h2>🚀 My Projects</h2>
      {loading ? <div className="spinner"></div> : (
        <div className="project-list">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.body}</p>
              <p><strong>Stack:</strong> React, API</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;

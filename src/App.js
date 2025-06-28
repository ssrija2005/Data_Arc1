import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HelloReact from './pages/HelloReact';
import TeamMembers from './pages/TeamMembers';
import LikeButton from './components/TeamCard/LikeButton';
import LiveForm from './components/TeamCard/LiveForm';
import TodoList from './components/TeamCard/TodoList';
import UserList from './components/TeamCard/UserList';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="nav">
  <ul className="nav-menu">
    <li><Link to="/hello-react">Hello React</Link></li>
    <li><Link to="/team-cards">Team Cards</Link></li>
    <li><Link to="/day3">Day 3</Link></li>
    <li><Link to="/todo">To-Do List</Link></li>
    <li><Link to="/userlist">User List</Link></li>
    <li><Link to="/portfolio">Portfolio</Link></li>

  </ul>
</div>


      <Routes>
        <Route path="/hello-react" element={<HelloReact />} />
        <Route path="/team-cards" element={<TeamMembers />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/portfolio" element={
  <div className="section">
    <h1>🌐 Portfolio Home</h1>
    <Home />
    <About />
    <Projects />
    <Contact />
  </div>
} />

<Route path="/day3" element={
           <div className="day3-container"><center>
    <h1 className="day3-heading">🌟 Day 3: useState + Events</h1><tr></tr>
    <tr></tr>
    <LikeButton />
    <LiveForm />
    </center>
  </div>
  
} />

      
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="/">A - Z</a></li>
        <li><a href="/">Category 1</a></li>
        <li><a href="/">Category 2</a></li>
        <li><a href="/">Category 3</a></li>
        <li><a href="/">Click to Continue...</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;

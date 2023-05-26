import React from 'react';
import "./simple-sidebar.css"

const Sidebar = ({ options }) => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        {options.map((option, index) => (
          <li key={index} className="sidebar-menu-item">
            <a href={option.link}>
              <span className="sidebar-menu-icon">{option.icon}</span>
              {option.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

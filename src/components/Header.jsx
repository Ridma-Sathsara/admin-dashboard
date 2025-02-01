import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="search-container">
        <div className="search-wrapper">
          <Search className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>

      <div className="right-container">
        <button className="notification-btn">
          <Bell className="notification-icon" />
          <span className="notification-badge"></span>
        </button>

        <div className="user-info">
          <div className="user-text">
            <p className="user-name">John Doe</p>
            <p className="user-role">Admin</p>
          </div>
          <div className="user-avatar">
            <User className="user-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

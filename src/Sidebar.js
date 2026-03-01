import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import './Sidebar.css';

const Sidebar = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  console.log(showSidebar);

  return (
    <div className="layout">
      {showSidebar ? (
        <button className="sidebar open" onClick={toggleSidebar}>Open Sidebar</button>
      ) : (
        <button className="sidebar closed" onClick={toggleSidebar}><Bars3Icon/>Close Sidebar</button>
      )}
    </div>
  )
};

export default Sidebar;
import { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import './Sidebar.css';

const Sidebar = () => {

  const [theme, setTheme] = useState(true);
  const className = `layout ${theme}`;

  const toggle = () => {
    setTheme(!theme);
  };

  console.log(theme);

  return (
    <div className={className}>
      <div className="toggle">
        {theme ? (
          <MoonIcon className="icon moon" value="false" onClick={toggle} />  
        ):
          <SunIcon className="icon sun" value="true" onClick={toggle}/>
          }
      </div>
     </div>
  )};

export default Sidebar;
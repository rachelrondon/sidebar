import { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import './Toggle.css';

const Toggle = () => {

  const [toggled, setToggled] = useState(false);
  const className = `layout ${toggled}`;

  const toggle = () => {
    setToggled(!toggled);
  };

return (
  <div className={className}>
    <div className="toggle">
      {toggled ? (
        <SunIcon className="icon" onClick={toggle} />
      ) :
        <MoonIcon className="icon" onClick={toggle} />
      }
    </div>
  </div>
)};


export default Toggle;
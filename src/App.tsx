import { useState } from 'react'
import './App.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="lane"></div>
        <div className="lane"></div>
        <div className="lane"></div>
      </div>
    </div>
  );
};


export default App

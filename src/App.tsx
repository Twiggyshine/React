import { useState } from 'react'
import './App.css'
import classnames from 'classnames';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const classNames = classnames('burger-menu', {
    'open': isOpen,
  });

  return (
    <div>
      <div className={classNames} onClick={toggleMenu}>
        <div className="lane"></div>
        <div className="lane"></div>
        <div className="lane"></div>
      </div>
    </div>
  );
};


export default App

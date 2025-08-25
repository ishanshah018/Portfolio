import { useEffect, useState } from 'react';
import './Preloader.css';

function Preloader() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 1200); // Show for 1.2s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader${fade ? ' preloader--fade' : ''}`}>
      <div className="preloader__spinner">
        <span className="preloader__dot"></span>
        <span className="preloader__dot"></span>
        <span className="preloader__dot"></span>
      </div>
      <div className="preloader__text">Loading Portfolio...</div>
    </div>
  );
}

export default Preloader;

import './App.css'
import Biography from './Components/Biography/Biography'
import { useState, useEffect } from 'react';
import Preloader from './Components/Preloader/Preloader';
import Contact from './Components/Contact/Contact'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Portfolio from './Components/Portfolio/Portfoio'
import Skills from './Components/Skills/Skills'
import { Analytics } from "@vercel/analytics/react";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <Nav/>
      <div className="Header_wrapper">
        <Header/>
        <Biography/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Analytics />
      </div>
    </>
  );
}

export default App

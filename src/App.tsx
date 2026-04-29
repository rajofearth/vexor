import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './views/LandingPage';
import ManifestoPage from './views/ManifestoPage';

export default function App() {
  const [route, setRoute] = useState('home');

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-orange-500 selection:text-black flex flex-col">
      
      {/* Global CSS for Reverted Custom Scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000000;
          border-left: 1px solid rgba(255, 255, 255, 0.05);
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.8); /* Orange-500 */
        }
      `}} />

      <Navbar route={route} setRoute={setRoute} />

      <div className="flex-1">
        {route === 'home' && <LandingPage setRoute={setRoute} />}
        {route === 'manifesto' && <ManifestoPage setRoute={setRoute} />}
      </div>

      <Footer setRoute={setRoute} />
    </div>
  );
}

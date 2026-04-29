import React from 'react';

interface NavbarProps {
  route: string;
  setRoute: (route: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ route, setRoute }) => (
  <nav className="flex justify-between items-center px-8 md:px-16 py-10">
    <div 
      onClick={() => { window.scrollTo({top: 0}); setRoute('home'); }} 
      className="font-bold tracking-tighter text-2xl cursor-pointer hover:text-orange-500 transition-colors text-white"
    >
      VEXOR
    </div>
    <div className="flex gap-8 items-center text-sm font-medium">
      <button 
        onClick={() => { window.scrollTo({top: 0}); setRoute('manifesto'); }}
        className={`hidden sm:block transition-colors ${route === 'manifesto' ? 'text-white' : 'text-white/50 hover:text-white'}`}
      >
        Manifesto
      </button>
      <a href="#" className="hidden sm:block text-white/50 hover:text-white transition-colors">Documentation</a>
      <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">Enter Workspace</a>
    </div>
  </nav>
);

export default Navbar;

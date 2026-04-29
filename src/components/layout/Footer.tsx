import React from 'react';

interface FooterProps {
  setRoute: (route: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setRoute }) => (
  <footer className="px-8 md:px-16 py-12 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-white/30 border-t border-white/10 mt-auto">
    <div className="mb-4 md:mb-0">© {new Date().getFullYear()} VEXOR Platform</div>
    <div className="flex gap-8">
      <button onClick={() => { window.scrollTo({top: 0}); setRoute('manifesto'); }} className="hover:text-white transition-colors">Manifesto</button>
      <a href="#" className="hover:text-white transition-colors">Twitter</a>
      <a href="#" className="hover:text-white transition-colors">GitHub</a>
    </div>
  </footer>
);

export default Footer;

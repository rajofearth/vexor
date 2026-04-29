import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, primary, className = '', onClick }) => (
  <button 
    onClick={onClick}
    className={`
      px-10 py-5 text-sm font-medium tracking-wide transition-colors
      ${primary 
        ? 'bg-orange-500 text-black hover:bg-orange-400' 
        : 'text-white/50 hover:text-white border border-white/10 hover:border-white/30 bg-white/[0.02]'
      }
      ${className}
    `}
  >
    {children}
  </button>
);

export default Button;

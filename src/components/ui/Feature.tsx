import React from 'react';

interface FeatureProps {
  number: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ number, title, description }) => (
  <div className="flex flex-col">
    <span className="text-white/20 font-mono text-sm mb-6">{number}</span>
    <h3 className="text-2xl font-medium text-white tracking-tight mb-4">{title}</h3>
    <p className="text-white/50 text-base leading-relaxed max-w-sm">{description}</p>
  </div>
);

export default Feature;

import React from 'react';

interface RoleCardProps {
  role: string;
  tasks: string[];
}

const RoleCard: React.FC<RoleCardProps> = ({ role, tasks }) => (
  <div className="border-t border-white/10 pt-6">
    <div className="text-orange-500 font-mono text-xs uppercase tracking-widest mb-4">{role}</div>
    <ul className="space-y-3">
      {tasks.map((task, i) => (
        <li key={i} className="text-white/50 text-sm flex gap-3">
          <span className="text-white/20">—</span> {task}
        </li>
      ))}
    </ul>
  </div>
);

export default RoleCard;

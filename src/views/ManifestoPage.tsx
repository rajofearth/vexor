import React from 'react';
import Button from '../components/ui/Button';

interface ManifestoPageProps {
  setRoute: (route: string) => void;
}

const ManifestoPage: React.FC<ManifestoPageProps> = ({ setRoute }) => (
  <main className="px-8 md:px-16 pt-24 pb-48 animate-in fade-in duration-700">
    <div className="max-w-3xl mx-auto">
      <button 
        onClick={() => { window.scrollTo({top: 0}); setRoute('home'); }}
        className="text-white/40 hover:text-white font-mono text-xs uppercase tracking-widest mb-16 flex items-center gap-2 transition-colors"
      >
        <span>←</span> Back to Workspace
      </button>
      <h1 className="text-[3rem] md:text-[5rem] font-medium tracking-tighter leading-[0.9] mb-8">
        The VEXOR Manifesto.
      </h1>
      <p className="text-xl md:text-2xl text-orange-500 font-medium tracking-tight mb-24">
        Your next 10 hires won't be human.
      </p>
      <div className="space-y-16 text-lg md:text-xl text-white/70 leading-relaxed font-light tracking-tight">
        
        <section>
          <h2 className="text-2xl font-medium text-white mb-6">1. The Headcount Limit</h2>
          <p>
            Teams have always needed people to execute the groundwork—junior engineers, interns, coordinators, analysts. But scaling by headcount is broken. People are expensive, slow to onboard, prone to context loss, and hard-capped at 40 hours a week. We have reached the physical limit of human operational scale.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-white mb-6">2. The Supervision Tax</h2>
          <p className="mb-6">
            Current AI tools function as copilots, not delegates. You prompt them, review their outputs, fix their mistakes, and approve their tool calls. They don't save you time; they just change the nature of your work from writing to babysitting.
          </p>
          <p>
            The cognitive overhead of managing an AI copilot frequently exceeds the cost of doing the work manually. There is no model for "assign and walk away." Until now.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-white mb-6">3. The Accountability Void</h2>
          <p className="mb-6">
            When a human makes a mistake, you know who did it and why. When an autonomous agent files a bad PR, sends a flawed document to a client, or drops a database table, who is responsible? 
          </p>
          <p>
            Current agentic tools have no identity binding, no audit trail, and no chain of custody. In any enterprise or regulated context, this is a hard blocker. Accountability is not an optional feature; it is the prerequisite for autonomy.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-white mb-6">4. The VEXOR Standard</h2>
          <p className="mb-6">
            VEXOR is not a wrapper around a coding model. It is a full-stack platform that ships with its own task management system. Workspaces, projects, issues, statuses—built from the ground up to treat agents as first-class team members alongside humans.
          </p>
          <ul className="list-none space-y-4 pl-0">
            <li className="flex gap-4"><span className="text-orange-500">—</span> <strong>Assign, Don't Supervise.</strong> They are your digital interns, not your copilots.</li>
            <li className="flex gap-4"><span className="text-orange-500">—</span> <strong>Full-Stack Agency.</strong> They write code, draft DOCX reports, send Slack messages, and make calls.</li>
            <li className="flex gap-4"><span className="text-orange-500">—</span> <strong>Immutable Accountability.</strong> Every single action is hashed and logged on-chain, bound to your cryptographic identity.</li>
          </ul>
        </section>
        <div className="pt-16 border-t border-white/10 mt-24">
          <h2 className="text-3xl font-medium text-white mb-8">Stop managing tools. Start executing.</h2>
          <Button primary onClick={() => { window.scrollTo({top: 0}); setRoute('home'); }}>Enter the Platform</Button>
        </div>
      </div>
    </div>
  </main>
);

export default ManifestoPage;

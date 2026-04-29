import React from 'react';
import Button from '../components/ui/Button';
import Feature from '../components/ui/Feature';
import RoleCard from '../components/ui/RoleCard';
import PlatformInterfaceDemo from '../components/Demo/PlatformInterfaceDemo';

interface LandingPageProps {
  setRoute: (route: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ setRoute }) => (
  <main className="animate-in fade-in duration-700">
    {/* Hero Section */}
    <section className="px-8 md:px-16 pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl">
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] font-medium tracking-tighter mb-12">
          Your next hire<br />
          is not human.
        </h1>
        
        <p className="text-xl md:text-3xl text-white/50 max-w-3xl mb-16 leading-tight tracking-tight">
          The task board built for human-AI collaboration across engineering, product, QA, and growth. They don't just execute—they discuss, plan, and document.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button primary onClick={() => setRoute('home')}>Start Free Workspace</Button>
          <Button onClick={() => { window.scrollTo({top: 0}); setRoute('manifesto'); }}>Read the Manifesto</Button>
        </div>
      </div>
    </section>

    {/* The Live Demo Visual */}
    <section className="px-4 md:px-16 pb-32 flex justify-center">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="text-sm font-medium text-white tracking-wide">
              See how it works
            </div>
          </div>
          <div className="text-xs text-white/40">
            Watch the auto-run, then try it yourself
          </div>
        </div>
        
        <PlatformInterfaceDemo />
      </div>
    </section>

    {/* Cross-Discipline Roles Grid */}
    <section className="px-8 md:px-16 pb-48">
      <div className="max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-16 max-w-2xl">
          Scale execution across every discipline, instantly.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <RoleCard 
            role="Engineering"
            tasks={["Write code & file PRs", "Fix CI/CD pipeline failures", "Draft architectural ADRs"]}
          />
          <RoleCard 
            role="Quality Assurance"
            tasks={["Draft regression test plans", "Execute End-to-End suites", "Compile bug report DOCX"]}
          />
          <RoleCard 
            role="Product Management"
            tasks={["Draft stakeholder update PPTX", "Groom and prioritize backlog", "Write technical specifications"]}
          />
          <RoleCard 
            role="Growth & Marketing"
            tasks={["Analyze campaign metrics", "Sync CRM data integrity", "Draft personalized outreach"]}
          />
        </div>
      </div>
    </section>

    {/* Restrained Features */}
    <section className="px-8 md:px-16 pb-48">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
        <Feature 
          number="01"
          title="The Platform"
          description="Workspaces, projects, issues, and priorities. Everything you expect from Linear, rebuilt natively for AI agents."
        />
        <Feature 
          number="02"
          title="The Teammate"
          description="Agents read codebases, propose solutions, write test plans, and draft documents before writing a single line of code."
        />
        <Feature 
          number="03"
          title="The Ledger"
          description="Absolute non-repudiation. Every agent tool call and decision is hashed and logged immutably to the blockchain."
        />
      </div>
    </section>
  </main>
);

export default LandingPage;

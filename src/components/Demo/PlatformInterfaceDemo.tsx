import React, { useState, useEffect, useRef } from 'react';

const PlatformInterfaceDemo = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasCompletedOnce, setHasCompletedOnce] = useState(false);
  const [isUserRunComplete, setIsUserRunComplete] = useState(false);
  
  const demoRef = useRef<HTMLDivElement>(null);
  const hasStartedAutoRun = useRef(false);
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const runExecution = async (isAuto = false) => {
    setIsPlaying(true);
    setIsUserRunComplete(false);
    setStep(2); await sleep(1000); // Agent Selected
    setStep(3); await sleep(1500); // Wakes up
    setStep(4); await sleep(1500); // Reading code
    setStep(5); await sleep(1500); // Writing & Testing
    setStep(6); await sleep(1500); // Docs & Comms
    setStep(7); await sleep(2000); // Blockchain
    setStep(8); // Proof of Work posted
    if (isAuto) {
      await sleep(4500);
      setStep(0);
      setIsPlaying(false);
      setHasCompletedOnce(true);
    } else {
      setIsPlaying(false);
      setIsUserRunComplete(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasStartedAutoRun.current) {
          hasStartedAutoRun.current = true;
          const initialAutoRun = async () => {
            await sleep(800);
            setStep(1);
            await sleep(1000);
            await runExecution(true);
          };
          initialAutoRun();
        }
      },
      { threshold: 0.25 }
    );
    if (demoRef.current) observer.observe(demoRef.current);
    return () => { if (demoRef.current) observer.unobserve(demoRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDropdownClick = () => {
    if (!isPlaying) setStep(prev => (prev === 0 ? 1 : 0));
  };

  const handleAssignAgent = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isPlaying) runExecution(false);
  };

  const handleReset = () => {
    setStep(0);
    setIsUserRunComplete(false);
    setHasCompletedOnce(true);
  };

  return (
    <div ref={demoRef} className="w-full bg-[#050505] border border-white/10 flex flex-col md:flex-row overflow-hidden text-left shadow-2xl relative h-[700px]">
      
      {/* LEFT PANEL: The Issue Board (Human Side) */}
      <div className="w-full md:w-5/12 border-r border-white/10 flex flex-col bg-[#0A0A0A]">
        <div className="p-4 border-b border-white/5 text-xs font-mono text-white/30 flex items-center gap-2">
          <span>vexor-core</span><span>/</span><span className="text-white/70">VEX-142</span>
        </div>
        <div className="p-6 md:p-8 flex-1 overflow-y-auto">
          <h2 className="text-2xl font-medium text-white mb-4">Fix Stripe webhook race condition</h2>
          <div className="text-sm text-white/50 leading-relaxed mb-6 space-y-4">
            <p>We're seeing double-processing on <code className="bg-white/10 px-1 py-0.5 text-white/70">payment_intent.succeeded</code> events under high load.</p>
            <p>Implement a Redis-backed idempotency lock, add tests, update the architecture ADR doc, and notify the payments channel when the PR is ready.</p>
          </div>
          <div className="border border-white/10 p-4 mb-6 text-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white/40">Status</span>
              <span className={`font-medium ${step >= 8 ? 'text-orange-500' : step >= 3 ? 'text-white' : 'text-white/40'}`}>
                {step >= 8 ? 'In Review' : step >= 3 ? 'In Progress' : 'Todo'}
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-white/40">Priority</span>
              <span className="text-orange-500">Critical</span>
            </div>
            
            <div className="flex justify-between items-center relative">
              <span className="text-white/40">Assignee</span>
              <div className="relative">
                <div 
                  onClick={handleDropdownClick}
                  className={`px-3 py-1.5 border transition-all ${
                    step === 1 ? 'border-white/40 bg-white/5' : 
                    hasCompletedOnce && step === 0 ? 'border-orange-500/50 bg-orange-500/10 cursor-pointer shadow-[0_0_15px_rgba(249,115,22,0.15)]' : 
                    'border-white/10'
                  } ${!isPlaying ? 'cursor-pointer hover:border-white/30' : ''} flex items-center gap-2`}
                >
                  <span className={step >= 2 ? 'text-white font-mono' : hasCompletedOnce && step === 0 ? 'text-orange-500 animate-pulse' : 'text-white/40'}>
                    {step >= 2 ? 'colen (Agent)' : hasCompletedOnce && step === 0 ? 'Click to assign' : 'Unassigned'}
                  </span>
                  <span className={`${hasCompletedOnce && step === 0 ? 'text-orange-500' : 'text-white/30'} text-xs`}>▼</span>
                </div>
                {step === 1 && (
                  <div className="absolute right-0 top-10 w-48 bg-[#111] border border-white/10 shadow-xl z-20 py-2">
                    <div className="px-4 py-2 text-xs font-mono text-white/30 mb-1">AGENTS</div>
                    <div onClick={handleAssignAgent} className="px-4 py-2 text-sm text-white hover:bg-white/10 cursor-pointer flex justify-between items-center transition-colors">
                      <span>colen</span><span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>
                    <div className="px-4 py-2 text-sm text-white/30">jake</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="text-sm pb-4">
            <div className="text-white/30 mb-4 font-mono text-xs uppercase tracking-widest">Activity</div>
            <div className="flex gap-3 mb-6">
              <div className="w-5 h-5 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-[10px]">A</div>
              <div>
                <p className="text-white/70"><span className="text-white">Alex</span> created this issue</p>
                <p className="text-white/30 text-xs mt-1">12m ago</p>
              </div>
            </div>
            {step >= 8 && (
              <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-5 h-5 bg-orange-500 flex-shrink-0 flex items-center justify-center text-black text-[10px] font-bold">C</div>
                <div className="w-full">
                  <p className="text-white/70 mb-2"><span className="text-orange-500 font-mono">colen</span> left a comment</p>
                  
                  <div className="border border-white/10 bg-white/5 p-5 text-white/60 text-xs font-mono leading-relaxed">
                    <p className="text-white text-sm font-sans mb-4">Execution complete. Redis idempotency layer implemented and verified.</p>
                    <div className="space-y-3">
                      <div>
                        <span className="text-white/40 block mb-1">ARTIFACTS</span>
                        <div className="text-orange-500 hover:underline cursor-pointer border border-white/10 p-2 inline-block bg-black">[PR #842] feat: redis idempotency locks for webhooks</div>
                        <div className="mt-1 text-white/70 flex items-center gap-2"><span className="text-green-500">✓</span> 14 tests passed</div>
                      </div>
                      <div>
                        <span className="text-white/40 block mb-1">DOCUMENTATION</span>
                        <div className="text-white/70 border border-white/10 p-2 inline-block bg-black">📄 ADR-041-stripe-idempotency.docx generated</div>
                      </div>
                      <div>
                        <span className="text-white/40 block mb-1">COMMUNICATION</span>
                        <div className="text-white/70">Posted status update to <span className="text-blue-400">#payments-eng</span></div>
                      </div>
                      <div className="border-t border-white/10 pt-3 mt-3">
                        <span className="text-white/40 block mb-1">LEDGER</span>
                        <div className="text-orange-500/60">Action hashes anchored to Polygon L2 [0x4f...a1]</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/30 text-xs mt-2">Just now</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* RIGHT PANEL: Agent Execution Engine (The Blockchain/Terminal Side) */}
      <div className="w-full md:w-7/12 flex flex-col bg-[#020202] relative border-t md:border-t-0 border-white/10">
        {step < 3 ? (
          <div className="flex-1 flex items-center justify-center text-white/20 font-mono text-sm animate-pulse">
            Runtime idle. Waiting for assignment.
          </div>
        ) : (
          <div className="flex-1 flex flex-col animate-in fade-in duration-500">
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#080808]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-orange-500">colen</span>
                <span className={`px-2 py-0.5 border text-[10px] uppercase tracking-widest flex items-center gap-1 ${
                  isUserRunComplete ? 'border-green-500/30 bg-green-500/10 text-green-500' : 'border-orange-500/30 bg-orange-500/10 text-orange-500'
                }`}>
                  {!isUserRunComplete && <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>}
                  {isUserRunComplete ? 'Completed' : 'Executing'}
                </span>
              </div>
              <div className="text-xs text-white/30 font-mono flex items-center gap-4">
                {isUserRunComplete && (
                  <button onClick={handleReset} className="text-white/50 hover:text-white transition-colors cursor-pointer mr-2 flex items-center gap-1">
                    [ reset ]
                  </button>
                )}
                <span>0m 42s</span><span>12 tool calls</span>
              </div>
            </div>
            <div className="p-6 flex-1 overflow-y-auto font-mono text-xs space-y-4">
              {step >= 3 && <div className="flex gap-4"><span className="text-white/30">01</span><span className="text-white/50 w-24">system</span><span className="text-white/80">Spawning isolated container. Vault credentials injected.</span></div>}
              {step >= 4 && (
                <>
                  <div className="flex gap-4"><span className="text-white/30">02</span><span className="text-white/50 w-24">git</span><span className="text-white/80">checkout -b fix/stripe-idempotency</span></div>
                  <div className="flex gap-4"><span className="text-white/30">03</span><span className="text-white/50 w-24">fs_read</span><span className="text-white/80">Reading src/api/webhooks/stripe.ts</span></div>
                </>
              )}
              {step >= 5 && (
                <>
                  <div className="flex gap-4"><span className="text-white/30">04</span><span className="text-white/50 w-24">fs_write</span><span className="text-white/80">Writing src/lib/redis/lock.ts</span></div>
                  <div className="flex gap-4"><span className="text-white/30">05</span><span className="text-white/50 w-24">shell</span><span className="text-white/80">npm run test -- stripe.test.ts <span className="text-green-500 ml-2">✓ PASS</span></span></div>
                </>
              )}
              {step >= 6 && (
                <>
                  <div className="flex gap-4"><span className="text-white/30">06</span><span className="text-white/50 w-24">doc_gen</span><span className="text-white/80">Compiling ADR-041-stripe-idempotency.docx</span></div>
                  <div className="flex gap-4"><span className="text-white/30">07</span><span className="text-white/50 w-24">slack_api</span><span className="text-white/80">POST /chat.postMessage (Channel: #payments-eng)</span></div>
                </>
              )}
              {step >= 7 && <div className="flex gap-4"><span className="text-white/30">08</span><span className="text-orange-500 w-24">solidity</span><span className="text-orange-500/80">ActionLogger.sol: Hashing 12 payloads to EVM L2</span></div>}
              {step >= 8 && <div className="flex gap-4 border-t border-white/10 pt-4 mt-4"><span className="text-white/30">09</span><span className="text-green-500 w-24">complete</span><span className="text-white">Posting proof of work to issue. Exited code 0.</span></div>}
              {step >= 3 && step < 8 && <div className="flex gap-4 mt-2"><span className="text-white/30">--</span><div className="w-2 h-4 bg-orange-500 animate-pulse"></div></div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlatformInterfaceDemo;

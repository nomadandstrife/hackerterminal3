import React, { useState, useRef, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

interface TerminalProps {
  onCommand: (command: string) => void;
  onReboot: () => void;
}

interface CommandHistory {
  command: string;
  output?: string;
}

const VALID_COMMANDS = ['help', 'resume', 'blog', 'portfolio', 'clear', 'about', 'contact', 'sudo', 'rm -rf', 'reboot', 'hack'];

export const Terminal: React.FC<TerminalProps> = ({ onCommand, onReboot }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [selfDestruct, setSelfDestruct] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [showError, setShowError] = useState(false);
  const [showBSOD, setShowBSOD] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const progressRef = useRef<NodeJS.Timeout>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newCommand: CommandHistory = { command: input };

    switch (input.toLowerCase()) {
      case 'help':
        newCommand.output = `
Available commands:
  - help: Show this help message
  - resume: View my resume
  - blog: Read my blog posts
  - portfolio: View my projects
  - clear: Clear the terminal
  - about: About me
  - contact: Contact information
  - reboot: Restart the system
  - hack: ???
  - rm -rf: ???
`;
        break;
      case 'sudo':
        newCommand.output = 'Nice try! Access denied. 😎';
        break;
      case 'hack':
        onCommand('hack');
        newCommand.output = 'INITIATING GLOBAL SYSTEM BREACH...';
        break;
      case 'rm -rf':
        newCommand.output = 'WARNING: Deleting root filesystem...\n[!] This action is irreversible!';
        setCountdown(5);
        break;
      default:
        if (!VALID_COMMANDS.includes(input.toLowerCase())) {
          newCommand.output = `Access Denied: "${input}" is not a recognized command`;
        } else {
          onCommand(input);
        }
    }

    setHistory(prev => [...prev, newCommand]);
    setInput('');
  };

  useEffect(() => {
    if (countdown === null) return;
    
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    
    if (countdown === 0) {
      setSelfDestruct(true);
      setProgress(0);
      
      progressRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressRef.current);
            setShowError(true);
            setTimeout(() => {
              setShowBSOD(true);
              setTimeout(() => {
                onReboot();
              }, 3000);
            }, 2000);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      
      return () => {
        if (progressRef.current) {
          clearInterval(progressRef.current);
        }
      };
    }
  }, [countdown, onCommand, onReboot]);

  if (showBSOD) {
    return (
      <div className="bsod">
        <div className="text-2xl mb-8">
          A problem has been detected and the system has been shut down to prevent damage.
        </div>
        <div className="mb-4">
          CRITICAL_PROCESS_DIED
        </div>
        <div className="mb-8">
          If this is the first time you've seen this error screen,<br />
          restart your computer. If this screen appears again, follow<br />
          these steps:
        </div>
        <div className="mb-8">
          Technical information:
          <br /><br />
          *** STOP: 0x000000F4 (0x0000003, 0x85A32F45, 0x00000000)
        </div>
        <div>
          Beginning dump of physical memory<br />
          Physical memory dump complete.<br />
          Contact your system administrator or technical support group for further assistance.
        </div>
      </div>
    );
  }

  return (
    <div 
      className="terminal-window max-w-3xl mx-auto mt-8"
      onClick={() => inputRef.current?.focus()}
    >
      {showWelcome ? (
        <TypeAnimation
          sequence={[
            'Welcome, type help for all options',
            2000,
            () => setShowWelcome(false)
          ]}
          wrapper="div"
          cursor={true}
          className="text-lg"
          speed={75}
        />
      ) : (
        <>
          <div className="space-y-2 mb-4">
            {history.map((entry, i) => (
              <div key={i}>
                <div className="flex items-center space-x-2">
                  <span className="text-[#39ff14]">$</span>
                  <span>{entry.command}</span>
                </div>
                {entry.output && (
                  <pre className="mt-1 text-white/80 text-sm">{entry.output}</pre>
                )}
              </div>
            ))}
            {countdown !== null && countdown > 0 && (
              <div className="text-red-500 font-bold text-xl">
                System deletion in {countdown}...
              </div>
            )}
            {selfDestruct && (
              <div className="space-y-4">
                <div className="text-red-500 font-bold text-xl">
                  SYSTEM DELETION IN PROGRESS
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden border border-red-500/30">
                  <div 
                    className="h-full bg-red-500 rounded-full progress-bar"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="text-sm text-red-400">
                  Deleting system files: {progress}%
                </div>
                {showError && (
                  <div className="space-y-2 text-red-500 font-mono mt-8">
                    <div>ERROR: System files permanently deleted!</div>
                    <div>Kernel Panic: Unable to recover.</div>
                    <div className="text-[#39ff14]">Goodbye, World. End of line.</div>
                  </div>
                )}
              </div>
            )}
          </div>
          {!selfDestruct && (
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
              <span className="text-[#39ff14]">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="command-input flex-1 bg-transparent border-none outline-none text-[#39ff14]"
                autoFocus
              />
            </form>
          )}
        </>
      )}
    </div>
  );
};
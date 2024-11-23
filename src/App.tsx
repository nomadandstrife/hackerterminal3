import React, { useState, useEffect } from 'react';
import { Terminal } from './components/Terminal';
import { BootSequence } from './components/BootSequence';
import { Window } from './components/Window';
import { Resume } from './components/Resume';
import { Blog } from './components/Blog';
import { Portfolio } from './components/Portfolio';
import { HackPlanet } from './components/HackPlanet';
import { Terminal as TerminalIcon, Github, Linkedin, Mail } from 'lucide-react';

function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [activeWindows, setActiveWindows] = useState<string[]>([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsBooting(false), 7500);
    return () => clearTimeout(timer);
  }, []);

  const handleCommand = (command: string) => {
    switch (command.toLowerCase()) {
      case 'resume':
        setActiveWindows(prev => [...prev, 'resume']);
        break;
      case 'blog':
        setActiveWindows(prev => [...prev, 'blog']);
        break;
      case 'portfolio':
        setActiveWindows(prev => [...prev, 'portfolio']);
        break;
      case 'hack':
        setActiveWindows(prev => [...prev, 'hack']);
        break;
      case 'clear':
        setActiveWindows([]);
        break;
      case 'reboot':
        handleReboot();
        break;
    }
  };

  const handleReboot = () => {
    setIsBooting(true);
    setActiveWindows([]);
    setKey(prev => prev + 1);
    setTimeout(() => setIsBooting(false), 7500);
  };

  if (isBooting) {
    return <BootSequence />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#39ff14] overflow-hidden relative">
      <div className="matrix-bg" />
      
      <div className="container mx-auto p-4">
        <Terminal 
          key={key}
          onCommand={handleCommand} 
          onReboot={handleReboot}
        />

        {activeWindows.includes('resume') && (
          <Window
            title="resume.txt"
            onClose={() => setActiveWindows(prev => prev.filter(w => w !== 'resume'))}
          >
            <Resume />
          </Window>
        )}

        {activeWindows.includes('blog') && (
          <Window
            title="blog.log"
            onClose={() => setActiveWindows(prev => prev.filter(w => w !== 'blog'))}
          >
            <Blog />
          </Window>
        )}

        {activeWindows.includes('portfolio') && (
          <Window
            title="projects.sh"
            onClose={() => setActiveWindows(prev => prev.filter(w => w !== 'portfolio'))}
          >
            <Portfolio />
          </Window>
        )}

        {activeWindows.includes('hack') && (
          <Window
            title="global_breach.exe"
            onClose={() => setActiveWindows(prev => prev.filter(w => w !== 'hack'))}
          >
            <HackPlanet />
          </Window>
        )}
      </div>

      <footer className="fixed bottom-0 w-full bg-[#0a0a0a]/80 border-t border-[#39ff14]/20 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <TerminalIcon className="w-5 h-5" />
            <span className="text-sm">System ready</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-white transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
            </a>
            <a href="mailto:contact@example.com">
              <Mail className="w-5 h-5 hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
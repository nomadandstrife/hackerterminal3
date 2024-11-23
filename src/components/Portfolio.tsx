import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'SecureNet Scanner',
    description: 'Advanced network vulnerability scanner with ML-powered threat detection',
    tech: ['Python', 'TensorFlow', 'Nmap'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
  {
    title: 'Crypto Vault',
    description: 'Zero-knowledge encryption tool for secure file storage',
    tech: ['Rust', 'WebAssembly', 'React'],
    github: 'https://github.com',
  },
  {
    title: 'PacketForge',
    description: 'Custom packet crafting and network manipulation toolkit',
    tech: ['Go', 'Raw Sockets', 'libpcap'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
];

export const Portfolio: React.FC = () => {
  return (
    <div className="grid gap-6">
      {projects.map((project, index) => (
        <div key={index} className="border border-[#39ff14]/20 p-4">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <div className="flex space-x-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-white transition-colors" />
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 hover:text-white transition-colors" />
                </a>
              )}
            </div>
          </div>
          <p className="mt-2 text-white/80">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span key={i} className="text-xs px-2 py-1 border border-[#39ff14]/40 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
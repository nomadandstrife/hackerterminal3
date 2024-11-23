import React from 'react';
import { Rnd } from 'react-rnd';
import { X, Minus, Square } from 'lucide-react';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const Window: React.FC<WindowProps> = ({ title, children, onClose }) => {
  return (
    <Rnd
      default={{
        x: Math.random() * (window.innerWidth - 600),
        y: Math.random() * (window.innerHeight - 400),
        width: 600,
        height: 400,
      }}
      minWidth={300}
      minHeight={200}
      bounds="window"
      className="z-10"
    >
      <div className="terminal-window h-full flex flex-col">
        <div className="flex items-center justify-between pb-2 border-b border-[#39ff14]/20">
          <span className="text-sm font-mono">{title}</span>
          <div className="flex space-x-2">
            <button className="hover:text-white">
              <Minus className="w-4 h-4" />
            </button>
            <button className="hover:text-white">
              <Square className="w-4 h-4" />
            </button>
            <button onClick={onClose} className="hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4">
          {children}
        </div>
      </div>
    </Rnd>
  );
};
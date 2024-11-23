import React from 'react';
import { Globe2 } from 'lucide-react';

export const HackPlanet: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-4">
      <Globe2 className="w-32 h-32 animate-spin-slow text-[#39ff14]" />
      <h1 className="text-6xl font-bold text-[#39ff14] animate-pulse tracking-wider text-center">
        HACK THE PLANET!!
      </h1>
      <div className="text-sm text-[#39ff14]/60 animate-bounce mt-8">
        The Gibson has been compromised
      </div>
    </div>
  );
};
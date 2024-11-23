import React from 'react';

export const Resume: React.FC = () => {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-bold mb-4">Professional Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg">Senior Security Engineer</h3>
            <p className="text-sm text-[#39ff14]/80">CyberSec Corp • 2020 - Present</p>
            <ul className="list-disc list-inside mt-2 text-white/80">
              <li>Led red team operations and penetration testing</li>
              <li>Developed automated security assessment tools</li>
              <li>Conducted security awareness training</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg">Languages</h3>
            <p className="text-white/80">Python, JavaScript, Go, Rust</p>
          </div>
          <div>
            <h3 className="text-lg">Security</h3>
            <p className="text-white/80">Penetration Testing, Malware Analysis, Network Security</p>
          </div>
        </div>
      </section>

      <div className="mt-8">
        <button className="border border-[#39ff14] px-4 py-2 hover:bg-[#39ff14]/10 transition-colors">
          Download Full Resume
        </button>
      </div>
    </div>
  );
};
import React from 'react';

const blogPosts = [
  {
    title: 'Exploiting the Modern Network',
    date: '2024-03-15',
    excerpt: 'An in-depth analysis of modern network vulnerabilities...',
  },
  {
    title: 'Adventures in Red Teaming',
    date: '2024-03-01',
    excerpt: 'Real-world experiences from recent red team operations...',
  },
  {
    title: 'Zero-Day Discovery Process',
    date: '2024-02-15',
    excerpt: 'A methodical approach to finding zero-day vulnerabilities...',
  },
];

export const Blog: React.FC = () => {
  return (
    <div className="space-y-6">
      {blogPosts.map((post, index) => (
        <article key={index} className="border border-[#39ff14]/20 p-4 hover:bg-[#39ff14]/5 transition-colors cursor-pointer">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-sm text-[#39ff14]/80 mt-1">{post.date}</p>
          <p className="mt-2 text-white/80">{post.excerpt}</p>
          <button className="mt-4 text-sm hover:text-white">Read more →</button>
        </article>
      ))}
    </div>
  );
};
import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="h-screen flex items-center justify-center bg-gray-200">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <ul className="space-y-3 text-lg text-gray-800">
          <li>✅ Portfolio Website</li>
          <li>✅ Dashboard App</li>
          <li>✅ E-commerce Store</li>
        </ul>
      </div>
    </section>
  );
}
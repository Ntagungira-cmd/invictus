import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solution from './components/Solution';
import Team from './components/Team';
import Journey from './components/Journey';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Solution />
        <Team />
        <Journey />
      </main>
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-500">
            © 2024 Invictus. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
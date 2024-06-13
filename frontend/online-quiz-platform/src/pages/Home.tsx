// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 animate__animated animate__fadeIn">
      <h2 className="text-3xl font-bold mb-6">Welcome to the Online Quiz Platform</h2>
      <Link to="/quiz" className="bg-blue-600 text-white py-2 px-4 rounded">
        Start Quiz
      </Link>
    </div>
  );
};

export default Home;

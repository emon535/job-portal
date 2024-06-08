import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <div className="flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/search-jobs" className="hover:underline">Search Jobs</Link>
            <Link to="/post-job" className="hover:underline">Post Job</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>Job Portal © 2024</p>
      </footer>
    </div>
  );
};

export default Layout;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import JobSearch from './pages/JobSearch';
import PostJob from './pages/PostJob';
import Layout from './Layout';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="search-jobs" element={<JobSearch />} />
          <Route path="post-job" element={<PostJob />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

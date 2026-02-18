import React, { useState, useEffect } from 'react';
import Projects from './components/Projects';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <Projects 
        projects={projects} 
        isLoading={isLoading} 
        error={error} 
      />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import UrlShortener from './components/UrlShortener';
import UrlList from './components/UrlList';

function App() {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUrls = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/urls');
      const data = await response.json();
      setUrls(data);
    } catch (error) {
      console.error('Error fetching URLs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  const handleUrlCreated = (newUrl) => {
    setUrls([newUrl, ...urls]);
  };

  const handleUrlDeleted = (id) => {
    setUrls(urls.filter(url => url._id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>🔗 URL Shortener</h1>
        <p className="subtitle">Create short, shareable links instantly</p>
        
        <UrlShortener onUrlCreated={handleUrlCreated} />
        
        <UrlList 
          urls={urls} 
          loading={loading} 
          onUrlDeleted={handleUrlDeleted}
          onRefresh={fetchUrls}
        />
      </div>
    </div>
  );
}

export default App;

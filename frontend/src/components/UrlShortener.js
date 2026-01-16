import React, { useState } from 'react';
import './UrlShortener.css';

function UrlShortener({ onUrlCreated }) {
  const [longUrl, setLongUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!longUrl.trim()) {
      setError('Please enter a URL');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/urls/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl: longUrl.trim() }),
      });

      if (!response.ok) {
        throw new Error('Failed to create short URL');
      }

      const newUrl = await response.json();
      onUrlCreated(newUrl);
      setLongUrl('');
    } catch (err) {
      setError(err.message || 'Error creating short URL');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="url-shortener" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="url"
          placeholder="Enter your long URL here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Shortening...' : 'Shorten'}
        </button>
      </div>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default UrlShortener;

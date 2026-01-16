import React, { useState } from 'react';
import './UrlItem.css';

function UrlItem({ url, onDelete }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url.shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this URL?')) {
      try {
        const response = await fetch(`/api/urls/${url._id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          onDelete(url._id);
        }
      } catch (error) {
        console.error('Error deleting URL:', error);
      }
    }
  };

  return (
    <div className="url-item">
      <div className="url-info">
        <div className="url-row">
          <span className="label">Long URL:</span>
          <a href={url.longUrl} target="_blank" rel="noopener noreferrer" className="long-url">
            {url.longUrl}
          </a>
        </div>
        <div className="url-row">
          <span className="label">Short URL:</span>
          <div className="short-url-container">
            <span className="short-url">{url.shortUrl}</span>
            <button 
              className={`copy-btn ${copied ? 'copied' : ''}`}
              onClick={copyToClipboard}
              title="Copy to clipboard"
            >
              {copied ? '✓ Copied' : '📋 Copy'}
            </button>
          </div>
        </div>
        <div className="url-meta">
          <span className="clicks">Clicks: {url.clicks}</span>
          <span className="date">
            Created: {new Date(url.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
      <button className="delete-btn" onClick={handleDelete} title="Delete">
        🗑️
      </button>
    </div>
  );
}

export default UrlItem;

import React from 'react';
import UrlItem from './UrlItem';
import './UrlList.css';

function UrlList({ urls, loading, onUrlDeleted, onRefresh }) {
  return (
    <div className="url-list">
      <div className="list-header">
        <h2>Recent URLs</h2>
        <button className="refresh-btn" onClick={onRefresh} disabled={loading}>
          🔄 Refresh
        </button>
      </div>
      
      {loading && urls.length === 0 ? (
        <p className="loading">Loading...</p>
      ) : urls.length === 0 ? (
        <p className="empty">No URLs yet. Create one to get started!</p>
      ) : (
        <div className="list-items">
          {urls.map((url) => (
            <UrlItem 
              key={url._id} 
              url={url} 
              onDelete={onUrlDeleted}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default UrlList;

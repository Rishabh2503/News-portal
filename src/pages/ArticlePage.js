import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { articleUrl } = useParams();
  const decodedUrl = decodeURIComponent(articleUrl);
  const [error, setError] = useState(false);

  const handleIframeError = () => {
    setError(true);
  };

  return (
    <div className="container mx-auto ">
      {error ? (
        <div className="text-center text-red-500 text-xl mt-4">
          Unable to load the article. Please try again later.
        </div>
      ) : (
        <iframe
          src={decodedUrl}
          title="article"
          style={{ width: '100%', height: '100vh' }}
          className="rounded-lg shadow-md"
          onError={handleIframeError}
        />
      )}
    </div>
  );
};

export default ArticlePage;

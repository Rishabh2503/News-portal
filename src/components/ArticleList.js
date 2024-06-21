import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useFavorites from '../hooks/useFavorites';

const ArticleList = ({ articles }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (!articles || articles.length === 0) {
    return <p className="text-center text-gray-700 dark:text-gray-300">No articles available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {articles.map((article) => (
        <motion.div
          key={article.url}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform duration-200 ease-in-out"
        >
          <Link to={`/article/${encodeURIComponent(article.url)}`}>
            {article.urlToImage && (
              <img className="w-full h-48 object-cover rounded-t-lg" src={article.urlToImage} alt={article.title} />
            )}
            <div className="p-6 relative">
              <h2 className="text-xl font-semibold mb-2 dark:text-white">{article.title}</h2>
              {article.author && <p className="text-gray-600 dark:text-gray-400 mb-2">By {article.author}</p>}
              <p className="text-gray-700 dark:text-gray-300">{article.description}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  isFavorite(article.url) ? removeFavorite(article.url) : addFavorite(article);
                }}
                className="absolute top-4 right-4 text-2xl text-yellow-500"
              >
                {isFavorite(article.url) ? '★' : '☆'}
              </button>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ArticleList;

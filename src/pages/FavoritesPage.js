import React from 'react';
import ArticleList from '../components/ArticleList';
import useFavorites from '../hooks/useFavorites';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Favorite Articles</h1>
      </header>
      <ArticleList articles={favorites} />
    </div>
  );
};

export default FavoritesPage;

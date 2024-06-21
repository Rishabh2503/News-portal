import { useState, useEffect } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const addFavorite = (article) => {
    const newFavorites = [...favorites, article];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const removeFavorite = (url) => {
    const newFavorites = favorites.filter((article) => article.url !== url);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (url) => {
    return favorites.some((article) => article.url === url);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};

export default useFavorites;

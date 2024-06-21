import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles, setCategory, setPage } from '../store/newSlice';
import ArticleList from '../components/ArticleList';
import Pagination from '../components/Pagination';
import CategoryFilter from '../components/Category';
import useTheme from '../hooks/useTheme';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, status, category, page, totalResults } = useSelector((state) => state.news);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    dispatch(getArticles({ category, page }));
  }, [dispatch, category, page]);

  const handleCategoryChange = (newCategory) => {
    dispatch(setCategory(newCategory));
    dispatch(setPage(1));
  };

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div className={`container mx-auto p-4 ${theme}`}>
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">NewsCompany</h1>
        <p className="text-gray-700 dark:text-gray-300">Your daily source of reliable news</p>
        <Link to="/favorites" className="text-blue-500 dark:text-blue-300 hover:underline">
          View Favorites
        </Link>
      </header>
      <CategoryFilter onChange={handleCategoryChange} />
      {status === 'loading' ? (
        <p className="text-center text-xl mt-4">Loading...</p>
      ) : status === 'failed' ? (
        <p className="text-center text-red-500 text-xl mt-4">Error loading articles</p>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Top News</h2>
          <ArticleList articles={articles} />
        </div>
      )}
      <Pagination
        currentPage={page}
        totalResults={totalResults}
        onPageChange={handlePageChange}
      />
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 text-2xl bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import "./App.css"
import FavoritesPage from './pages/FavoritesPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:articleUrl" element={<ArticlePage />} />
        <Route path="/favorites" component={FavoritesPage} />
      
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';

const categories = ['general', 'business', 'technology', 'entertainment', 'health', 'science', 'sports'];

const CategoryFilter = ({ onChange }) => {
  return (
    <div className="flex justify-center p-4 space-x-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

import React from 'react';

const Pagination = ({ currentPage, totalResults, onPageChange }) => {
  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="flex justify-center p-4 space-x-2 flex-wrap">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          disabled={index + 1 === currentPage}
          className={`py-2 px-4 m-1 rounded transition-colors duration-300 ${
            index + 1 === currentPage
              ? 'bg-gray-500 text-white'
              : 'bg-blue-500 hover:bg-blue-700 text-white'
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

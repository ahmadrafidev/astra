import React from 'react';

/**
 * Props for the Pagination component.
 *
 * @typedef {Object} PaginationProps
 * @property {number} totalItems - The total number of items to paginate.
 * @property {number} itemsPerPage - The number of items to display per page.
 * @property {number} currentPage - The current active page.
 * @property {(page: number) => void} onPageChange - Callback function triggered when the page changes.
 * @property {string} [className] - Additional class names for the pagination container.
 */
export interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

/**
 * Pagination component for navigating through pages of items.
 *
 * @component
 * @param {PaginationProps} props - Props for the Pagination component.
 * @returns {JSX.Element} The rendered Pagination component.
 */
const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange, className = '' }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded text-black dark:text-white bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 disabled:opacity-50"
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`px-3 py-1 rounded ${index + 1 === currentPage ? 'bg-black dark:bg-white text-white dark:text-black' : 'text-black dark:text-white bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'}`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded text-black dark:text-white bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

Pagination.displayName = "Pagination";
export default Pagination;

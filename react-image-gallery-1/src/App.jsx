import React, { useState } from 'react';
import ImageGallery from './components/ImageGallery';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="app">
      <h1>Image Gallery</h1>
      <ImageGallery currentPage={currentPage} />
      <div className="navigation">
        <button onClick={handlePrevious} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
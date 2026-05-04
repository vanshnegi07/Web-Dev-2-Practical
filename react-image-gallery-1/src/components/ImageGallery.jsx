import React, { useState, useEffect } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import ImageCard from './ImageCard';

const ImageGallery = () => {
  const { products, loading, error } = useFetchProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < products.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  const currentProducts = products.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div>
      <div className="image-gallery">
        {currentProducts.map(product => (
          <ImageCard key={product.id} product={product} />
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentIndex + itemsPerPage >= products.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
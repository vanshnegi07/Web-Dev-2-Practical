import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesPerPage = 4;

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch('/api/dummy.json');
            const data = await response.json();
            setImages(data);
        };

        fetchImages();
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + imagesPerPage, images.length - imagesPerPage));
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - imagesPerPage, 0));
    };

    const currentImages = images.slice(currentIndex, currentIndex + imagesPerPage);

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 gap-4">
                {currentImages.map((image, index) => (
                    <img key={index} src={image.url} alt={image.title} className="w-full h-auto" />
                ))}
            </div>
            <div className="flex justify-between w-full mt-4">
                <button onClick={handlePrevious} disabled={currentIndex === 0} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Previous
                </button>
                <button onClick={handleNext} disabled={currentIndex >= images.length - imagesPerPage} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Gallery;
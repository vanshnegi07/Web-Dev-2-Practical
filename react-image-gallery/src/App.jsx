import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import EdgePanel from './components/EdgePanel';

const App = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    useEffect(() => {
        fetch('/api/dummy.json')
            .then(response => response.json())
            .then(data => setImages(data));
    }, []);

    const nextImages = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + itemsPerPage, images.length - itemsPerPage));
    };

    const prevImages = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - itemsPerPage, 0));
    };

    const displayedImages = images.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <div className="flex flex-col items-center">
            <EdgePanel />
            <Gallery images={displayedImages} />
            <div className="flex justify-between w-full mt-4">
                <button onClick={prevImages} disabled={currentIndex === 0} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Previous
                </button>
                <button onClick={nextImages} disabled={currentIndex + itemsPerPage >= images.length} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Next
                </button>
            </div>
        </div>
    );
};

export default App;
import React from 'react';

const EdgePanel = ({ currentIndex, totalImages, onNext, onPrevious }) => {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-200 rounded-lg shadow-md">
            <button 
                onClick={onPrevious} 
                disabled={currentIndex === 0} 
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
                Previous
            </button>
            <span className="text-lg">
                {currentIndex + 1} - {Math.min(currentIndex + 4, totalImages)} of {totalImages}
            </span>
            <button 
                onClick={onNext} 
                disabled={currentIndex + 4 >= totalImages} 
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default EdgePanel;
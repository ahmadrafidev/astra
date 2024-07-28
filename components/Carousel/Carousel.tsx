import React, { useState } from 'react';

import Image from 'next/image';

export interface CarouselProps {
    images: string[];
    className?: string;
    width?: string;
    height?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, width, height, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={`relative ${className}`}>
            <div className="flex justify-center items-center">
                <button onClick={goToPrevious} className="absolute left-0 bg-white p-2 rounded-full shadow">
                    &lt;
                </button>
                <Image 
                    src={images[currentIndex]} 
                    alt={`Slide ${currentIndex + 1}`} 
                    className="w-full rounded-lg" 
                    width={100} 
                    height={100}
                />
                <button onClick={goToNext} className="absolute right-0 bg-white p-2 rounded-full shadow">
                    &gt;
                </button>
            </div>
            <div className="flex justify-center mt-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`h-2 w-2 bg-gray-400 rounded-full mx-1 ${index === currentIndex ? 'bg-blue-500' : ''}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

Carousel.displayName = "Carousel";
export default Carousel;

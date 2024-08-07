import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Props for the Carousel component.
 * 
 * @typedef {Object} CarouselProps
 * @property {string[]} images - Array of image URLs to display in the carousel.
 * @property {string} [className] - Additional class names for custom styling.
 * @property {number} [width=500] - Width of the carousel.
 * @property {number} [height=500] - Height of the carousel.
 * @property {boolean} [autoPlay=false] - Whether the carousel should autoplay.
 * @property {number} [autoPlayInterval=3000] - Interval for autoplay in milliseconds.
 * @property {boolean} [showDots=true] - Whether to show navigation dots.
 * @property {boolean} [showArrows=true] - Whether to show navigation arrows.
 */
export interface CarouselProps {
  images: string[];
  className?: string;
  width?: number;
  height?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

/**
 * Carousel component for displaying a set of images with navigation controls.
 * 
 * @component
 * @param {CarouselProps} props - Props for the Carousel component.
 * @returns {JSX.Element} The rendered Carousel component.
 */
const Carousel: React.FC<CarouselProps> = ({
  images,
  width = 500,
  height = 500,
  className,
  autoPlay = false,
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(goToNext, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, goToNext]);

  return (
    <div
      className={`relative ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
    >
      <div className="h-full overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
              style={{ width: `${width}px`, height: `${height}px` }}
            />
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full shadow hover:bg-white/75 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full shadow hover:bg-white/75 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Carousel.displayName = 'Carousel';
export default Carousel;

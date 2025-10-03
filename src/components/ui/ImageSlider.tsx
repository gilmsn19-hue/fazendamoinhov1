import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: string[];
  alt: string;
  interval?: number;
  className?: string;
  onClick?: (currentImageUrl: string, currentIndex: number) => void;
  showControls?: boolean;
  showIndicators?: boolean;
  syncTrigger?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  alt,
  interval = 4000,
  className = '',
  onClick,
  showControls = true,
  showIndicators = true,
  syncTrigger
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (syncTrigger !== undefined && !isPaused) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, [syncTrigger, images.length, isPaused]);

  useEffect(() => {
    if (images.length <= 1 || isPaused || syncTrigger !== undefined) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, isPaused, syncTrigger]);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPaused(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPaused(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPaused(true);
    setCurrentIndex(index);
    setTimeout(() => setIsPaused(false), 3000);
  };

  if (images.length === 0) return null;

  return (
    <div
      className={`relative overflow-hidden group w-full h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick && onClick(images[currentIndex], currentIndex)}
    >
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={alt}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex
                ? 'opacity-100 z-10'
                : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>

      {images.length > 1 && showControls && (
        <>
          <button
            onClick={goToPrevious}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0 lg:opacity-0'
            } lg:group-hover:opacity-100`}
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={goToNext}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0 lg:opacity-0'
            } lg:group-hover:opacity-100`}
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </>
      )}

      {images.length > 1 && showIndicators && (
        <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 flex space-x-1.5 sm:space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => goToSlide(index, e)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-white w-2 h-2 sm:w-2.5 sm:h-2.5 shadow-lg scale-125'
                  : 'bg-white/60 hover:bg-white/80 w-1.5 h-1.5 sm:w-2 sm:h-2'
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default ImageSlider;

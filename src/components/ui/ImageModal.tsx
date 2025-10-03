import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  images: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious
}) => {
  // Fechar modal com ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        onPrevious();
      } else if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* Overlay com desfoque */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Container do Modal */}
      <div className="relative z-[1000] w-full h-full flex items-center justify-center p-4">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[1001] bg-[#FDF5E6]/90 hover:bg-[#FDF5E6] text-[#37614e] p-1 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-[#37614e]/20"
          aria-label="Fechar modal"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Botão Anterior */}
        {images.length > 1 && (
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-[1001] bg-[#FDF5E6]/90 hover:bg-[#FDF5E6] text-[#37614e] p-1 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-[#37614e]/20"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        
        {/* Botão Próximo */}
        {images.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-[1001] bg-[#FDF5E6]/90 hover:bg-[#FDF5E6] text-[#37614e] p-1 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-[#37614e]/20"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
        
        {/* Imagem */}
        <div className="max-w-7xl max-h-full w-full h-full flex items-center justify-center">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
  
        {/* Indicador de posição */}
        {images.length > 1 && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
            <span className="text-sm font-medium">
              {currentIndex + 1} de {images.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
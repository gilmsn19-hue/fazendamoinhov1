import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import ImageModal from '../ui/ImageModal';

const Depoimentos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const casesImages = [
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/depoimentos/WhatsApp_Image_2025-07-17_at_18.15.15_bd7d686b_arzgwt.jpg',
      alt: 'Casamento realizado na Fazenda Moinho',
      title: ''
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/depoimentos/IMG-20250717-WA0026_tdhvf6.jpg',
      alt: 'Casamento realizado na Fazenda Moinho',
      title: ''
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/depoimentos/WhatsApp_Image_2025-07-17_at_18.15.14_c2c7120e_mjqmay.jpg',
      alt: 'Casamento realizado na Fazenda Moinho',
      title: ''
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/depoimentos/WhatsApp_Image_2025-07-17_at_18.15.17_43f2ec76_cvu7j1.jpg',
      alt: 'Casamento realizado na Fazenda Moinho',
      title: ''
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/depoimentos/IMG-20250721-WA0023_qaovmg.jpg',
      alt: 'Casamento realizado na Fazenda Moinho',
      title: ''
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/depoimentos/IMG-20250721-WA0022_yuhw92.jpg',
      alt: 'Casamento realizado na Fazenda Moinho',
      title: ''
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/depoimentos/IMG-20250721-WA0024_gcfagt.jpg',
      alt: 'Casamento realizado na Fazenda Moinho',
      title: ''
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/depoimentos/IMG-20250721-WA0021_fz6lil.jpg',
      alt: 'Casamento realizado na Fazenda Moinho',
      title: ''
    }
  ];

  const depoimentos = [
    {
      nome: 'Rebeca',
      evento: 'Casamento 20/04/2025',
      texto: 'A Bruna e sua equipe foram responsáveis pelo dia mais lindo da minha vida, o local foi extremamente elogiado, serei eternamente grata e com certeza escolheria novamente.',
      avaliacao: 5
    },
    {
      nome: 'Karina',
      evento: 'Casamento 24/02/2025',
      texto: 'O lugar é maravilhoso, amplo, cercado pela natureza, limpo e bem organizado. Amamos cada detalhe, desde o fechamento até o grande dia.',
      avaliacao: 5
    },
    {
      nome: 'Verônica',
      evento: 'Casamento 25/05/2025',
      texto: 'A fazenda é linda, com uma energia única, e a cerimônia no bosque foi simplesmente mágica! A festa aconteceu em um casarão rústico, lindo, exatamente do jeitinho que queríamos — aconchegante, elegante e cheio de charme.',
      avaliacao: 5
    },
    {
      nome: 'Aline',
      evento: 'Casamento 17/01/2025',
      texto: 'É difícil colocar em palavras tudo o que vivemos nesse dia tão especial e a importância de termos escolhido a fazenda, administrada com tanto carinho e dedicação pela Bruna.',
      avaliacao: 5
    },
    {
      nome: 'Cildamary',
      evento: 'Casamento 14/05/2025',
      texto: 'Tive o privilégio de conhecer um lugar tão especial, quem em todas as vezes que fui durante a organização do casamento, me sentia em casa. A Fazenda parece um pedacinho do Céu. Eu me casaria lá, 1 milhão de vezes.',
      avaliacao: 5
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const section = document.getElementById('depoimentos');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Auto-slide para depoimentos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialSlide(prev => (prev + 1) % depoimentos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Calculate carousel width and set CSS variable
  useEffect(() => {
    const calculateCarouselWidth = () => {
      if (carouselRef.current) {
        const isMobile = window.innerWidth < 640;
        const imageWidth = isMobile ? 260 : 300;
        const gap = isMobile ? 4 : 8; // gap-1 sm:gap-2 = 4px mobile, 8px desktop
        const totalImages = casesImages.length;
        
        // Calculate width of one complete set of images including gaps
        const oneSetWidth = (imageWidth * totalImages) + (gap * (totalImages - 1));
        
        // Set CSS variable for animation
        carouselRef.current.style.setProperty('--carousel-translate-width', `${oneSetWidth}px`);
        
        // Set total width as 2 times one set
        carouselRef.current.style.width = `${oneSetWidth * 2}px`;
      }
    };

    calculateCarouselWidth();
    window.addEventListener('resize', calculateCarouselWidth);
    
    return () => window.removeEventListener('resize', calculateCarouselWidth);
  }, [casesImages.length]);

  // Funções do modal
  const openModal = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % casesImages.length);
  };

  const previousImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + casesImages.length) % casesImages.length);
  };

  return (
    <>
      <section id="depoimentos" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden section-curve-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - Title */}
          <div className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Enhanced title with artistic background */}
            <div className="relative inline-block">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-fazenda-dark-brown font-montserrat">
                Histórias que nos inspiram
              </h2>
              
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-fazenda-sage/50 to-transparent"></div>
            </div>
          </div>

          {/* Header - Paragraph */}
          <div className={`text-center mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-sm sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-helvetica">
              <span className="max-w-xl mx-auto block">
                Aqui, celebramos os momentos especiais que, com dedicação e expertise, ajudamos a conceber e a tornar inesquecíveis, transformando visões em realidades emocionantes
              </span>
            </p>
          </div>

          {/* Enhanced Infinite Image Slider */}
          <div className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div 
                ref={carouselRef}
                className="flex animate-slide-right-infinite gap-1 sm:gap-2"
                style={{ height: typeof window !== 'undefined' && window.innerWidth < 640 ? '462px' : '533px' }}
              >
                {[...casesImages, ...casesImages].map((image, index) => {
                  const originalIndex = index % casesImages.length;
                  return (
                    <div 
                      key={index} 
                      className="flex-shrink-0 cursor-pointer"
                      style={{ 
                        width: typeof window !== 'undefined' && window.innerWidth < 640 ? '260px' : '300px',
                        height: '100%'
                      }}
                      onClick={() => openModal(originalIndex)}
                    >
                      <div className="h-full rounded-2xl overflow-hidden relative group">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        {/* Subtle overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <p className="text-sm font-medium">{image.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Minimalist Testimonials Slider */}
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonialSlide * 100}%)` }}
              >
                {depoimentos.map((depoimento, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 text-center mx-4 max-w-3xl mx-auto">
                      {/* Compact Stars */}
                      <div className="flex justify-center mb-4">
                        {[...Array(depoimento.avaliacao)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                        ))}
                      </div>
                      
                      {/* Shorter, more impactful text */}
                      <p className="text-lg text-gray-700 leading-relaxed mb-6 italic font-medium">
                        "{depoimento.texto}"
                      </p>
                      
                      {/* Compact author info */}
                      <div className="flex items-center justify-center space-x-3">
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">
                            {depoimento.nome}
                          </h4>
                          <p className="text-green-700 font-medium text-sm">
                            {depoimento.evento}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Minimalist Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {depoimentos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialSlide(index)}
                  className={`w-2 h-2 rounded-md transition-all duration-300 ${
                    index === currentTestimonialSlide ? 'bg-green-700 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CSS Styles */}
        <style jsx>{`
          @keyframes slide-right {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-1 * var(--carousel-translate-width)));
            }
          }
          
          .animate-slide-right-infinite {
            animation: slide-right 20s linear infinite;
          }
          
          @media (max-width: 639px) {
            .animate-slide-right-infinite {
              animation: slide-right 18s linear infinite;
            }
          }
        `}</style>
      </section>

      {/* Image Modal - Renderizado fora da seção para evitar problemas de z-index */}
      <ImageModal
        isOpen={modalOpen}
        images={casesImages}
        currentIndex={selectedImageIndex}
        onClose={closeModal}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </>
  );
};

export default Depoimentos;
import React, { useState, useEffect, useRef, useCallback } from 'react';
import SEOHead from '../components/ui/SEOHead';
import ImageModal from '../components/ui/ImageModal';
import { Play, Touchpad as Touch } from 'lucide-react';

const OEspaco = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Force video play
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.play().catch(console.error);
      }
    };

    // Try to play video after component mounts
    setTimeout(playVideo, 100);
  }, []);


  const galleryEnvironments = [
    {
      title: 'Áreas Cerimônia',
      description: 'Espaço amplo para cerimônias com vista panorâmica',
      images: [
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/areascerimonia/IMG-20250721-WA0015_b4swd4.jpg',
          alt: 'Cerimônia no jardim principal com decoração elegante'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/areascerimonia/IMG-20250721-WA0016_gbfrbi.jpg',
          alt: 'Vista panorâmica do jardim principal'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/areascerimonia/IMG-20250721-WA0017_joh0iv.jpg',
          alt: 'Decoração de casamento no jardim'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/areascerimonia/IMG-20250721-WA0018_oljnnd.jpg',
          alt: 'Área de cerimônia preparada'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/areascerimonia/IMG-20250721-WA0019_izly6x.jpg',
          alt: 'Jardim durante o pôr do sol'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/areascerimonia/IMG-20250721-WA0020_yl72df.jpg',
          alt: 'Jardim durante o pôr do sol'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/areascerimonia/IMG-20250721-WA0025_hljbvw.jpg',
          alt: 'Jardim durante o pôr do sol'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/areascerimonia/IMG-20250721-WA0026_ji7wid.jpg',
          alt: 'Jardim durante o pôr do sol'
        }
      ]
    },
    {
      title: 'Recepção',
      description: 'Descrição de exemplo',
      images: [
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/recepcao/IMG-20250717-WA0080_w88wfe.jpg',
          alt: 'Vista do lago natural cristalino'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/recepcao/IMG-20250717-WA0081_w96hbh.jpg',
          alt: 'Deck sobre o lago para eventos'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/recepcao/IMG-20250717-WA0082_q6dq0w.jpg',
          alt: 'Reflexo no lago durante o pôr do sol'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/recepcao/WhatsApp_Image_2025-07-17_at_17.57.14_889bf428_gxaxwd.jpg',
          alt: 'Margem do lago com vegetação'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/recepcao/WhatsApp_Image_2025-07-17_at_17.57.17_fc9fadb1_tlwp65.jpg',
          alt: 'Vista aérea do lago'
        }
      ]
    },
    {
      title: 'Área ao Ar Livre',
      description: 'Descrição de exemplo',
      images: [
        {
          src: 'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496035/IMG-20251001-WA0017_thaee0.jpg',
          alt: 'Área de recepção ao ar livre elegante'
        },
        {
          src: 'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496024/IMG-20251001-WA0028_aeal3l.jpg',
          alt: 'Área de recepção ao ar livre elegante'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/arlivrearea/IMG-20250717-WA0045_ef9hxi.jpg',
          alt: 'Área de recepção ao ar livre elegante'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/arlivrearea/IMG-20250717-WA0069_wdobxb.jpg',
          alt: 'Mesa de jantar ao ar livre'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/arlivrearea/IMG-20250721-WA0077_gkswts.jpg',
          alt: 'Área de networking corporativo'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/arlivrearea/IMG-20250721-WA0078_c2ypm7.jpg',
          alt: 'Espaço para buffet'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/arlivrearea/IMG-20250721-WA0079_ya5cwe.jpg',
          alt: 'Área de dança'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/arlivrearea/IMG-20250721-WA0080_vyo8fi.jpg',
          alt: 'Área de dança'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/arlivrearea/WhatsApp_Image_2025-07-17_at_17.57.14_18c675e1_bi6txf.jpg',
          alt: 'Área de dança'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/arlivrearea/WhatsApp_Image_2025-07-17_at_17.57.15_1ae0601b_qadefh.jpg',
          alt: 'Área de dança'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/arlivrearea/WhatsApp_Image_2025-07-17_at_17.57.16_a43f2ef6_j2bafd.jpg',
          alt: 'Área de dança'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/arlivrearea/WhatsApp_Image_2025-07-17_at_17.57.16_b65f56e4_vosrvv.jpg',
          alt: 'Área de dança'
        }
      ]
    },
    {
      title: 'Casarão Colonial',
      description: 'Descrição de exemplo',
      images: [
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casaraocolonial/IMG-20250717-WA0098_qvmla2.jpg',
          alt: 'Trilha na mata atlântica preservada'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casaraocolonial/IMG-20250717-WA0100_gnrxvu.jpg',
          alt: 'Caminho entre as árvores'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casaraocolonial/IMG-20250721-WA0078_c2ypm7 (1).jpg',
          alt: 'Ponte de madeira na trilha'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casaraocolonial/IMG-20250721-WA0093_yfrdbm.jpg',
          alt: 'Vista da trilha principal'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casaraocolonial/IMG-20250721-WA0082_c2hmx4.jpg',
          alt: 'Trilha com vista para o lago'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casaraocolonial/IMG-20250721-WA0083_pcwped.jpg',
          alt: 'Trilha com vista para o lago'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casaraocolonial/IMG-20250721-WA0084_ucpgc7.jpg',
          alt: 'Trilha com vista para o lago'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casaraocolonial/IMG-20250721-WA0085_ic54jg.jpg',
          alt: 'Trilha com vista para o lago'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casaraocolonial/IMG-20250721-WA0086_j7bdm8.jpg',
          alt: 'Trilha com vista para o lago'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casaraocolonial/IMG-20250721-WA0087_ohclet.jpg',
          alt: 'Trilha com vista para o lago'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casaraocolonial/IMG-20250721-WA0088_mqakuf.jpg',
          alt: 'Trilha com vista para o lago'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casaraocolonial/IMG-20250721-WA0089_lbuizh.jpg',
          alt: 'Trilha com vista para o lago'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casaraocolonial/IMG-20250721-WA0090_h3proe.jpg',
          alt: 'Trilha com vista para o lago'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casaraocolonial/IMG-20250721-WA0091_rbormr.jpg',
          alt: 'Trilha com vista para o lago'
        }
      ]
    }
  ];

  // Flatten all images for modal navigation
  const allImages = galleryEnvironments.flatMap(env => 
    env.images.map(img => ({
      src: img.src,
      alt: img.alt,
      title: env.title,
    }))
  );

  const openModal = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const previousImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };


  // Infinite Slider Component
  const InfiniteSlider = ({ images, direction = 'right', environmentTitle }: { 
    images: any[], 
    direction?: 'left' | 'right',
    environmentTitle: string 
  }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const duplicatedImages = [...images, ...images]; // Double for smooth infinite scroll
    
    // Calculate carousel width and set CSS variable
    useEffect(() => {
      const calculateCarouselWidth = () => {
        if (carouselRef.current) {
          const isMobile = window.innerWidth < 640;
          const imageWidth = isMobile ? 260 : 300;
          const gap = isMobile ? 16 : 24; // gap-4 sm:gap-6 = 16px mobile, 24px desktop
          const totalImages = images.length;
          
          // Calculate width of one complete set of images including gaps
          const oneSetWidth = (imageWidth * totalImages) + (gap * (totalImages - 1));
          
          // Set CSS variable for animation
          carouselRef.current.style.setProperty('--carousel-translate-width', `${oneSetWidth}px`);
          
          // Set total width as 2 times one set plus gap between sets
          const totalWidth = (oneSetWidth * 2) + gap;
          carouselRef.current.style.width = `${totalWidth}px`;
        }
      };

      calculateCarouselWidth();
      window.addEventListener('resize', calculateCarouselWidth);
      
      return () => window.removeEventListener('resize', calculateCarouselWidth);
    }, [images.length]);
    
    return (
      <div className="relative overflow-hidden">
        <div 
          ref={carouselRef}
          className={`flex gap-4 sm:gap-6 ${direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'}`}
        >
          {duplicatedImages.map((image, index) => {
            const globalIndex = galleryEnvironments.findIndex(env => env.title === environmentTitle) * 5 + (index % images.length);
            
            return (
              <div
                key={`${environmentTitle}-${index}`}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 flex-shrink-0"
                style={{ 
                  width: typeof window !== 'undefined' && window.innerWidth < 640 ? '260px' : '300px', 
                  height: typeof window !== 'undefined' && window.innerWidth < 640 ? '462px' : '533px' 
                }}
                onClick={() => openModal(globalIndex)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-medium">{environmentTitle}</span>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                        <Play className="w-3 sm:w-4 h-3 sm:h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Subtle Touch Instruction - More Visible */}
        <div className="md:hidden absolute bottom-3 right-3 opacity-70 pointer-events-none z-10">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center space-x-2 border border-white/20">
            <Touch className="w-3.5 h-3.5 text-white/90" />
            <span className="text-xs text-white/90 font-medium">toque</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <SEOHead
        title="O Espaço - Fazenda Moinho"
        description="Conheça a Fazenda Moinho: espaço completo para eventos com bangalô exclusivo, casarão colonial, jardins e 15 hectares de mata atlântica preservada. Localizada em Campo Limpo Paulista, a 50 min de São Paulo, com capacidade para até 500 convidados."
        canonical="/o-espaco"
        keywords="fazenda moinho espaço, bangalô para noivos campo limpo paulista, casarão colonial, eventos natureza são paulo, espaço casamento fazenda, jardins para eventos, mata atlântica"
        ogImage="https://res.cloudinary.com/dxsbtjqjv/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/v1752845194/IMG-20250717-WA0138_j1wpkj.jpg"
      />

      <div className="overflow-x-hidden">
        {/* Enhanced Gallery Showroom with Infinite Sliders */}
        <section 
          id="gallery-section" 
          className="pt-32 pb-16 sm:pb-20 md:pb-24 bg-black overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Explore Nossos{' '}
                <span className="text-[#FDF5E6]">
                  Ambientes
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                Cada canto do Exemplo conta uma história única e oferece cenários perfeitos para seus momentos especiais
              </p>
            </div>

            {/* Environment Galleries with Infinite Sliders */}
            <div className="space-y-16 sm:space-y-20">
              {galleryEnvironments.map((environment, envIndex) => (
                <div
                  key={envIndex}
                  className={`transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${envIndex * 200 + 400}ms` }}
                >
                  <div className="text-center mb-8 sm:mb-12 px-4">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                      {environment.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                      {environment.description}
                    </p>
                  </div>

                  <InfiniteSlider 
                    images={environment.images} 
                    direction={envIndex % 2 === 0 ? 'right' : 'left'}
                    environmentTitle={environment.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section 
          id="cta-section" 
          className="py-16 sm:py-20 md:py-24 bg-black text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-black" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                Pronto para Viver{' '}
                <span className="text-[#FDF5E6]">
                  Esta Experiência?
                </span>
              </h2>
              <p className="text-base sm:text-lg mb-8 sm:mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto px-4">
                Agende uma visita e descubra como podemos tornar seu evento extraordinário em nosso santuário natural.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                <button
                  onClick={() => {
                    // Se não estiver na home, navegar para home primeiro
                    if (window.location.pathname !== '/') {
                      window.location.href = '/#fale-conosco';
                      return;
                    }
                    
                    const element = document.getElementById('fale-conosco');
                    if (element) {
                      const headerHeight = 80;
                      const elementPosition = element.offsetTop - headerHeight;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="group bg-white text-green-800 px-8 sm:px-10 py-4 sm:py-5 rounded-md font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-base sm:text-lg shadow-2xl"
                >
                  <span className="group-hover:scale-110 transition-transform inline-block">
                    Solicitar Orçamento
                  </span>
                </button>
                <a
                  href="https://wa.me/5511989860204?text=Gostaria de agendar uma visita à Fazenda Moinho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-md font-bold hover:bg-white hover:text-green-800 transition-all duration-300 transform hover:scale-105 text-base sm:text-lg"
                >
                  <span className="group-hover:scale-110 transition-transform inline-block">
                    Agendar Visita
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        images={allImages}
        currentIndex={selectedImageIndex}
        onClose={closeModal}
        onNext={nextImage}
        onPrevious={previousImage}
      />

      <style jsx>{`
        @keyframes hero-fade-in {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * var(--carousel-translate-width)));
          }
        }
        
        .animate-hero-fade-in {
          animation: hero-fade-in 1.5s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slide-right 25s linear infinite;
        }
        
        .animate-slide-left {
          animation: slide-right 25s linear infinite reverse;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
};

export default OEspaco;
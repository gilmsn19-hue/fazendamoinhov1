import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, Camera, Heart } from 'lucide-react';
import ImageModal from '../ui/ImageModal';

const PhotoShowroom = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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

    const section = document.getElementById('photo-showroom');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Auto-slide for featured images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % featuredImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const featuredImages = [
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes/fazendamoinho/ambiente/img1destaque.jpg',
      alt: 'Vista panorâmica dos jardins da Fazenda Moinho',
      title: 'Arranjos Cinematográficos',
      description: 'Paisagens naturais que encantam'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ambiente/img1slideambiente_jbxd1b.jpg',
      alt: 'Vista panorâmica dos jardins da Fazenda Moinho',
      title: 'Jardins Exuberantes',
      description: 'Paisagens naturais que encantam'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ambiente/img4slideambiente_kxiv5y.jpg',
      alt: 'Cerimônia de casamento ao ar livre',
      title: 'Cerimônias Inesquecíveis',
      description: 'O altar perfeito para seu grande dia'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ambiente/img3slideambiente_x0vb4g.jpg',
      alt: 'Área de recepção elegante',
      title: 'Recepções Elegantes',
      description: 'Espaços sofisticados para celebrar'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ambiente/img2slideambiente_ca5kkx.jpg',
      alt: 'Vista aérea da propriedade',
      title: 'Natureza Preservada',
      description: 'Vasta área verde preservada'
    }
  ];

  const galleryImages = [
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ambiente/img1ambiente_vrqdxp.jpg',
      alt: 'Mesa de jantar ao ar livre decorada',
      category: 'Recepções'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ambiente/img2ambiente_pe5eb5.jpg',
      alt: 'Área de buffet gourmet',
      category: 'Gastronomia'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ambiente/img3ambiente_n7elzq.jpg',
      alt: 'Espaço para eventos corporativos',
      category: 'Corporativo'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ambiente/img4ambiente_d0qhzz.jpg',
      alt: 'Pista de dança iluminada',
      category: 'Entretenimento'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ambiente/img5ambiente_vw44ai.jpg',
      alt: 'Área kids segura e divertida',
      category: 'Família'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ambiente/img6ambiente_xtzg42.jpg',
      alt: 'Trilha na mata atlântica',
      category: 'Natureza'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ambiente/img7ambiente_jhfpeo.jpg',
      alt: 'Trilha na mata atlântica',
      category: 'Natureza'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ambiente/img8ambiente_zpusyy.jpg',
      alt: 'Trilha na mata atlântica',
      category: 'Natureza'
    },
    {
      src: 'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496035/IMG-20251001-WA0017_thaee0.jpg',
      alt: 'Detalhe da decoração de um evento',
      category: 'Decoração'
    }
  ];

  // Array combinado de todas as imagens para o modal
  const allModalImages = [
    // Imagens em destaque
    ...featuredImages.map(img => ({
      src: img.src,
      alt: img.alt,
      title: img.title
    })),
    // Imagens da galeria
    ...galleryImages.map(img => ({
      src: img.src,
      alt: img.alt,
      title: img.category
    }))
  ];

  const openModal = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % allModalImages.length);
  };

  const previousImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + allModalImages.length) % allModalImages.length);
  };

  return (
    <section id="photo-showroom" className="min-h-screen overflow-hidden">
      <section 
        id="photo-showroom" 
        className="min-h-screen overflow-hidden relative pt-10"
        style={{
          backgroundImage: ('url(https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ambiente/imgfundosecaoambiente_s8qeor.jpg'
),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay para garantir legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/5 via-transparent to-amber-900/5"></div>
        
        {/* Content wrapper com z-index para ficar acima dos overlays */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
            {/* Header - Title */}
            <div className={`text-center mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              {/* Enhanced title with artistic background */}
              <div className="relative inline-block">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-fazenda-white leading-tight font-montserrat">
                  Descubra a beleza de cada ambiente
                </h2>
                
                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-fazenda-sage/50 to-transparent"></div>
              </div>
            </div>

            {/* Header - Paragraph */}
            <div className={`text-center mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <p className="text-sm sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto font-helvetica">
                <span className="max-w-xl mx-auto block">
                  Cada recanto da Fazenda Moinho narra uma história singular, desdobrando cenários idílicos e perfeitamente adaptáveis para a concretização de momentos verdadeiramente inesquecíveis e personalizados
                </span>
              </p>
            </div>

        </div>

        {/* Featured Carousel com fundo preto de largura total */}
        <div className="max-w-5xl mx-auto relative z-[5] mb-8">
          <div className="px-4 sm:px-6 lg:px-8 bg-gradient-fade-bottom py-8 sm:py-10 lg:py-12">
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div 
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ 
                    transform: `translateX(-${currentSlide * 100}%)`,
                    height: '500px'
                  }}
                >
                  {featuredImages.map((image, index) => (
                    <div 
                      key={index} 
                      className="w-full flex-shrink-0 relative group cursor-pointer"
                      style={{ height: '500px' }}
                      onClick={() => openModal(index)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      
                      {/* Content */}
                      <div className="absolute bottom-8 left-8 right-8 text-white">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                          {image.title}
                        </h3>
                        <p className="text-lg opacity-90">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {featuredImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
            {/* Gallery Grid */}
            <div className={`mb-12 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-1 lg:gap-3">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                      index === 8 ? 'hidden md:block' : ''
                    }`}
                    onMouseEnter={() => setHoveredImage(index)}
                    onMouseLeave={() => setHoveredImage(null)}
                    onClick={() => openModal(featuredImages.length + index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 hover:brightness-110"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
                      hoveredImage === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute bottom-4 left-4 right-4 text-white transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs font-medium text-amber-400 uppercase tracking-wide">
                              {image.category}
                            </span>
                            <div className="flex items-center mt-1">
                              <Eye className="w-4 h-4 mr-1" />
                              <span className="text-sm">Ver detalhes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className={`transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              {/* Cards informativos */}
              <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                {/* Card 1 - Distância de SP */}
                <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-[#37614e] rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#FDF5E6] ring-1 ring-[#FDF5E6] ring-opacity-50">
                  <h3 className="text-lg font-bold text-white mb-2 text-center" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3), 0 0 16px rgba(255, 255, 255, 0.1)' }}>
                    Localização Privilegiada
                  </h3>
                  <p className="text-[#727474] text-sm text-center leading-relaxed">
                    <span className="text-white">A apenas 50 min da capital SP</span>
                  </p>
                </div>

                {/* Card 2 - Bangalô */}
                <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-[#37614e] rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#FDF5E6] ring-1 ring-[#FDF5E6] ring-opacity-50">
                  <h3 className="text-lg font-bold text-white mb-2 text-center" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3), 0 0 16px rgba(255, 255, 255, 0.1)' }}>
                    Bangalô Exclusivo
                  </h3>
                  <p className="text-[#727474] text-sm text-center leading-relaxed">
                    <span className="text-white">Bangalô completo para pernoite de noivos</span>
                  </p>
                </div>

                {/* Card 3 - Presentes */}
                <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-[#37614e] rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#FDF5E6] ring-1 ring-[#FDF5E6] ring-opacity-50">
                  <h3 className="text-lg font-bold text-white mb-2 text-center" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3), 0 0 16px rgba(255, 255, 255, 0.1)' }}>
                    Bangalô Convidados
                  </h3>
                  <p className="text-[#727474] text-sm text-center leading-relaxed">
                    <span className="text-white">Suítes para pernoite de convidados</span>
                  </p>
                </div>

                {/* Card 4 - Casarão */}
                <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-[#37614e] rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#FDF5E6] ring-1 ring-[#FDF5E6] ring-opacity-50">
                  <h3 className="text-lg font-bold text-white mb-2 text-center" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3), 0 0 16px rgba(255, 255, 255, 0.1)' }}>
                    Casarão Colonial
                  </h3>
                  <p className="text-[#727474] text-sm text-center leading-relaxed">
                    <span className="text-white">Casarão colonial com capacidade para 140 convidados</span>
                  </p>
                </div>

                {/* Card 5 - Bangalô Convidados */}
                <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-[#37614e] rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#FDF5E6] ring-1 ring-[#FDF5E6] ring-opacity-50">
                  <h3 className="text-lg font-bold text-white mb-2 text-center" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3), 0 0 16px rgba(255, 255, 255, 0.1)' }}>
                    Mimos Especiais
                  </h3>
                  <p className="text-[#727474] text-sm text-center leading-relaxed">
                    <span className="text-white">Presentes personalizados para os noivos no grande dia</span>
                  </p>
                </div>
              </div>
            </div>
        </div>
        
        {/* Nova seção com fundo verde - rodapé da seção */}
        <div className="relative z-10 py-12 bg-gradient-green-fade-top">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-x-2 items-center justify-center">
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-x-2 items-center justify-center">
                  <div>
                    <p className="text-sm text-white text-center mb-6 lg:mb-0 max-w-md lg:max-w-lg">
                      Descubra os diferenciais exclusivos que elevam seu evento a um patamar de excelência, tornando-o uma celebração memorável e verdadeiramente especial em cada detalhe
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link
                      to="/o-espaco"
                      className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex-shrink-0"
                    >
                      Ver Galeria de Fotos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Imagens */}
      <ImageModal
        isOpen={modalOpen}
        images={allModalImages}
        currentIndex={selectedImageIndex}
        onClose={closeModal}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </section>
  );
};

export default PhotoShowroom;
import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Leaf, Star, Heart } from 'lucide-react';
import ImageModal from '../ui/ImageModal';
import ImageSlider from '../ui/ImageSlider';

const NossoEspaco = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [syncTrigger, setSyncTrigger] = useState(0);
  const [counters, setCounters] = useState({
    experience: 0,
    events: 0,
    satisfaction: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalValues = {
    experience: 20,
    events: 500,
    satisfaction: 100
  };

  const desktopSliderImages = {
    topLeft: [
      'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img4hero_xyazci.jpg',
      'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496024/IMG-20251001-WA0026_oukqpv.jpg'
    ],
    topRight: [
      'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/imghero7_akr3hh.jpg',
'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759504814/WhatsApp_Image_2025-10-01_at_10.32.16_6cf5f1d5_lp8wvk.jpg'
    ],
    bottomLeft: [
      'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img5hero_ewcbxc.jpg',
'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759504904/WhatsApp_Image_2025-10-01_at_10.43.39_35927fdd_t3qszi.jpg'
    ],
    bottomRight: [
      'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img6hero_n2uy3q.jpg',
      'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img1slidehero.jpg'
    ]
  };

  const mobileSliderImages = {
    leftSlider: [
      'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img4hero_xyazci.jpg',
      'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img1slidehero.jpg'
    ],
    rightSlider: [
      'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img5hero_ewcbxc.jpg',
      'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img2slidehero.jpg'
    ],
    fullWidthSlider: [
      'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img6hero_n2uy3q.jpg',
'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759504904/WhatsApp_Image_2025-10-01_at_10.43.39_35927fdd_t3qszi.jpg'
    ],
    largeSlider: [
      'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/imghero7_akr3hh.jpg',
      'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496024/IMG-20251001-WA0026_oukqpv.jpg'
    ],
    smallTopRightSlider: [
      'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img8hero_sdoykt.jpg',
'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759504814/WhatsApp_Image_2025-10-01_at_10.32.16_6cf5f1d5_lp8wvk.jpg'
    ],
    smallBottomRightSlider: [
      'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img9hero_tsuqqm.jpg',
'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img3slidehero.jpg'
    ]
  };

  const modalImages = [
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img1hero_ajfpeo.jpg',
      alt: 'Vista panorâmica dos jardins da Fazenda Moinho com área para cerimônias ao ar livre',
      title: 'Vista Panorâmica dos Jardins'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img2hero_sseflb.jpg',
      alt: 'Área de recepção da Fazenda Moinho com decoração elegante para eventos',
      title: 'Área de Recepção'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img3hero_ljsutu.jpg',
      alt: 'Casarão colonial da Fazenda Moinho com capacidade para 140 convidados',
      title: 'Casarão Colonial'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img4hero_xyazci.jpg',
      alt: 'Jardim principal da Fazenda Moinho',
      title: 'Jardim Principal'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img5hero_ewcbxc.jpg',
      alt: 'Área de eventos da Fazenda Moinho',
      title: 'Área de Eventos'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img6hero_n2uy3q.jpg',
      alt: 'Cerimônia ao ar livre na Fazenda Moinho',
      title: 'Cerimônia ao Ar Livre'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/imghero7_akr3hh.jpg',
      alt: 'Vista principal do espaço da Fazenda Moinho',
      title: 'Vista Principal do Espaço'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img8hero_sdoykt.jpg',
      alt: 'Lago natural da Fazenda Moinho',
      title: 'Lago Natural'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img9hero_tsuqqm.jpg',
      alt: 'Trilhas naturais da Fazenda Moinho',
      title: 'Trilhas Naturais'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img1slidehero.jpg',
      alt: 'Vista alternativa do espaço da Fazenda Moinho',
      title: 'Vista Alternativa do Espaço'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img2slidehero.jpg',
      alt: 'Área externa da Fazenda Moinho',
      title: 'Área Externa'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img3slidehero.jpg',
      alt: 'Detalhes do espaço da Fazenda Moinho',
      title: 'Detalhes do Espaço'
    }
  ];

  const openModal = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setModalOpen(true);
  };

  const openModalByUrl = (imageUrl: string) => {
    const index = modalImages.findIndex(img => img.src === imageUrl);
    if (index !== -1) {
      setSelectedImageIndex(index);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % modalImages.length);
  };

  const previousImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            startCounters();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const syncInterval = setInterval(() => {
      setSyncTrigger(prev => prev + 1);
    }, 5000);

    return () => clearInterval(syncInterval);
  }, [isVisible]);

  const startCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        experience: Math.floor(finalValues.experience * progress),
        events: Math.floor(finalValues.events * progress),
        satisfaction: Math.floor(finalValues.satisfaction * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(finalValues);
      }
    }, stepDuration);
  };

  const stats = [
    {
      icon: Star,
      text: `+${counters.experience} anos de experiência`,
      iconColor: 'text-[#c8d0cd]'
    },
    {
      icon: Users,
      text: `+${counters.events} eventos realizados`,
      iconColor: 'text-[#37614e]'
    },
    {
      icon: Heart,
      text: `${counters.satisfaction}% satisfação garantida`,
      iconColor: 'text-[#727474]'
    }
  ];

  return (
    <section ref={sectionRef} id="nosso-espaco" className="py-16 sm:py-20 lg:py-24 bg-[#fefefe] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-16 items-start">
          {/* Content - Lado esquerdo */}
          <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 flex flex-col h-full ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="space-y-4 lg:space-y-6 flex-1">
              {/* Enhanced title with artistic background */}
              <div className="relative mb-6 lg:mb-8">
                <h2 className="text-[32px] sm:text-4xl lg:text-5xl font-light text-fazenda-dark-brown leading-tight font-montserrat">
                  Espaço que inspira momentos inesquecíveis
                </h2>
                
                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-fazenda-sage/50 to-transparent"></div>
              </div>
              
              <p className="text-[14px] sm:text-base text-[#727474] leading-relaxed font-helvetica">
  A Fazenda Moinho Eventos nasceu do sonho de transformar a natureza em cenário para histórias inesquecíveis. Acolhedora, elegante e cheia de personalidade, a Fazenda reúne estrutura, liberdade e afeto para que cada celebração seja única.
              </p>
              
              <p className="text-[14px] sm:text-base text-[#727474] leading-relaxed font-helvetica">
                Nossa missão é proporcionar experiências autênticas, conectadas à natureza e ao estilo de vida de cada casal. Valorizamos o cuidado, a liberdade criativa e a beleza que existe nos <span className="text-fazenda-dark-brown font-semibold">pequenos detalhes</span>.
              </p>
              
              {/* Terceiro parágrafo - apenas desktop */}
              <p className="hidden lg:block text-[14px] sm:text-base text-[#727474] leading-relaxed font-helvetica">
                Aqui, cada evento é pensado de forma única, respeitando a personalidade dos anfitriões e criando memórias que durarão para sempre. Nossa equipe especializada acompanha cada etapa do planejamento, garantindo que sua celebração seja exatamente como você sempre sonhou.
              </p>
            </div>

            {/* Grid de imagens pequenas - Desktop: 3 colunas, Mobile: 3 colunas */}
            <div className="grid grid-cols-3 gap-1 lg:gap-1 mt-8">
              <div className="aspect-square rounded-lg overflow-hidden cursor-pointer" onClick={() => openModal(0)}>
                <img
                  src="https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img1hero_ajfpeo.jpg"
                  alt="Vista panorâmica dos jardins da Fazenda Moinho com área para cerimônias ao ar livre"
                  width="300"
                  height="300"
                  loading="eager"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 hover:brightness-110"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden cursor-pointer" onClick={() => openModal(1)}>
                <img
                  src="https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img2hero_sseflb.jpg"
                  alt="Área de recepção da Fazenda Moinho com decoração elegante para eventos"
                  width="300"
                  height="300"
                  loading="eager"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 hover:brightness-110"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden cursor-pointer" onClick={() => openModal(2)}>
                <img
                  src="https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/hero/img3hero_ljsutu.jpg"
                  alt="Casarão colonial da Fazenda Moinho com capacidade para 140 convidados"
                  width="300"
                  height="300"
                  loading="eager"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 hover:brightness-110"
                />
              </div>
            </div>
          </div>

          {/* Grid de imagens - Lado direito */}
          <div className={`relative transition-all duration-1000 delay-300 flex flex-col h-full ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            {/* Layout Desktop */}
            <div className="hidden lg:block h-full">
              <div className="grid grid-cols-2 gap-2 h-full">
                {/* Slider 1 - Primeira linha, primeira coluna */}
                <div className="flex-1 relative">
                  <div className="h-full rounded-lg overflow-hidden cursor-pointer relative">
                    <ImageSlider
                      images={desktopSliderImages.topLeft}
                      alt="Jardim principal"
                      interval={5000}
                      className=""
                      onClick={(imageUrl) => openModalByUrl(imageUrl)}
                      showControls={false}
                      showIndicators={false}
                      syncTrigger={syncTrigger}
                    />
                  </div>
                </div>

                {/* Slider 2 - Primeira linha, segunda coluna */}
                <div className="flex-1 relative">
                  <div className="h-full rounded-lg overflow-hidden cursor-pointer relative">
                    <ImageSlider
                      images={desktopSliderImages.topRight}
                      alt="Área de eventos"
                      interval={5000}
                      className=""
                      onClick={(imageUrl) => openModalByUrl(imageUrl)}
                      showControls={false}
                      showIndicators={false}
                      syncTrigger={syncTrigger}
                    />
                  </div>
                </div>

                {/* Slider 3 - Segunda linha, primeira coluna */}
                <div className="flex-1 relative">
                  <div className="h-full rounded-lg overflow-hidden cursor-pointer relative">
                    <ImageSlider
                      images={desktopSliderImages.bottomLeft}
                      alt="Cerimônia ao ar livre"
                      interval={5000}
                      className=""
                      onClick={(imageUrl) => openModalByUrl(imageUrl)}
                      showControls={false}
                      showIndicators={false}
                      syncTrigger={syncTrigger}
                    />
                  </div>
                </div>

                {/* Slider 4 - Segunda linha, segunda coluna */}
                <div className="flex-1 relative">
                  <div className="h-full rounded-lg overflow-hidden cursor-pointer relative">
                    <ImageSlider
                      images={desktopSliderImages.bottomRight}
                      alt="Vista principal do espaço"
                      interval={5000}
                      className=""
                      onClick={(imageUrl) => openModalByUrl(imageUrl)}
                      showControls={false}
                      showIndicators={false}
                      syncTrigger={syncTrigger}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Layout Mobile - Grid responsivo para telas menores que 641px */}
            <div className="lg:hidden">
              <div className="space-y-2">
                {/* Primeira linha: 1 imagem à direita, 1 à esquerda */}
                <div className="grid grid-cols-2 gap-1">
                  <div className="aspect-square rounded-lg overflow-hidden cursor-pointer relative">
                    <ImageSlider
                      images={mobileSliderImages.leftSlider}
                      alt="Jardim principal"
                      interval={5000}
                      className="hover:scale-105 transition-transform duration-700 hover:brightness-110"
                      onClick={(imageUrl) => openModalByUrl(imageUrl)}
                      showControls={false}
                      showIndicators={false}
                      syncTrigger={syncTrigger}
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden cursor-pointer relative">
                    <ImageSlider
                      images={mobileSliderImages.rightSlider}
                      alt="Área de eventos"
                      interval={5000}
                      className="hover:scale-105 transition-transform duration-700 hover:brightness-110"
                      onClick={(imageUrl) => openModalByUrl(imageUrl)}
                      showControls={false}
                      showIndicators={false}
                      syncTrigger={syncTrigger}
                    />
                  </div>
                </div>

                {/* Segunda linha: 1 imagem inteira */}
                <div className="aspect-[2/1] rounded-lg overflow-hidden cursor-pointer relative">
                  <ImageSlider
                    images={mobileSliderImages.fullWidthSlider}
                    alt="Cerimônia ao ar livre"
                    interval={5000}
                    className="hover:scale-105 transition-transform duration-700 hover:brightness-110"
                    onClick={(imageUrl) => openModalByUrl(imageUrl)}
                    showControls={false}
                    showIndicators={false}
                    syncTrigger={syncTrigger}
                  />
                </div>
                
                {/* Terceira linha: 1 slider grande à esquerda, 2 miniaturas estáticas à direita - formato retrato */}
                <div className="grid grid-cols-3 gap-1">
                  {/* Slider grande à esquerda - formato retrato */}
                  <div className="col-span-2 aspect-[2/3] rounded-lg overflow-hidden cursor-pointer relative">
                    <ImageSlider
                      images={mobileSliderImages.largeSlider}
                      alt="Vista panorâmica"
                      interval={5000}
                      className=""
                      onClick={(imageUrl) => openModalByUrl(imageUrl)}
                      showControls={false}
                      showIndicators={false}
                      syncTrigger={syncTrigger}
                    />
                  </div>

                  {/* Container dos dois sliders pequenos à direita */}
                  <div className="flex flex-col gap-1">
                    {/* Primeiro slider pequeno à direita */}
                    <div className="flex-1 rounded-lg overflow-hidden cursor-pointer relative">
                      <ImageSlider
                        images={mobileSliderImages.smallTopRightSlider}
                        alt="Lago natural"
                        interval={5000}
                        className=""
                        onClick={(imageUrl) => openModalByUrl(imageUrl)}
                        showControls={false}
                        showIndicators={false}
                        syncTrigger={syncTrigger}
                      />
                    </div>

                    {/* Segundo slider pequeno à direita */}
                    <div className="flex-1 rounded-lg overflow-hidden cursor-pointer relative">
                      <ImageSlider
                        images={mobileSliderImages.smallBottomRightSlider}
                        alt="Trilhas naturais"
                        interval={5000}
                        className=""
                        onClick={(imageUrl) => openModalByUrl(imageUrl)}
                        showControls={false}
                        showIndicators={false}
                        syncTrigger={syncTrigger}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section - Full width below all images */}
        <div
  className={`mt-2 lg:mt-12 transition-all duration-1000 delay-500 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
  }`}
>
  <div className="w-full rounded-lg overflow-hidden shadow-2xl">
    <video
      className="w-full h-auto"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source
        src="https://res.cloudinary.com/dbsvu9vo0/video/upload/v1759492130/fazendamoinhovideoeventocomp_mncqfq.mp4"
        type="video/mp4"
      />
      Seu navegador não suporta a reprodução de vídeos.
    </video>
  </div>
</div>

        {/* Stats com animação de contagem - Layout minimalista com cores originais */}
        <div className={`mt-16 lg:mt-20 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Card 1 - Experiência */}
            <div 
              className="group bg-[#FDF5E6] rounded-2xl p-6 lg:p-8 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl border border-gray-100"
              style={{ transitionDelay: '0ms' }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="https://xn--suatransformao-2hb7d.com/wp-content/uploads/2025/07/five-stars.png"
                    alt="Ícone de cinco estrelas representando experiência"
                    className="w-12 h-12 lg:w-14 lg:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[#727474] text-sm lg:text-base leading-relaxed">
                    Com mais de 2 anos de experiência, transformamos cada evento em uma celebração única, unindo excelência, carinho e atenção aos detalhes desde o primeiro atendimento até o grande dia.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Eventos Realizados */}
            <div 
              className="group bg-[#FDF5E6] rounded-2xl p-6 lg:p-8 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl border border-gray-100"
              style={{ transitionDelay: '150ms' }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="https://xn--suatransformao-2hb7d.com/wp-content/uploads/2025/07/heart.png"
                    alt="Ícone de like representando eventos realizados"
                    className="w-12 h-12 lg:w-14 lg:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[#727474] text-sm lg:text-base leading-relaxed">
                    Ao longo de nossa trajetória, já realizamos e concretizamos dezenas de sonhos, sempre com dedicação e personalização - cada um com sua história, estilo e emoção própria.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Convidados */}
            <div 
              className="group bg-[#FDF5E6] rounded-2xl p-6 lg:p-8 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl border border-gray-100"
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="https://xn--suatransformao-2hb7d.com/wp-content/uploads/2025/07/guest.png"
                    alt="Ícone de convidados representando pessoas atendidas"
                    className="w-12 h-12 lg:w-14 lg:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[#727474] text-sm lg:text-base leading-relaxed">
                    Milhares de convidados já passaram por aqui, vivenciando momentos especiais com conforto, em um ambiente pensado para encantar do início ao fim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Imagens */}
      <ImageModal
        isOpen={modalOpen}
        images={modalImages}
        currentIndex={selectedImageIndex}
        onClose={closeModal}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </section>
  );
};

export default NossoEspaco;
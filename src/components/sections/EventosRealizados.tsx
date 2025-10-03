import React, { useState, useEffect } from 'react';
import { Heart, Gift, Briefcase, Camera } from 'lucide-react';

const EventosRealizados = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImages, setCurrentImages] = useState<{[key: number]: number}>({});
  const [highlightedCards, setHighlightedCards] = useState<Set<number>>(new Set());

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

    const section = document.getElementById('eventos-realizados');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Observer for individual cards to trigger yellow highlight
  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-card-index') || '0');
            setHighlightedCards(prev => new Set([...prev, cardIndex]));
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px' }
    );

    // Observe all event cards
    const cards = document.querySelectorAll('[data-card-index]');
    cards.forEach(card => cardObserver.observe(card));

    return () => cardObserver.disconnect();
  }, [isVisible]);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(prev => {
        const newImages = { ...prev };
        eventos.forEach((_, index) => {
          const currentIndex = newImages[index] || 0;
          newImages[index] = (currentIndex + 1) % eventos[index].images.length;
        });
        return newImages;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const eventos = [
    {
      title: 'Casamentos e Mini Weddings',
      description: 'Cerimônias românticas e celebrações íntimas em cenários únicos onde o amor ganha vida em meio à natureza exuberante',
      images: [
        'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496032/IMG-20251001-WA0021_ngpklx.jpg',
        'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496023/IMG-20251001-WA0029_m8uy9b.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casamentoeminiwedding/img1casamentos_gqobrh.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casamentoeminiwedding/img2casamentos_efytfs.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casamentoeminiwedding/img3casamentos_nct0c0.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casamentoeminiwedding/img4casamentos_px8ult.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casamentoeminiwedding/img5casamentos_wqwakb.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/casamentoeminiwedding/ultimaimgcasamentos_u38bcf.jpg'
      ],
      icon: Heart
    },
    {
      title: 'Aniversários',
      description: 'Celebrações especiais de todas as idades em um ambiente acolhedor e cheio de alegria, criando memórias inesquecíveis',
      images: [
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/aniversarios/IMG-20250721-WA0061_kbx8do.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/aniversarios/IMG-20250721-WA0062_cmzprt.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/aniversarios/IMG-20250721-WA0063_inlozr.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/aniversarios/IMG-20250721-WA0064_rhq252.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/aniversarios/IMG-20250721-WA0065_zmjj1w.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/aniversarios/IMG-20250721-WA0066_wp8gnr.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/aniversarios/IMG-20250721-WA0067_zmv80y.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/aniversarios/IMG-20250721-WA0068_yoemzp.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/aniversarios/IMG-20250721-WA0069_iimuga.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/aniversarios/IMG-20250721-WA0070_zpqhsc.jpg',
                                                'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/aniversarios/IMG-20250721-WA0071_tdfivs.jpg',
                                                'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/aniversarios/IMG-20250721-WA0072_vv5225.jpg',
      
'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/aniversarios/IMG-20250721-WA0073_jefjlx.jpg',
        
'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/aniversarios/IMG-20250721-WA0074_sbxvnp.jpg',
        
'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/aniversarios/IMG-20250721-WA0075_cvr4hh.jpg'
      ],
      icon: Gift
    },
    {
      title: 'Eventos Corporativos',
      description: 'Brunchs, encontros femininos, confraternizações e reuniões empresariais em um ambiente inspirador que conecta equipes',
      images: [
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/eventoscorporativos/IMG-20250717-WA0060_ux6eyv.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/eventoscorporativos/IMG-20250721-WA0045_jjzr3p.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/eventoscorporativos/IMG-20250721-WA0046_vcmane.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/eventoscorporativos/IMG-20250721-WA0047_f0tqod.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/eventoscorporativos/IMG-20250721-WA0048_o9uzib.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/eventoscorporativos/IMG-20250721-WA0053_qtiuwt.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/eventoscorporativos/IMG-20250721-WA0054_j8v04g.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/eventoscorporativos/IMG-20250721-WA0055_d4weqz.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/eventoscorporativos/IMG-20250721-WA0056_v0eabf.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/eventoscorporativos/IMG-20250721-WA0057_cpnnxh.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/eventoscorporativos/IMG-20250721-WA0058_jsvtbb.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/eventoscorporativos/IMG-20250721-WA0059_jof3kj.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/eventoscorporativos/WhatsApp_Image_2025-07-21_at_17.34.08_2dbf6f6c_zhze9z.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/eventoscorporativos/WhatsApp_Image_2025-07-21_at_17.34.08_c57ef8d5_nkcmoc.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/eventoscorporativos/IMG-20250721-WA0060_t0zscr.jpg'
      ],
      icon: Briefcase
    },
    {
      title: 'Ensaios Fotográficos e Pré-Weddings',
      description: 'Sessões fotográficas em cenários naturais únicos com luz perfeita, capturando momentos especiais e eternizando memórias',
      images: [
        'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496036/IMG-20251001-WA0012_nczmrq.jpg',
        'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496036/IMG-20251001-WA0015_ccp2ig.jpg',
        'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496010/IMG-20251001-WA0048_veyw0i.jpg',
        'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496011/IMG-20251001-WA0045_zibyod.jpg',
        'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496016/IMG-20251001-WA0037_ptffbo.jpg',
        'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496019/IMG-20251001-WA0033_tqrwbl.jpg',
        'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496020/IMG-20251001-WA0031_drqw7a.jpg',
        'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496024/IMG-20251001-WA0027_akaxgp.jpg',
        'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496028/IMG-20251001-WA0023_dikalc.jpg',
        'https://res.cloudinary.com/dbsvu9vo0/image/upload/v1759496029/IMG-20251001-WA0022_ee2flt.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ensaioseprewedding/IMG-20250717-WA0121_uy6yfa.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ensaioseprewedding/IMG-20250717-WA0165_padlco.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ensaioseprewedding/IMG-20250721-WA0027_swmpdm.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ensaioseprewedding/IMG-20250721-WA0028_wpu0qf.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ensaioseprewedding/IMG-20250721-WA0029_asxt52.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ensaioseprewedding/IMG-20250721-WA0030_j0xngg.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ensaioseprewedding/IMG-20250721-WA0032_vlfusc.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ensaioseprewedding/IMG-20250721-WA0033_ofqqwp.jpg',
        'https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/ensaioseprewedding/IMG-20250721-WA0034_mw4nxe.jpg'
      ],
      icon: Camera
    }
  ];

  return (
    <section id="eventos-realizados" className="pt-20 lg:pt-28 pb-16 lg:pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Enhanced title with artistic background */}
          <div className="relative inline-block mb-8">
            <h2 className="text-[32px] sm:text-5xl lg:text-6xl font-light text-fazenda-dark-brown leading-tight font-montserrat">
              Criamos experiências inesquecíveis
            </h2>
            
            {/* Subtle accent line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-fazenda-sage/50 to-transparent"></div>
          </div>
        </div>

        {/* Paragraph section with equal spacing */}
        <div className={`text-center mb-8 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-[14px] sm:text-base text-[#727474] max-w-3xl mx-auto leading-relaxed">
            <span className="max-w-2xl mx-auto block">
              Compreendemos que cada evento é singular e, por isso, merece um cenário que não apenas atenda, mas supere as expectativas, transformando seus sonhos em uma realidade deslumbrante e inesquecível
            </span>
          </p>
        </div>

        {/* Enhanced Events Grid */}
        <div className={`space-y-8 lg:space-y-12 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {eventos.map((evento, index) => {
            const IconComponent = evento.icon;
            const isEven = index % 2 === 0;
            const currentImageIndex = currentImages[index] || 0;
            const isHighlighted = highlightedCards.has(index);
            
            return (
              <div
                key={index}
                data-card-index={index}
                className={`group transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200 + 600}ms` }}
              >
                <div className={`highlight-card rounded-3xl overflow-hidden transition-all duration-1000 ${
                  isHighlighted ? 'highlighted' : ''
                }`}>
                  <div className={`grid lg:grid-cols-2 gap-0 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                    {/* Enhanced Image Section */}
                    <div className={`relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="aspect-[4/3] lg:aspect-[3/2] relative">
                        <img
                          src={evento.images[currentImageIndex]}
                          alt={evento.title}
                          className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 ${
                            evento.images[currentImageIndex] === 'https://res.cloudinary.com/dxsbtjqjv/image/upload/v1753199672/IMG-20250721-WA0039_gcy4fq.jpg' ||
                            evento.images[currentImageIndex] === 'https://res.cloudinary.com/dxsbtjqjv/image/upload/v1753199672/IMG-20250721-WA0037_f5g6g3.jpg'
                            ? 'object-top' 
                            : 'object-center'
                          }`}
                          loading="lazy"
                        />
                        
                        {/* Enhanced Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Professional Image Indicators */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {evento.images.map((_, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                imgIndex === currentImageIndex 
                                  ? 'bg-white shadow-lg scale-125' 
                                  : 'bg-white/60 hover:bg-white/80'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Content Section */}
                    <div className={`p-8 lg:p-12 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="space-y-6">
                        {/* Enhanced Title */}
                        <h3 className="text-[32px] lg:text-4xl font-bold text-gray-800 leading-tight group-hover:text-[#37614e] transition-colors duration-300 font-montserrat">
                          {evento.title}
                        </h3>
                        
                        {/* Enhanced Description */}
                        <p className="text-[14px] sm:text-base text-gray-700 leading-relaxed font-helvetica">
                          {evento.description}
                        </p>

                        {/* Professional CTA - Updated with minimal border radius */}
                        <div className="pt-4">
                          <button 
                            onClick={() => {
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
                            className="inline-flex items-center bg-[#FDF5E6] hover:bg-[#FDF5E6] text-gray-800 group-hover:text-[#37614e] px-6 py-3 rounded-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl opacity-100"
                          >
                            <span>Solicitar orçamento</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Blockquote */}
      </div>

      {/* CTA Section with Green Background - Full Width */}
      <div className="bg-[#FDF5E6] mt-12 lg:mt-16 -mb-16 sm:-mb-20 lg:-mb-24 relative">
        {/* Gradiente superior */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/10 to-transparent"></div>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-x-2 items-center justify-center">
            <blockquote className="mb-6 lg:mb-0 text-center">
              <p className="text-gray-800 text-sm font-light leading-relaxed font-helvetica max-w-md lg:max-w-lg">
                Nossa dedicação e atenção aos detalhes garantem que cada evento seja executado com perfeição e supere suas expectativas.
              </p>
            </blockquote>
            
            <div className="flex justify-center">
              <button
                onClick={() => window.open('https://wa.me/5511989860204?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20algumas%20informações.', '_blank')}
                className="inline-flex items-center border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Falar Com Equipe
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .highlight-card {
          background: white;
          box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          position: relative;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .highlight-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(200, 208, 205, 0) 0%, 
            rgba(200, 208, 205, 0.15) 25%, 
            rgba(200, 208, 205, 0.2) 50%, 
            rgba(200, 208, 205, 0.15) 75%, 
            rgba(200, 208, 205, 0) 100%
          );
          border-radius: inherit;
          opacity: 0;
          transform: translateX(-100%);
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
          pointer-events: none;
        }

        .highlight-card.highlighted::before {
          opacity: 1;
          transform: translateX(0%);
          animation: highlightSweep 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .highlight-card.highlighted {
          box-shadow: 
            0px 8px 25px 3px rgba(200, 208, 205, 0.25),
            0px 4px 12px 2px rgba(0, 0, 0, 0.1);
          border-color: rgba(200, 208, 205, 0.3);
          transform: translateY(-2px);
        }

        .highlight-card > * {
          position: relative;
          z-index: 2;
        }

        @keyframes highlightSweep {
          0% {
            opacity: 0;
            transform: translateX(-100%) scale(0.8);
          }
          25% {
            opacity: 0.8;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translateX(0%) scale(1.02);
          }
          75% {
            opacity: 0.6;
            transform: translateX(50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(100%) scale(0.8);
          }
        }

        .highlight-card:hover {
          box-shadow: 
            0px 12px 30px 4px rgba(200, 208, 205, 0.15),
            0px 6px 20px 3px rgba(0, 0, 0, 0.1);
          border-color: rgba(200, 208, 205, 0.4);
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
};

export default EventosRealizados;
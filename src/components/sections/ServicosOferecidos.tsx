import React, { useState, useEffect } from 'react';

const ServicosOferecidos = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById('servicos-oferecidos');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const servicos = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      ),
      title: 'Estacionamento',
      description: 'Amplo estacionamento gratuito para todos os convidados'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Gerador de Emergência',
      description: 'Garantindo segurança para todo evento'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Pernoite para Noivos',
      description: 'Bangalô exclusivo para os noivos no grande dia'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
        </svg>
      ),
      title: '3 Suítes Extras',
      description: 'Suítes adicionais para pernoite de familiares e padrinhos'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Liberdade na Escolha de Fornecedores',
      description: 'Você poderá contratar os profissionais de sua preferência'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Banheiro para Staff',
      description: 'Instalações separadas para equipe de trabalho'
    }
  ];

  return (
    <section 
      id="servicos-oferecidos" 
      className="py-16 lg:py-20 overflow-hidden relative"
      style={{
        backgroundImage: 'url("https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/servicosoferecidos/imgfundosecaoservicos_osbyko1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay com desfoque para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="relative inline-block mb-4 lg:mb-6">            
          <div className="relative inline-block mb-6 lg:mb-8">            
            <h2 className="text-[32px] sm:text-4xl lg:text-5xl font-light text-white leading-tight font-montserrat">
              Serviços Oferecidos
            </h2>
            
            {/* Subtle accent line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-fazenda-sage/50 to-transparent"></div>
          </div>
          </div>
          
          <p className="text-[14px] sm:text-base text-[#727474] max-w-3xl mx-auto leading-relaxed font-helvetica">
          <p className="text-sm sm:text-base text-white max-w-3xl mx-auto leading-relaxed font-helvetica">
            <span className="max-w-2xl mx-auto block">
              Disponibilizamos uma infraestrutura abrangente e meticulosamente planejada para assegurar o êxito absoluto do seu evento, desde o planejamento inicial até a execução impecável
            </span>
          </p>
          </p>
        </div>

        {/* Grid de serviços */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {servicos.map((servico, index) => (
            <div
              key={index}
              className={`group bg-gray-50 hover:bg-white rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:shadow-lg border border-gray-100 transform hover:scale-105 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 600}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#37614e] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {servico.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#37614e] mb-2">
                    {servico.title}
                  </h3>
                  <p className="text-[#727474] text-sm leading-relaxed">
                    {servico.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA da seção */}
        <div className={`text-center transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-[#727474] mb-6 text-base leading-relaxed max-w-2xl mx-auto">
          <p className="text-white mb-6 text-sm leading-relaxed max-w-2xl mx-auto">
            <span className="max-w-xl mx-auto block">
              Cada um de nossos serviços é concebido com o propósito primordial de proporcionar o máximo conforto, conveniência e praticidade, tanto para você quanto para todos os seus convidados, garantindo uma experiência fluida e agradável
            </span>
          </p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="inline-flex items-center justify-center bg-[#37614e] hover:bg-[#2d4d3e] text-white px-8 py-4 rounded-sm font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              Solicitar orçamento
            </button>
            <a
              href="https://wa.me/5511989860204?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20visita."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-[#37614e] hover:text-white px-8 py-4 rounded-sm font-bold transition-all transform hover:scale-105"
            >
              Agendar Visita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicosOferecidos;
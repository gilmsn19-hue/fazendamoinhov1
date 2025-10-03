import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls
        controlsList="nodownload noremoteplayback noplaybackrate"
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover hero-video"
        width="1920"
        height="1080"
        onLoadedData={(e) => {
          const video = e.target as HTMLVideoElement;
          video.play();
        }}
        onContextMenu={(e) => e.preventDefault()}
        aria-label="Vídeo de apresentação da Fazenda Moinho mostrando os jardins e espaços para eventos"
      >
        <source
          src="https://raw.githubusercontent.com/gilmsn19-hue/imagens-clientes/main/fazendamoinho/hero/fazenda_moinho_video_hero_eldzhr_1cef56.mp4"
          type="video/mp4"
        />
        <track kind="captions" src="" label="Português" default />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-left text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-0">
        <h1 className="text-[40px] font-light mb-4 sm:mb-6 leading-tight font-montserrat text-white">
          Viva seu grande dia com autenticidade, cercado por natureza.
        </h1>
        
        <p className="text-sm mb-6 sm:mb-8 font-light max-w-2xl opacity-90 leading-relaxed font-helvetica">
          O cenário perfeito para seus momentos mais especiais. 
          Elegância, natureza e sofisticação em harmonia.
        </p>

        {/* Botões em grid 2 colunas no desktop */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-sm sm:max-w-lg">
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
            className="w-full bg-[#37614e] hover:bg-[#2d4d3e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-sm sm:text-base font-medium transition-colors text-center"
          >
            Solicitar orçamento
          </button>
          <a
            href="https://wa.me/5511989860204?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20visita."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-white text-white hover:bg-white hover:text-[#37614e] px-6 sm:px-8 py-3 sm:py-4 rounded-md text-sm sm:text-base font-medium transition-colors text-center"
          >
            Agendar Visita
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
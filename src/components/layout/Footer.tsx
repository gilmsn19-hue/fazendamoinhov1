import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Heart, Clock } from 'lucide-react';

const Footer = () => {
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

    const footer = document.getElementById('footer');
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      id="footer" 
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: 'url(https://cdn.jsdelivr.net/gh/gilmsn19-hue/imagens-clientes@main/fazendamoinho/footer/fundofooter.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid layout - mobile: 1 column, desktop: 3 columns */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-0">
          {/* Company Info - Primeira coluna */}
          <div className={`space-y-4 lg:border-r lg:border-gray-700 lg:pr-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform p-1">
                <img 
                  src="https://res.cloudinary.com/dbsvu9vo0/image/upload/v1755262798/Fazenda_Moinho_Logo_RemovedBackg._pwx0om.png"
                  alt="Fazenda Moinho Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold font-montserrat">Fazenda Moinho</span>
            </Link>
            <p className="text-white leading-relaxed font-helvetica">
              Criando experiências extraordinárias ao ar livre no coração da natureza em Campo Limpo Paulista. 
              Seu evento dos sonhos aguarda em nosso santuário natural.
            </p>
            <div className="flex space-x-4 justify-start">
              <a href="https://www.instagram.com/fazendamoinhoeventos/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300" aria-label="Instagram">
                <div className="w-8 h-8 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:from-[#7B2CBF] hover:via-[#E91E63] hover:to-[#FF9800] rounded-lg flex items-center justify-center transition-all duration-300">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </a>
              <a href="https://www.casamentos.com.br/fazenda-casamento/fazenda-moinho-eventos--e382253" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300" aria-label="Casamentos.com.br">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
              </a>
            </div>
          </div>

          {/* Navigation Links + Services - Segunda coluna */}
          <div className={`space-y-4 lg:border-r lg:border-gray-700 lg:px-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h3 className="text-lg font-semibold text-white">Navegação</h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link to="/o-espaco" className="hover:text-white/80 transition-colors">
                  O Espaço
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white/80 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="hover:text-white/80 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="hover:text-white/80 transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>

            {/* Services moved here */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white">Serviços</h3>
              <ul className="space-y-2 text-white">
                <li>Casamentos e Mini Weddings</li>
                <li>Aniversários</li>
                <li>Eventos Corporativos</li>
                <li>Ensaios Fotográficos e Pré-Weddings</li>
              </ul>
            </div>
          </div>

          {/* Contact Info - Terceira coluna */}
          <div className={`space-y-4 lg:pl-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h3 className="text-lg font-semibold text-white">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <a href="tel:+5511989860204" className="text-white hover:text-white/80 transition-colors">
                  (11) 98986-0204
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <a href="mailto:contato@fazendamoinho.com.br" className="text-white hover:text-white/80 transition-colors">
                  contato@fazendamoinho.com.br
                </a>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white">Endereço</h4>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                  <span className="text-white">
                    Estrada das Rosas, 160 – Bairro: Moinho<br />
                    Campo Limpo Paulista – SP – CEP: 13.236-559
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white">Horário de Atendimento</h4>
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                  <span className="text-white leading-relaxed">
                    Segunda a sexta: 9h às 20h<br />
                    Sábado: 9h às 15h<br />
                    <span className="text-xs">(Atendimentos com horário agendado)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 pt-6 border-t border-gray-700 text-left text-white/80 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-sm">&copy; 2025 Fazenda Moinho - Eventos ao Ar Livre. Todos os direitos reservados.</p>
          <p className="mt-1 text-xs">Criando memórias no abraço da natureza em Campo Limpo Paulista.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
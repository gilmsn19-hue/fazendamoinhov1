import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  // Função para scroll suave para seções
  const scrollToSection = (sectionId: string) => {
    // Sempre navega com hash, permitindo que Home.tsx lide com a rolagem
    navigate(`/#${sectionId}`);
    
    // Fecha o menu e o dropdown imediatamente
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Seções da home page para o dropdown
  const homeSections = [
    { label: 'Início', action: () => {
      if (location.pathname !== '/') {
        navigate('/');
        return;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
    }},
    { label: 'Nosso Espaço', action: () => scrollToSection('nosso-espaco') },
    { label: 'Galeria', action: () => scrollToSection('photo-showroom') },
    { label: 'Eventos', action: () => scrollToSection('eventos-realizados') },
    { label: 'Serviços', action: () => scrollToSection('servicos-oferecidos') },
    { label: 'Depoimentos', action: () => scrollToSection('depoimentos') },
    { label: 'Contato', action: () => scrollToSection('fale-conosco') },
  ];

  // Itens principais do menu (minimalista)
  const mainNavItems = [
    { label: 'Galeria', href: '/o-espaco' },
    { label: 'Blog', href: '/blog' },
  ];

  const isActive = (path?: string) => path && location.pathname === path;
  const isHomePage = location.pathname === '/';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="header-logo-container">
              {/* Logo para header transparente (home page, não scrolled) */}
              <img 
                src="https://res.cloudinary.com/dbsvu9vo0/image/upload/v1755262896/Logo_Fazenda_Moinho_-_Versao_Negativa_-_Fundo_Verde_-_Alta_Resolucao_-_300_dpi_-_CMYK-removebg-preview_x1fpi5.png"
                alt="Fazenda Moinho - Logo Transparente"
                width="80"
                height="64"
                className={`${
                  !isScrolled && isHomePage ? 'opacity-100' : 'opacity-0'
                }`}
                loading="eager"
                decoding="async"
                style={{ 
                  display: 'block',
                  visibility: 'visible',
                  minWidth: '64px',
                  minHeight: '64px'
                }}
              />
              {/* Logo para header branco (scrolled ou outras páginas) */}
              <img 
                src="https://res.cloudinary.com/dbsvu9vo0/image/upload/v1755262798/Fazenda_Moinho_Logo_RemovedBackg._pwx0om.png"
                alt="Fazenda Moinho - Logo Branca"
                width="80"
                height="64"
                className={`${
                  isScrolled || !isHomePage ? 'opacity-100' : 'opacity-0'
                }`}
                loading="eager"
                decoding="async"
                style={{ 
                  display: 'block',
                  visibility: 'visible',
                  minWidth: '64px',
                  minHeight: '64px'
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold transition-colors font-montserrat text-fazenda-green text-shadow-sm-black">
                Fazenda Moinho
              </span>
              <span className="text-[16px] transition-colors font-caveat text-fazenda-sage">
                Um espaço, muitas possibilidades
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {/* Home Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center font-medium transition-all duration-200 hover:text-[#37614e] relative text-sm lg:text-base ${
                  isScrolled || !isHomePage ? 'text-[#727474]' : 'text-white'
                } ${isHomePage ? 'text-[#37614e]' : ''}`}
              >
                Início
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`} />
                {isHomePage && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#37614e] rounded-full"></span>
                )}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {homeSections.map((section, index) => (
                    <button
                      key={index}
                      onClick={section.action}
                      className="block w-full text-left px-4 py-2 text-sm text-[#727474] hover:text-[#37614e] hover:bg-gray-50 transition-colors"
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Main Navigation Items */}
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-medium transition-all duration-200 hover:text-[#37614e] relative text-sm lg:text-base ${
                  isScrolled || !isHomePage ? 'text-[#727474]' : 'text-white'
                } ${isActive(item.href) ? 'text-[#37614e]' : ''}`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#37614e] rounded-full"></span>
                )}
              </Link>
            ))}

            {/* CTA Button */}
            <a
              href="https://wa.me/5511989860204?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informações%20sobre%20a%20Fazenda%20Moinho."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#37614e] hover:bg-[#2d4d3e] text-white px-4 lg:px-6 py-2 rounded-md transition-all duration-200 hover:scale-105 shadow-lg text-sm lg:text-base"
            >
              Fale Conosco
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled || !isHomePage ? 'text-[#727474]' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg relative z-50">
            <div className="py-4 space-y-2">
              {/* Home Section with Subsections */}
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center justify-between w-full px-4 py-3 text-[#727474] hover:text-[#37614e] hover:bg-[#c8d0cd]/20 font-medium transition-colors ${
                    isHomePage ? 'text-[#37614e] bg-[#c8d0cd]/20' : ''
                  }`}
                >
                  Início
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {/* Mobile Dropdown */}
                {isDropdownOpen && (
                  <div className="bg-gray-50 border-l-2 border-[#37614e] ml-4">
                    {homeSections.map((section, index) => (
                      <button
                        key={index}
                        onClick={section.action}
                        className="block w-full text-left px-4 py-2 text-sm text-[#727474] hover:text-[#37614e] hover:bg-white transition-colors"
                      >
                        {section.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Main Navigation Items */}
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block px-4 py-3 text-[#727474] hover:text-[#37614e] hover:bg-[#c8d0cd]/20 font-medium transition-colors ${
                    isActive(item.href) ? 'text-[#37614e] bg-[#c8d0cd]/20' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <div className="px-4 pt-2">
                <a
                  href="https://wa.me/5511989860204?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informações%20sobre%20a%20Fazenda%20Moinho."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#37614e] hover:bg-[#2d4d3e] text-white px-6 py-3 rounded-md transition-colors text-center font-semibold"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay para fechar dropdown quando clicar fora */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
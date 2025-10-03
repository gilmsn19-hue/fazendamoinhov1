import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEOHead from '../components/ui/SEOHead';
import Hero from '../components/sections/Hero';
import NossoEspaco from '../components/sections/NossoEspaco';
import PhotoShowroom from '../components/sections/PhotoShowroom';
import EventosRealizados from '../components/sections/EventosRealizados';
import ServicosOferecidos from '../components/sections/ServicosOferecidos';
import Depoimentos from '../components/sections/Depoimentos';
import UltimasBlog from '../components/sections/UltimasBlog';
import FaleConosco from '../components/sections/FaleConosco';

const Home = () => {
  const location = useLocation();

  // Efeito para lidar com navegação por hash
  useEffect(() => {
    if (location.hash) {
      // Remover o # do hash para obter o ID da seção
      const sectionId = location.hash.substring(1);
      
      // Aguardar um pouco para garantir que a página foi renderizada
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 80; // altura do header
          const elementPosition = element.offsetTop - headerHeight;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Fazenda Moinho - Espaço para Eventos",
    "description": "Espaço para eventos ao ar livre em meio à natureza preservada. Casamentos, eventos corporativos e celebrações especiais em Campo Limpo Paulista, a 50 minutos de São Paulo.",
    "url": "https://fazendamoinho.com.br",
    "telephone": "+5511989860204",
    "email": "contato@fazendamoinho.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Estrada das Rosas, 160 – Bairro: Moinho",
      "addressLocality": "Campo Limpo Paulista",
      "addressRegion": "SP",
      "postalCode": "13236-559",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-23.2167",
      "longitude": "-46.7833"
    },
    "openingHours": [
      "Mo-Fr 09:00-20:00",
      "Sa 09:00-15:00"
    ],
    "priceRange": "$$",
    "image": [
      "https://res.cloudinary.com/dxsbtjqjv/image/upload/f_auto,q_auto/v1752677997/37614e_wtgtzt.jpg",
      "https://res.cloudinary.com/dxsbtjqjv/image/upload/f_auto,q_auto/v1752845194/IMG-20250717-WA0138_j1wpkj.jpg",
      "https://res.cloudinary.com/dxsbtjqjv/image/upload/f_auto,q_auto/v1752845342/IMG-20250717-WA0048_abto2o.jpg"
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Bangalô para Noivos",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Estacionamento Gratuito",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Área para Cerimônias",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Casarão Colonial",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Mata Atlântica Preservada",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Estacionamento Gratuito",
        "value": true
      }
    ],
    "sameAs": [
      "https://www.facebook.com/fazendamoinho",
      "https://www.instagram.com/fazendamoinho",
      "https://wa.me/5511989860204"
    ]
  };

  return (
    <>
      <SEOHead
        title="Home"
        description="Fazenda Moinho oferece o espaço perfeito para casamentos, eventos corporativos e celebrações especiais em Campo Limpo Paulista. Localizada a 50 min de SP, com bangalô exclusivo, casarão colonial e 15 hectares de natureza preservada."
        canonical="/"
        keywords="fazenda moinho, casamento na fazenda campo limpo paulista, eventos ao ar livre são paulo, espaço para casamento, bangalô para noivos, casarão colonial eventos, festa na natureza, mata atlântica"
        ogImage="https://res.cloudinary.com/dxsbtjqjv/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/v1752677997/37614e_wtgtzt.jpg"
        structuredData={structuredData}
      />
      
      <Hero />
      <NossoEspaco />
      <PhotoShowroom />
      <EventosRealizados />
      <ServicosOferecidos />
      <Depoimentos />
      <FaleConosco />
      <UltimasBlog />
    </>
  );
};

export default Home;
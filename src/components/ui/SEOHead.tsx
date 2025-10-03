import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = 'fazenda moinho eventos, casamentos ao ar livre, eventos corporativos, espaço para eventos são paulo, casamento na fazenda, eventos natureza, campo limpo paulista',
  canonical,
  ogImage = 'https://res.cloudinary.com/dxsbtjqjv/image/upload/v1752677997/37614e_wtgtzt.jpg',
  structuredData,
  noIndex = false
}) => {
  const fullTitle = title === 'Home' 
    ? 'Fazenda Moinho - Espaço para Eventos em Campo Limpo Paulista, SP | Casamentos e Celebrações'
    : `${title} | Fazenda Moinho - Espaço para Eventos`;
  
  const siteUrl = 'https://fazendamoinhoeventos.com.br';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Fazenda Moinho" />
      <meta name="language" content="pt-BR" />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Fazenda Moinho" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Additional Meta Tags */}
      <meta name="geo.region" content="BR-SP" />
      <meta name="geo.placename" content="Campo Limpo Paulista, São Paulo" />
      <meta name="geo.position" content="-23.2167;-46.7833" />
      <meta name="ICBM" content="-23.2167, -46.7833" />
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://images.pexels.com" />
      <link rel="preconnect" href="https://res.cloudinary.com" />
      <link rel="dns-prefetch" href="https://videos.pexels.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
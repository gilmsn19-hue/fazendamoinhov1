import React, { useState, useEffect } from 'react';

interface GoogleMapProps {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  embedPbParam?: string;
  googleMapsUrl?: string;
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address, coordinates, embedPbParam, googleMapsUrl, className = "" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Get API key from environment
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // Build embed URL dynamically using coordinates and API key
  const buildEmbedUrl = () => {
    if (embedPbParam) {
      // Use the specific pb parameter for exact location
      return `https://www.google.com/maps/embed?pb=${embedPbParam}`;
    }
    
    if (apiKey) {
      // Use Google Maps Embed API with API key
      return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${coordinates.lat},${coordinates.lng}&zoom=15&maptype=roadmap`;
    } else {
      // Fallback to basic embed without API key (may have limitations)
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.123456789!2d${coordinates.lng}!3d${coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(`${coordinates.lat},${coordinates.lng}`)}!5e0!3m2!1spt-BR!2sbr!4v1640995200000!5m2!1spt-BR!2sbr`;
    }
  };

  const embedUrl = buildEmbedUrl();

  const handleMapLoad = () => {
    setIsLoading(false);
  };

  const handleMapError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando mapa...</p>
          </div>
        </div>
      )}
      
      {hasError ? (
        <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-4">
            <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Localização</h3>
            <p className="text-sm text-gray-600 mb-4">{address}</p>
            <div className="space-y-2">
              <a
                href={googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                Abrir no Google Maps
              </a>
              <br />
              <a
                href={`https://waze.com/ul?ll=${coordinates.lat},${coordinates.lng}&navigate=yes`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                Abrir no Waze
              </a>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          title={`Localização - ${address}`}
          onLoad={handleMapLoad}
          onError={handleMapError}
        />
      )}
    </div>
  );
};

export default GoogleMap;
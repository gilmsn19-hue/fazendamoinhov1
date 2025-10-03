import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/ui/SEOHead';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <SEOHead
        title="Página Não Encontrada"
        description="A página que você está procurando não foi encontrada. Volte para a página inicial da Fazenda Moinho e explore nossos eventos ao ar livre em Campo Limpo Paulista."
        canonical="/404"
        noIndex={true}
      />

      <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <div className="text-8xl font-bold text-green-200 mb-4">404</div>
            <h1 className="text-3xl font-bold text-fazenda-dark-brown mb-4">
              Página Não Encontrada
            </h1>
            <p className="text-gray-600 mb-8">
              Ops! A página que você está procurando não existe ou foi movida. 
              Que tal explorar nosso espaço natural?
            </p>
          </div>

          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Voltar ao Início
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/o-espaco"
                className="inline-flex items-center text-green-700 hover:text-green-600 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Conhecer o Espaço
              </Link>
              
              <Link
                to="/blog"
                className="inline-flex items-center text-green-700 hover:text-green-600 font-medium"
              >
                <Search className="w-4 h-4 mr-1" />
                Ver Blog
              </Link>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-lg font-semibold text-fazenda-dark-brown mb-3">
              Precisa de Ajuda?
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Nossa equipe está pronta para ajudar você a encontrar o que procura.
            </p>
            <a
              href="https://wa.me/5521999999999?text=Preciso de ajuda para navegar no site do Exemplo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: { [key: string]: string } = {
    'o-espaco': 'O Espaço',
    'blog': 'Blog',
    'orcamento': 'Orçamento',
    'fale-conosco': 'Fale Conosco',
    'localizacao': 'Localização',
    'politica-de-privacidade': 'Política de Privacidade',
    'termos-de-uso': 'Termos de Uso'
  };

  // Função para formatar nomes de path
  const formatPathName = (name: string): string => {
    if (breadcrumbNameMap[name]) {
      return breadcrumbNameMap[name];
    }
    // Remove hífens e capitaliza cada palavra
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="bg-green-50 py-4" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-green-600 hover:text-green-800 transition-colors flex items-center max-w-[150px] truncate"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = formatPathName(name);

            return (
              <li key={name} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-gray-600 font-medium max-w-[150px] truncate" title={displayName}>
                    {displayName}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-green-600 hover:text-green-800 transition-colors max-w-[150px] truncate"
                    title={displayName}
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
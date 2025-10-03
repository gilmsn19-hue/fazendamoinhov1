import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const UltimasBlog = () => {
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

    const section = document.getElementById('ultimas-blog');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const posts = [
    {
      id: 1,
      title: 'Como Planejar um Casamento ao Ar Livre Perfeito',
      excerpt: 'Guia completo para planejar seu casamento ao ar livre dos sonhos. Dicas essenciais, cronograma detalhado e tudo que você precisa saber para uma cerimônia perfeita na natureza.',
      image: 'https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg',
      date: '15 de Julho, 2025',
      author: 'Equipe Fazenda Moinho',
      readTime: '8 min de leitura',
      category: 'Casamentos',
      link: '/blog/planejar-casamento-ao-ar-livre'
    },
    {
      id: 2,
      title: 'Tendências para Casamentos em 2025: O que Está em Alta',
      excerpt: 'Descubra as principais tendências para casamentos em 2025. Cores, estilos, decoração e tudo que estará em alta para noivos modernos.',
      image: 'https://images.pexels.com/photos/7462749/pexels-photo-7462749.jpeg',
      date: '10 de Julho, 2025',
      author: 'Marina Silva',
      readTime: '6 min de leitura',
      category: 'Tendências',
      link: '/blog/tendencias-casamentos-2025'
    },
    {
      id: 3,
      title: 'Como Escolher o Estilo do Seu Casamento: Conheça Todos Eles',
      excerpt: 'Guia completo dos estilos de casamento: clássico, rústico, boho, moderno e mais. Descubra qual combina com você e como criar o casamento perfeito.',
      image: 'https://images.pexels.com/photos/6102181/pexels-photo-6102181.jpeg',
      date: '5 de Julho, 2025',
      author: 'Carlos Mendes',
      readTime: '7 min de leitura',
      category: 'Planejamento',
      link: '/blog/estilo-casamento'
    },
    {
      id: 4,
      title: 'Sabores Mais Pedidos de Bolo de Casamento: Recheios e Dicas',
      excerpt: 'Descubra os sabores de bolo de casamento mais populares, recheios deliciosos e dicas essenciais para escolher o bolo perfeito para seu grande dia.',
      image: 'https://images.pexels.com/photos/1345574/pexels-photo-1345574.jpeg',
      date: '28 de Junho, 2025',
      author: 'Ana Costa',
      readTime: '6 min de leitura',
      category: 'Gastronomia',
      link: '/blog/bolo-casamento'
    }
  ];

  return (
    <section id="ultimas-blog" className="py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Enhanced title with artistic background */}
          <div className="relative inline-block mb-6 lg:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-fazenda-dark-brown font-montserrat">
              Acompanhe Nosso Blog
            </h2>
            
            {/* Subtle accent line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-fazenda-sage/50 to-transparent"></div>
          </div>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-helvetica">
            Dicas, inspirações e novidades do mundo dos eventos
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-700 transform border border-gray-100 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-fazenda-green text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-green-800 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div></div>
                  <Link
                    to={post.link}
                    className="text-fazenda-green font-semibold text-sm hover:text-fazenda-green/90 transition-colors flex items-center group-hover:translate-x-1 transition-transform"
                  >
                    Ler mais
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <Link
            to="/blog"
            className="inline-flex items-center bg-fazenda-green hover:bg-fazenda-green/90 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Todos os Posts
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UltimasBlog;
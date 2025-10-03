import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/ui/SEOHead';
import { Calendar, User, ArrowRight, Tag, Clock, MessageCircle } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Como Planejar um Casamento ao Ar Livre Perfeito',
      excerpt: 'Guia completo para planejar seu casamento ao ar livre dos sonhos. Dicas essenciais, cronograma detalhado e tudo que você precisa saber para uma cerimônia perfeita na natureza.',
      image: 'https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg',
      date: '15 de Julho, 2025',
      author: 'Equipe Fazenda Moinho',
      category: 'Casamentos',
      readTime: '8 min de leitura',
      link: '/blog/planejar-casamento-ao-ar-livre'
    },
    {
      id: 2,
      title: 'Tendências para Casamentos em 2025: O que Está em Alta',
      excerpt: 'Descubra as principais tendências para casamentos em 2025. Cores, estilos, decoração e tudo que estará em alta para noivos modernos.',
      image: 'https://images.pexels.com/photos/7462749/pexels-photo-7462749.jpeg',
      date: '10 de Julho, 2025',
      author: 'Marina Silva',
      category: 'Tendências',
      readTime: '6 min de leitura',
      link: '/blog/tendencias-casamentos-2025'
    },
    {
      id: 3,
      title: 'Como Escolher o Estilo do Seu Casamento: Conheça Todos Eles',
      excerpt: 'Guia completo dos estilos de casamento: clássico, rústico, boho, moderno e mais. Descubra qual combina com você e como criar o casamento perfeito.',
      image: 'https://images.pexels.com/photos/6102181/pexels-photo-6102181.jpeg',
      date: '5 de Julho, 2025',
      author: 'Carlos Mendes',
      category: 'Planejamento',
      readTime: '7 min de leitura',
      link: '/blog/estilo-casamento'
    },
    {
      id: 4,
      title: 'Sabores Mais Pedidos de Bolo de Casamento: Recheios e Dicas',
      excerpt: 'Descubra os sabores de bolo de casamento mais populares, recheios deliciosos e dicas essenciais para escolher o bolo perfeito para seu grande dia.',
      image: 'https://images.pexels.com/photos/1345574/pexels-photo-1345574.jpeg',
      date: '28 de Junho, 2025',
      author: 'Ana Costa',
      category: 'Gastronomia',
      readTime: '6 min de leitura',
      link: '/blog/bolo-casamento'
    }
  ];

  const categories = ['Todos', 'Casamentos', 'Tendências', 'Planejamento', 'Gastronomia'];

  return (
    <>
      <SEOHead
        title="Blog - Dicas e Inspirações para Eventos"
        description="Blog da Fazenda Moinho com dicas exclusivas para casamentos ao ar livre, eventos corporativos e celebrações na natureza. Inspirações, tendências e guias completos para seu evento perfeito em Campo Limpo Paulista."
        canonical="/blog"
        keywords="blog casamento fazenda, dicas eventos ao ar livre, inspirações casamento natureza, tendências eventos 2025, fazenda moinho blog, campo limpo paulista"
        ogImage="https://res.cloudinary.com/dxsbtjqjv/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/v1752845194/IMG-20250717-WA0138_j1wpkj.jpg"
      />

      <div className="pt-20">
        {/* Categories Filter */}
        <section className="py-8 bg-[#fefefe] border-b border-fazenda-sage/30 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-fazenda-dark-brown mb-4 font-montserrat">
                Blog & Inspirações
              </h1>
              <p className="text-lg text-fazenda-gray max-w-2xl mx-auto font-helvetica">
                Dicas, tendências e histórias inspiradoras para tornar seu evento ainda mais especial.
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-md border border-fazenda-sage text-fazenda-green hover:bg-fazenda-sage/20 transition-colors text-sm font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-fazenda-sage/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-fazenda-white rounded-2xl shadow-lg overflow-hidden border border-fazenda-sage/20">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={posts[0].image}
                    alt={posts[0].title}
                    className="w-full h-64 lg:h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-fazenda-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      Destaque
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-xs text-fazenda-gray mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {posts[0].date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {posts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-fazenda-green mb-4 font-montserrat">
                    {posts[0].title}
                  </h2>
                  <p className="text-fazenda-gray mb-6 leading-relaxed font-helvetica">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div></div>
                    <Link
                      to={posts[0].link}
                      className="flex items-center text-fazenda-green font-semibold hover:text-fazenda-green/80 transition-colors"
                    >
                      Ler mais
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-fazenda-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-fazenda-dark-brown mb-4 font-montserrat">
                Últimas Publicações
              </h2>
              <p className="text-lg text-fazenda-gray max-w-2xl mx-auto font-helvetica">
                Mantenha-se atualizado com nossas dicas e inspirações para eventos únicos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(1, 4).map((post) => (
                <article
                  key={post.id}
                  className="bg-fazenda-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-fazenda-sage/20"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-fazenda-white bg-opacity-90 text-fazenda-green px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-fazenda-gray mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-fazenda-green mb-3 line-clamp-2 group-hover:text-fazenda-green/80 transition-colors font-montserrat">
                      {post.title}
                    </h3>
                    
                    <p className="text-fazenda-gray text-sm mb-4 line-clamp-3 leading-relaxed font-helvetica">
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

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="border border-fazenda-green text-fazenda-green hover:bg-fazenda-sage/20 px-6 py-2 rounded-md font-medium transition-colors text-sm">
                Carregar Mais Posts
              </button>
            </div>
          </div>
        </section>

        {/* WhatsApp Contact Section */}
        <section className="py-20 bg-fazenda-sage/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-fazenda-green mb-4 font-montserrat">
              Fale Conosco no WhatsApp
            </h2>
            <p className="text-lg text-fazenda-gray mb-8 font-helvetica">
              Tem dúvidas sobre eventos ou quer mais dicas? Entre em contato conosco pelo WhatsApp e receba atendimento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511989860204?text=Olá! Vim pelo blog da Fazenda Moinho e gostaria de mais informações sobre eventos."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-fazenda-green hover:bg-fazenda-green/90 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Falar no WhatsApp
              </a>
              <button
                onClick={() => {
                  // Se não estiver na home, navegar para home primeiro
                  if (window.location.pathname !== '/') {
                    window.location.href = '/#fale-conosco';
                    return;
                  }
                  
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
                className="inline-flex items-center justify-center border-2 border-fazenda-green text-fazenda-green hover:bg-fazenda-green hover:text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Solicitar Orçamento
              </button>
            </div>
            <p className="text-fazenda-gray text-sm mt-4 font-helvetica">
              Resposta rápida • Atendimento personalizado • Orçamento gratuito
            </p>
          </div>
        </section>
      </div>

      {/* Custom styles for enhanced visual effects */}
      <style jsx>{`
        .shadow-3xl {
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Blog;
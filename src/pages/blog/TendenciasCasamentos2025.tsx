import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/ui/SEOHead';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { ArrowRight } from 'lucide-react';

const TendenciasCasamentos2025 = () => {
  const articleRef = useRef<HTMLElement>(null);
  const [tableOfContents, setTableOfContents] = useState<Array<{id: string, text: string, level: number}>>([]);

  // Função para criar slugs amigáveis
  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  // Gerar índice de conteúdo
  useEffect(() => {
    if (articleRef.current) {
      const headings = articleRef.current.querySelectorAll('h2, h3');
      const toc: Array<{id: string, text: string, level: number}> = [];
      
      headings.forEach((heading) => {
        const text = heading.textContent || '';
        const id = slugify(text);
        const level = parseInt(heading.tagName.charAt(1));
        
        heading.id = id;
        toc.push({ id, text, level });
      });
      
      setTableOfContents(toc);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tendências de Casamento para 2025: Celebre Seu Amor em Grande Estilo!",
    "description": "Descubra as principais tendências para casamentos em 2025. Cores, estilos, decoração e tudo que estará em alta para noivos modernos que buscam celebrações autênticas e inovadoras.",
    "image": "https://images.pexels.com/photos/7462749/pexels-photo-7462749.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
    "author": {
      "@type": "Organization",
      "name": "Fazenda Moinho"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fazenda Moinho",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dxsbtjqjv/image/upload/v1752512844/Fazenda_Moinho_Logo_RemovedBackg._o3jvcu.png"
      }
    },
    "datePublished": "2025-07-10",
    "dateModified": "2025-07-10",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fazendamoinho.com.br/blog/tendencias-casamentos-2025"
    },
    "wordCount": 2200
  };

  return (
    <>
      <SEOHead
        title="Tendências de Casamento para 2025: Celebre Seu Amor em Grande Estilo!"
        description="Descubra as principais tendências para casamentos em 2025. Cores, estilos, decoração e tudo que estará em alta para noivos modernos que buscam celebrações autênticas e inovadoras."
        canonical="/blog/tendencias-casamentos-2025"
        keywords="tendências casamento 2025, casamento autêntico, celebrações prolongadas, wild deco, personalização casamento, iluminação casamento, pet-friendly casamento, lua de mel 2025, fazenda moinho"
        ogImage="https://images.pexels.com/photos/7462749/pexels-photo-7462749.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop"
        structuredData={structuredData}
      />

      <div className="pt-20">
        <Breadcrumbs />
        
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="text-center text-sm text-gray-600 mb-4">
                <span>Atualizado em 10 de Julho, 2025</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-fazenda-dark-brown mb-6 font-montserrat leading-tight">
                Tendências de Casamento para 2025: Celebre Seu Amor em Grande Estilo!
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-helvetica">
                O ano de 2025 chega com um convite para casais apaixonados: celebrem o amor de forma autêntica, 
                inovadora e cheia de significado. Se você está noiva ou noivo e sonha com um dia (ou dias!) 
                inesquecível, prepare-se para se encantar com as tendências que vão ditar os casamentos do próximo ano. 
                Do encontro com a natureza à personalização extrema, confira o que está em alta para dizer "sim"!
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src="https://images.pexels.com/photos/7462749/pexels-photo-7462749.jpeg"
                alt="Tendências para casamentos em 2025 com decoração moderna e elegante"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Disclaimer */}
            <div className="mb-8">
              <p className="text-sm text-gray-600 italic text-center font-helvetica">
                As tendências apresentadas são baseadas em pesquisas de mercado e podem variar conforme preferências regionais e individuais.
              </p>
            </div>

            {/* Índice de Conteúdo */}
            {tableOfContents.length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-6 mb-12 border border-gray-200">
                <h3 className="text-xl font-bold text-fazenda-dark-brown mb-4 font-montserrat">
                  📋 Índice de Conteúdo
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left hover:text-green-600 transition-colors font-helvetica ${
                        item.level === 2 
                          ? 'text-base font-semibold text-gray-800' 
                          : 'text-sm text-gray-600 ml-4'
                      }`}
                    >
                      {item.level === 3 && '• '}
                      {item.text}
                    </button>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </section>

        {/* Content */}
        <article ref={articleRef} className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                O Casamento Vai Além de um Dia: Celebrações Prolongadas e Imersivas
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Que tal estender a alegria do "sim" por mais de 24 horas? Em 2025, a tendência é que o casamento 
                se torne uma experiência imersiva de 2 ou 3 dias. Pense em um "destination wedding" mais próximo, 
                onde a fazenda se transforma em um retiro para noivos e convidados.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                Essa proposta permite atividades pré e pós-casamento, como jantares de boas-vindas, brunches de 
                despedida ou até mesmo festas temáticas. É a oportunidade perfeita para criar memórias duradouras, 
                aprofundar laços e realmente aproveitar cada momento com seus entes queridos. Para quem não quer 
                que a festa acabe, essa é a tendência ideal!
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                A Magia da Natureza e a Estética "Wild Deco"
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                O desejo por casamentos ao ar livre continua fortíssimo, e em 2025, ele ganha um toque especial 
                com a estética "Wild Deco". Esqueça os cenários montados: a ideia é integrar a decoração à beleza 
                natural do local. Flores e folhagens nativas, arranjos desconstruídos e elementos orgânicos se 
                misturam de forma harmoniosa com a paisagem.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                Fazendas e locais com ampla área verde são perfeitos para essa tendência, permitindo que a natureza 
                seja a protagonista. E para facilitar a vida dos convidados, pense na logística de acesso ao local. 
                Um bom planejamento para o transporte e estacionamento é essencial para garantir que todos cheguem 
                com conforto e aproveitem cada minuto.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                Personalização Radical: Seu Casamento, Sua Arte
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Em 2025, o casamento é uma tela em branco para a expressão da identidade do casal. A personalização 
                vai muito além dos detalhes, permeando cada aspecto da celebração:
              </p>

              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4 font-montserrat">
                Gastronomia com Identidade
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Esqueça o buffet padrão! Pense em um menu que conte a história de vocês, com pratos que remetam 
                a viagens, memórias afetivas ou até mesmo o sabor do primeiro encontro. Estações interativas de 
                comida e bebida, com opções que surpreendam e divirtam, são um must.
              </p>

              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4 font-montserrat">
                Decoração com Alma
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Use cores que amem, texturas que toquem e elementos que reflitam suas paixões. A paleta de cores 
                como Verde Pistache, ou outros tons de verde da natureza, promete estar em alta, trazendo frescor 
                e elegância. Os convites também seguem essa linha, sendo uma prévia do estilo do casamento.
              </p>

              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4 font-montserrat">
                Diversão e Entretenimento que Marcam
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Proporcione experiências que fiquem na memória! Bandas que toquem a trilha sonora do relacionamento, 
                estações de jogos, ou até mesmo um DJ com um repertório que faça todo mundo dançar.
              </p>

              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4 font-montserrat">
                O Bolo como Obra de Arte
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                O bolo de casamento deixa de ser apenas uma sobremesa e se torna uma verdadeira escultura, com 
                designs inovadores, texturas e cores que complementam a decoração.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                Iluminação Que Transforma e o Brilho dos Detalhes
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Imagine seu casamento ganhando vida com um verdadeiro festival de luzes. Em 2025, a iluminação 
                se torna um elemento chave para criar atmosferas mágicas, destacando pontos específicos da fazenda 
                e transformando o ambiente. Projeções mapeadas, cordões de luzes, velas e lanternas criam um cenário 
                íntimo e deslumbrante, especialmente ao cair da noite.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                E falando em brilho, cada detalhe conta: desde a escolha de cores, texturas e tecidos nos trajes 
                dos noivos e madrinhas, que se harmonizam entre si, até os acessórios que complementam o look.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                Amigos de Quatro Patas e Conteúdo Que Conecta
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Seu pet faz parte da família? Em 2025, a tendência é ir além do "pet-friendly" para o "pet-lovers". 
                Isso significa não apenas permitir a presença dos seus companheiros peludos, mas integrá-los de 
                forma carinhosa na celebração, seja como pajens, daminhas ou simplesmente como convidados especiais.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                Outra novidade é a figura do criador de conteúdo para casamento. Além dos fotógrafos e videomakers 
                tradicionais, esses profissionais se dedicam a registrar momentos espontâneos e criar vídeos curtos 
                e dinâmicos para redes sociais, garantindo que a alegria do seu dia seja compartilhada de forma 
                autêntica e instantânea.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                A Lua de Mel, Do Jeito de Vocês
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Depois de toda a celebração, a lua de mel de 2025 também se adapta aos diferentes estilos de casal. 
                Seja uma viagem clássica a dois, uma aventura com amigos ou um destino relaxante em família, o 
                importante é que a experiência reflita o que faz sentido para vocês. A escolha de cores como Verde 
                Esmeralda ou Mocha Mousse para os detalhes da viagem ou do look pode adicionar um toque extra de estilo.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                2025 promete ser um ano de casamentos que celebram a individualidade e a alegria de forma grandiosa 
                e memorável. Ao escolher um local como uma fazenda para eventos, você já está um passo à frente, 
                com a beleza natural e o espaço necessário para abraçar essas tendências.
              </p>
            </section>

            {/* CTA Section */}
            <div className="bg-fazenda-green rounded-2xl p-8 text-center text-white mb-12">
              <h2 className="text-3xl font-bold mb-4 font-montserrat">
                Sonhando com um casamento que é a sua cara e em total sintonia com a natureza?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Venha conhecer a Fazenda Moinho e descubra como podemos transformar as tendências de 2025 
                na realidade do seu grande dia!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#fale-conosco"
                  className="bg-white text-fazenda-green px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  Solicitar Orçamento
                </Link>
                <a
                  href="https://wa.me/5511989860204?text=Olá! Li sobre as tendências de casamento 2025 e gostaria de mais informações."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-fazenda-green transition-colors"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            {/* Related Articles */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold text-fazenda-dark-brown mb-8 font-montserrat">
                Artigos Relacionados
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/blog/planejar-casamento-ao-ar-livre" className="group">
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-fazenda-dark-brown mb-2 group-hover:text-green-600">
                      Como Planejar um Casamento ao Ar Livre
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Guia completo para realizar a cerimônia dos seus sonhos na natureza.
                    </p>
                    <div className="flex items-center text-green-600 mt-3 text-sm">
                      Ler artigo <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>

                <Link to="/blog/estilo-casamento" className="group">
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-fazenda-dark-brown mb-2 group-hover:text-green-600">
                      Como Escolher o Estilo do Seu Casamento
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Conheça todos os estilos de casamento e encontre o seu.
                    </p>
                    <div className="flex items-center text-green-600 mt-3 text-sm">
                      Ler artigo <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>

                <Link to="/blog/bolo-casamento" className="group">
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-fazenda-dark-brown mb-2 group-hover:text-green-600">
                      Sabores de Bolo de Casamento
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Os sabores mais pedidos e dicas para escolher o bolo perfeito.
                    </p>
                    <div className="flex items-center text-green-600 mt-3 text-sm">
                      Ler artigo <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default TendenciasCasamentos2025;
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/ui/SEOHead';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { ArrowRight } from 'lucide-react';

const BoloCasamento = () => {
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
    "headline": "Sabores Mais Pedidos de Bolo de Casamento: Recheios e Dicas para um Doce Inesquecível",
    "description": "Descubra os sabores de bolo de casamento mais populares, recheios deliciosos e dicas essenciais para escolher o bolo perfeito para seu grande dia.",
    "image": "https://images.pexels.com/photos/1345574/pexels-photo-1345574.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
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
    "datePublished": "2025-06-28",
    "dateModified": "2025-06-28",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fazendamoinho.com.br/blog/bolo-casamento"
    },
    "wordCount": 2100
  };

  return (
    <>
      <SEOHead
        title="Sabores Mais Pedidos de Bolo de Casamento: Recheios e Dicas para um Doce Inesquecível"
        description="Descubra os sabores de bolo de casamento mais populares, recheios deliciosos e dicas essenciais para escolher o bolo perfeito para seu grande dia."
        canonical="/blog/bolo-casamento"
        keywords="bolo casamento sabores, recheios bolo casamento, como escolher bolo casamento, sabores populares bolo noiva, bolo casamento chocolate, bolo casamento baunilha, bolo casamento red velvet, bolo casamento limao, bolo casamento pistache, bolo casamento matcha, bolo casamento cafe, fazenda moinho"
        ogImage="https://images.pexels.com/photos/1345574/pexels-photo-1345574.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop"
        structuredData={structuredData}
      />

      <div className="pt-20">
        <Breadcrumbs />
        
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="text-center text-sm text-gray-600 mb-4">
                <span>Atualizado em 28 de Junho, 2025</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-fazenda-dark-brown mb-6 font-montserrat leading-tight">
                Sabores Mais Pedidos de Bolo de Casamento: Recheios e Dicas para um Doce Inesquecível
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-helvetica">
                O bolo de casamento é muito mais do que uma sobremesa; ele é o centro das atenções na mesa de doces, um ícone da celebração e um dos momentos mais esperados pelos convidados. Escolher o sabor perfeito é crucial para garantir que esse símbolo do seu grande dia seja tão delicioso quanto bonito.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src="https://images.pexels.com/photos/1345574/pexels-photo-1345574.jpeg"
                alt="Bolo de casamento elegante com recheios deliciosos"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Disclaimer */}
            <div className="mb-8">
              <p className="text-sm text-gray-600 italic text-center font-helvetica">
                As sugestões de sabores são baseadas em tendências atuais e podem variar conforme disponibilidade regional e preferências pessoais.
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
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Neste guia, vamos explorar os sabores de bolo de casamento mais populares, os recheios que fazem sucesso e dar dicas essenciais para você e seu amor acertarem em cheio na escolha!
              </p>
            </div>

            {/* Why Choose Right Flavor */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                Por Que a Escolha do Sabor é Tão Importante?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                Assim como a decoração e a música, o bolo de casamento deve refletir a personalidade dos noivos e o estilo da festa. Um sabor que agrade a maioria dos paladares, mas que também tenha um toque especial de vocês, fará com que o corte do bolo seja um momento ainda mais doce e memorável para todos.
              </p>
            </section>

            {/* Popular Flavors */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-8 font-montserrat">
                Os Sabores de Bolo de Casamento Mais Desejados
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-helvetica">
                Vamos mergulhar nos sabores que estão conquistando corações e paladares nos casamentos:
              </p>
            </section>

            {/* Traditional Flavors */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                1. Tradicionais com um Toque Moderno
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Baunilha:</strong> Clássico e versátil, o bolo de baunilha é sempre uma aposta segura. Quando combinado com recheios inovadores, como geléias de frutas vermelhas caseiras ou brigadeiro gourmet, ele se eleva a outro nível.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Chocolate:</strong> Para os amantes de chocolate, a versão em bolo é um sucesso garantido. Pode ser um bolo rico de chocolate amargo, ou um bolo de chocolate mais leve, com cacau, que harmoniza bem com recheios frutados ou cremosos.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Nozes/Amêndoas:</strong> Com um toque sofisticado e uma textura deliciosa, bolos com base de nozes ou amêndoas são ideais para casamentos mais clássicos ou rústicos, trazendo um aroma e sabor marcantes.
              </p>
            </section>

            {/* Fruity Flavors */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                2. Frutados e Cítricos: Leveza e Frescor
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Red Velvet:</strong> Com sua cor vibrante e sabor suave de chocolate e baunilha, muitas vezes combinado com um toque cítrico (limão ou laranja), o Red Velvet continua em alta. Ele é visualmente impactante e delicioso.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Limão Siciliano:</strong> Ideal para casamentos diurnos ou em estações mais quentes, o bolo de limão siciliano oferece um frescor surpreendente. Seu sabor cítrico e levemente adocicado é muito apreciado.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Frutas Vermelhas:</strong> Mirtilos, framboesas, morangos e cerejas podem ser incorporados tanto na massa quanto nos recheios, conferindo acidez, doçura e uma beleza natural ao bolo.
              </p>
            </section>

            {/* Trendy Flavors */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                3. Tendências e Sabores Diferenciados
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Pistache:</strong> Ganhando cada vez mais espaço, o pistache traz um sabor único e elegante, com uma cor delicada que se encaixa em diversas decorações.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Matcha:</strong> Para casais que buscam algo realmente inovador, o matcha (chá verde japonês) oferece um sabor terroso e levemente adocicado, perfeito para bolos modernos e minimalistas.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Café:</strong> Uma opção sofisticada para os amantes da bebida, o bolo de café pode ser combinado com chocolate, caramelo ou até mesmo um toque de licor para um sabor mais intenso.
              </p>
            </section>

            {/* Fillings */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                Recheios Deliciosos para Complementar o Sabor do Bolo
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                O recheio é a alma do bolo! A combinação certa eleva a experiência. Aqui estão os mais pedidos:
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Brigadeiro Gourmet:</strong> Em suas diversas versões (tradicional, Nutella, doce de leite, ninho), o brigadeiro é unanimidade e agrada a praticamente todos os paladares.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Doce de Leite:</strong> Cremoso e reconfortante, o doce de leite é um clássico que nunca sai de moda, especialmente em casamentos com um toque mais brasileiro.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Ganache (Chocolate Branco ou Meio Amargo):</strong> Elegante e versátil, a ganache pode ser pura ou combinada com frutas, licores ou pralinês para criar diferentes texturas e sabores.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Cream Cheese:</strong> Essencial para o Red Velvet, mas também delicioso com bolos de limão ou cenoura, o cream cheese glaciado oferece um contraste cremoso e levemente ácido.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Geleias de Frutas Frescas:</strong> Morango, damasco, frutas vermelhas ou maracujá são opções leves e ácidas que equilibram a doçura do bolo e do brigadeiro.
              </p>
            </section>

            {/* Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                Dicas Essenciais para Escolher o Bolo Perfeito
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Degustação é Fundamental:</strong> Não abram mão da prova do bolo! É a melhor forma de experimentar as combinações e decidir o que mais agrada ao paladar de vocês.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Pensem nos Convidados:</strong> Embora o bolo seja de vocês, considere a variedade de gostos dos convidados. Uma boa estratégia é escolher um sabor mais tradicional e outro mais ousado.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Harmonize com a Estação e o Local:</strong> Sabores cítricos e frutados combinam bem com casamentos de verão ou ao ar livre. Sabores mais intensos, como chocolate ou nozes, podem ser ótimos para casamentos no inverno ou em ambientes fechados.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Considere o Design:</strong> O sabor do bolo pode inspirar o design. Um bolo rústico pode ter recheios com frutas e nozes, enquanto um bolo moderno pode ter sabores mais exóticos.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Cuidado com Alergias e Restrições:</strong> Pergunte à confeiteira sobre opções para convidados com restrições alimentares (sem glúten, sem lactose, vegano), se for o caso.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Confie no Profissional:</strong> Uma boa confeiteira de casamento não só fará um bolo lindo, mas também delicioso e estruturalmente perfeito para o grande dia. Peça referências e veja o portfólio.
              </p>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                A escolha do bolo de casamento é um momento delicioso no planejamento! Ao combinar os sabores que vocês mais amam com as tendências e dicas certas, o seu bolo será um verdadeiro destaque, encantando os olhos e o paladar de todos os presentes.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                Já imaginou qual sabor de bolo vai adoçar o seu "sim" em um cenário deslumbrante como a Fazenda Moinho? Converse com nossos parceiros e descubra as melhores opções para o seu grande dia!
              </p>
            </section>

            {/* CTA Section */}
            <div className="bg-fazenda-green rounded-2xl p-8 text-center text-white mb-12">
              <h2 className="text-3xl font-bold mb-4 font-montserrat">
                Pronto para Escolher o Bolo dos Seus Sonhos?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Na Fazenda Moinho, trabalhamos com os melhores confeiteiros da região 
                para criar o bolo perfeito para seu casamento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#fale-conosco"
                  className="bg-white text-fazenda-green px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  Solicitar Orçamento
                </Link>
                <a
                  href="https://wa.me/5511989860204?text=Olá! Li o artigo sobre sabores de bolo de casamento e gostaria de mais informações."
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

                <Link to="/blog/tendencias-casamentos-2025" className="group">
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-fazenda-dark-brown mb-2 group-hover:text-green-600">
                      Tendências para Casamentos em 2025
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Descubra as principais tendências que vão marcar os casamentos em 2025.
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
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BoloCasamento;
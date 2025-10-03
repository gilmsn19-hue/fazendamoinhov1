import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/ui/SEOHead';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { ArrowRight } from 'lucide-react';

const EstiloCasamento = () => {
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
    "headline": "Como Escolher o Estilo do Seu Casamento: O Guia Definitivo para Noivos",
    "description": "Guia completo dos estilos de casamento: clássico, rústico, boho, moderno e mais. Descubra qual combina com você e como criar o casamento perfeito para seu grande dia.",
    "image": "https://images.pexels.com/photos/6102181/pexels-photo-6102181.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
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
    "datePublished": "2025-07-05",
    "dateModified": "2025-07-05",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fazendamoinho.com.br/blog/estilo-casamento"
    },
    "wordCount": 2800
  };

  return (
    <>
      <SEOHead
        title="Como Escolher o Estilo do Seu Casamento: O Guia Definitivo para Noivos"
        description="Guia completo dos estilos de casamento: clássico, rústico, boho, moderno e mais. Descubra qual combina com você e como criar o casamento perfeito para seu grande dia."
        canonical="/blog/estilo-casamento"
        keywords="guia casamento, estilos de casamento, casamento clássico, casamento rústico, casamento boho, casamento moderno, casamento romântico, casamento temático, casamento praiano, planejamento casamento, fazenda moinho"
        ogImage="https://images.pexels.com/photos/6102181/pexels-photo-6102181.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop"
        structuredData={structuredData}
      />

      <div className="pt-20">
        <Breadcrumbs />
        
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-rose-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="text-center text-sm text-gray-600 mb-4">
                <span>Atualizado em 5 de Julho, 2025</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-fazenda-dark-brown mb-6 font-montserrat leading-tight">
                Como Escolher o Estilo do Seu Casamento: O Guia Definitivo para Noivos
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-helvetica">
                Decidir o estilo do casamento é um dos primeiros e mais emocionantes passos no planejamento do grande dia. É essa escolha que vai guiar todas as outras decisões, desde a paleta de cores e a decoração até o cardápio e os trajes dos noivos. Mas com tantas opções, como saber qual delas combina perfeitamente com a história e a personalidade de vocês?
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src="https://images.pexels.com/photos/6102181/pexels-photo-6102181.jpeg"
                alt="Diferentes estilos de casamento com decorações variadas"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Disclaimer */}
            <div className="mb-8">
              <p className="text-sm text-gray-600 italic text-center font-helvetica">
                Os estilos apresentados são sugestões baseadas em tendências atuais e podem ser adaptados conforme o gosto pessoal de cada casal.
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
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Este guia completo foi feito para ajudar noivas e noivos a desvendarem os estilos de casamento mais populares e a descobrirem qual deles realmente faz o coração bater mais forte.
              </p>
            </div>

            {/* Why Define Style */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                Por Que Definir o Estilo do Casamento é Tão Importante?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Ter um estilo definido para o casamento garante que todos os elementos conversem entre si, criando uma harmonia visual e uma atmosfera coesa. Isso não só facilita as escolhas de fornecedores, mas também ajuda a projetar a personalidade do casal, tornando a celebração única e memorável para todos. É como contar a sua história através de cada detalhe do evento.
              </p>
            </section>

            {/* Main Styles Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                Conheça os Principais Estilos de Casamento e Encontre o Seu
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-helvetica">
                Vamos explorar os estilos que estão em alta e descobrir qual deles pode ser o cenário perfeito para o seu "sim".
              </p>
            </section>

            {/* Style 1 - Clássico */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-fazenda-dark-brown mb-4 font-montserrat">
                1. Casamento Clássico e Tradicional
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                O estilo clássico é atemporal, elegante e sofisticado. Perfeito para casais que sonham com uma cerimônia formal e cheia de pompa.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Características:</strong> Ambientes luxuosos, salões de festa imponentes, cores neutras (branco, off-white, dourado, prateado), flores tradicionais (rosas, lírios), iluminação suave, trajes formais (smoking para o noivo, vestido volumoso para a noiva).
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Combina com casais que:</strong> Valorizam a tradição, a elegância e a formalidade.
              </p>
            </section>

            {/* Style 2 - Rústico */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-fazenda-dark-brown mb-4 font-montserrat">
                2. Casamento Rústico
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                O rústico celebra a simplicidade e a beleza natural, buscando inspiração em elementos do campo, madeira e flores silvestres.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Características:</strong> Locais como fazendas, sítios e celeiros, madeira aparente, luzes pisca-pisca (fairy lights), arranjos florais despojados, folhagens, móveis de demolição.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Combina com casais que:</strong> Amam a natureza, o aconchego e um ambiente mais descontraído, mas com charme.
              </p>
            </section>

            {/* Style 3 - Boho */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-fazenda-dark-brown mb-4 font-montserrat">
                3. Casamento Boho (Boho Chic)
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                Uma mistura de elementos boêmios, hippies e ciganos com um toque de elegância e romantismo. É despojado, leve e muito autêntico.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Características:</strong> Cerimônias ao ar livre, tendas, tapetes persas, apanhadores de sonhos, rendas, franjas, flores exóticas, paleta de cores terrosas e vibrantes. Trajes leves e fluídos.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Combina com casais que:</strong> Têm espírito livre, são criativos, valorizam o conforto e a originalidade.
              </p>
            </section>

            {/* Style 4 - Moderno */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-fazenda-dark-brown mb-4 font-montserrat">
                4. Casamento Moderno e Minimalista
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                Menos é mais neste estilo que preza por linhas limpas, design contemporâneo e funcionalidade.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Características:</strong> Ambientes amplos e com design arrojado, paleta de cores neutras com toques de cor vibrante, mobiliário com design clean, iluminação estratégica, poucos arranjos florais, mas impactantes.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Combina com casais que:</strong> Apreciam a sofisticação discreta, o design, a simplicidade e a inovação.
              </p>
            </section>

            {/* Style 5 - Romântico */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-fazenda-dark-brown mb-4 font-montserrat">
                5. Casamento Romântico
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                Delicado, sonhador e cheio de emoção, o estilo romântico celebra o amor em sua forma mais pura.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Características:</strong> Muita flor (especialmente rosas e peônias), tons pastel (rosa blush, nude, lavanda), velas, rendas, tecidos leves e esvoaçantes, mobiliário clássico e detalhes vintage.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Combina com casais que:</strong> São sonhadores, apaixonados e buscam um ambiente mágico e acolhedor.
              </p>
            </section>

            {/* Style 6 - Temático */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-fazenda-dark-brown mb-4 font-montserrat">
                6. Casamento Temático
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                Aqui a criatividade não tem limites! Casais que têm uma paixão em comum podem transformá-la no tema central do casamento.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Características:</strong> Tudo gira em torno do tema escolhido (cinema, anos 20, contos de fadas, viagens, etc.), desde a decoração e o vestuário até o cardápio e o entretenimento.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Combina com casais que:</strong> Querem um casamento único, divertido e que conte a sua história de forma inusitada.
              </p>
            </section>

            {/* Style 7 - Praiano */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-fazenda-dark-brown mb-4 font-montserrat">
                7. Casamento Praiano ou Tropical
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                Ideal para quem sonha com o pé na areia e a brisa do mar. Leve, descontraído e com uma beleza natural exuberante.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Características:</strong> Cerimônias na praia ou à beira-mar, folhagens, flores tropicais (costela de adão, helicônias), elementos como conchas e estrelas do mar, tecidos leves e cores vibrantes.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Combina com casais que:</strong> Amam a praia, o verão e um clima de festa relaxante.
              </p>
            </section>

            {/* How to Create Perfect Wedding */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                Como Criar o Casamento Perfeito para Você?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Conversem entre si:</strong> A primeira e mais importante etapa é que o casal converse abertamente sobre o que os agrada e o que não agrada. Pesquisem referências juntos.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Pensem na personalidade de vocês:</strong> O casamento deve ser um reflexo de quem vocês são como casal. São mais discretos ou extrovertidos? Clássicos ou modernos?
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Considerem o local:</strong> O local da celebração pode influenciar muito o estilo. Uma fazenda, por exemplo, é perfeita para o estilo rústico ou boho, mas também pode ser adaptada para um toque clássico ou romântico.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Definam um orçamento:</strong> O estilo escolhido pode impactar o orçamento. Tenham isso em mente ao fazer as escolhas.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Contratem bons profissionais:</strong> Cerimonialistas, decoradores e outros fornecedores experientes podem ajudar a transformar sua visão em realidade, independentemente do estilo.
              </p>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Escolher o estilo do casamento é uma jornada emocionante de autodescoberta e de fortalecimento da conexão do casal. Ao entender as opções e refletir sobre o que realmente os representa, vocês estarão no caminho certo para criar um dia que será lembrado com carinho por toda a vida.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                Já pensou em como a beleza natural e a versatilidade de um local como a Fazenda Moinho podem se adaptar ao estilo do seu casamento? Entre em contato conosco e descubra as possibilidades para o seu grande dia!
              </p>
            </section>

            {/* CTA Section */}
            <div className="bg-fazenda-green rounded-2xl p-8 text-center text-white mb-12">
              <h2 className="text-3xl font-bold mb-4 font-montserrat">
                Pronto para Descobrir o Estilo Perfeito?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Na Fazenda Moinho, a beleza natural e a versatilidade do nosso espaço se adaptam perfeitamente ao estilo do seu casamento dos sonhos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#fale-conosco"
                  className="bg-white text-fazenda-green px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  Solicitar Orçamento
                </Link>
                <a
                  href="https://wa.me/5511989860204?text=Olá! Li o guia sobre estilos de casamento e gostaria de mais informações."
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

export default EstiloCasamento;
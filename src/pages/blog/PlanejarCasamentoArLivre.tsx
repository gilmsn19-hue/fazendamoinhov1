import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/ui/SEOHead';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { ArrowRight } from 'lucide-react';

const PlanejarCasamentoArLivre = () => {
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
    "headline": "Como Planejar um Casamento ao Ar Livre Perfeito",
    "description": "Guia completo para planejar seu casamento ao ar livre dos sonhos. Dicas essenciais, cronograma detalhado e tudo que você precisa saber para uma cerimônia perfeita na natureza.",
    "image": "https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
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
    "datePublished": "2025-07-15",
    "dateModified": "2025-07-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fazendamoinho.com.br/blog/planejar-casamento-ao-ar-livre"
    },
    "wordCount": 2500
  };

  return (
    <>
      <SEOHead
        title="Como Planejar um Casamento ao Ar Livre Perfeito"
        description="Guia completo para planejar seu casamento ao ar livre dos sonhos. Dicas essenciais, cronograma detalhado e tudo que você precisa saber para uma cerimônia perfeita na natureza."
        canonical="/blog/planejar-casamento-ao-ar-livre"
        keywords="planejamento casamento ao ar livre, organização casamento natureza, dicas casamento externo, local casamento ao ar livre, buffet casamento natureza, conforto convidados casamento, casamento jardim, wedding outdoor, fazenda casamento, campo limpo paulista"
        ogImage="https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop"
        structuredData={structuredData}
      />

      <div className="pt-20">
        <Breadcrumbs />
        
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="text-center text-sm text-gray-600 mb-4">
                <span>Atualizado em 15 de Julho, 2025</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-fazenda-dark-brown mb-6 font-montserrat leading-tight">
                Como Planejar um Casamento ao Ar Livre Perfeito
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-helvetica">
                Descubra como organizar cada detalhe do seu casamento ao ar livre: escolha do local, decoração, buffet, clima e conforto dos convidados para um dia inesquecível.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src="https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg"
                alt="Casamento ao ar livre perfeito com decoração elegante em jardim"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Disclaimer */}
            <div className="mb-8">
              <p className="text-sm text-gray-600 italic text-center font-helvetica">
                Este guia foi elaborado com base em nossa experiência em eventos ao ar livre e pode ser adaptado conforme suas necessidades específicas.
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
                Casar sob o céu aberto é o sonho de muitos casais que desejam uma celebração leve, romântica e conectada à natureza. Ainda assim, para que esse cenário paradisíaco não se transforme em fonte de imprevistos, é fundamental um planejamento detalhado e estratégico. A seguir, você encontra um guia completo — com linguagem clara e fluída — para transformar seu "sim" ao ar livre em um evento perfeito.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                1. Defina o Local com Critérios Rigorosos
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                A magia de um casamento ao ar livre começa pela escolha do local. Antes de fechar qualquer contrato, visite o espaço em diferentes horários do dia para avaliar:
              </p>

              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4 font-montserrat">
                Infraestrutura disponível
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Verifique se há banheiros, cozinha de apoio, energia elétrica e estrutura para palco e som. Espaços rústicos podem exigir geradores ou banheiros químicos de apoio.
              </p>

              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4 font-montserrat">
                Acesso e estacionamento
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Considere o trajeto dos convidados, especialmente daqueles que vêm de fora da cidade. Garanta vagas suficientes e vias seguras até a entrada.
              </p>

              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4 font-montserrat">
                Recursos cenográficos naturais
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Salas de árvores, jardins floridos, lagos e pergolados podem servir de palco para cerimônias e fotos. Identifique os melhores pontos de luz e sombra ao longo do dia.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                Ao equilibrar estética e praticidade, você evita surpresas e garante que o ambiente reflita a personalidade do casal.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                2. Monte um Cronograma Detalhado
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Criar um "cronograma reverso" ajuda a distribuir tarefas e evitar correria de última hora. Comece a traçar suas etapas assim:
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Data do casamento</strong>
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>6 meses antes</strong> | Reserva do local e contratos básicos (cerimonial, buffet, fotografia)
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>3 meses antes</strong> | Definição de decoração, cardápio final e lista de convidados
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>1 mês antes</strong> | Ensaio de cerimonial, ajustes de iluminação e som
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>1 semana antes</strong> | Check‑list de montagem, confirmação de fornecedores e conferência de mobiliário
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                Cada fornecedor deve receber prazos claros e responsabilidades definidas. Um cerimonialista experiente garantirá que todos respeitem essas datas e ajude a resolver imprevistos.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                3. Planeje Seu Plano B Contra o Clima
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Nenhum casamento ao ar livre está a salvo de chuvas ou ventos inesperados. Por isso:
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Tendas elegantes:</strong> Opte por toldos transparentes ou gazebos brancos que harmonizem com a decoração, sem tirar a vista do céu.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Soluções de climatização:</strong> Em dias quentes, disponibilize leques e ventiladores; em dias mais frios, aquecedores portáteis e mantas para os convidados.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Local de apoio coberto:</strong> Reserve um salão ou área interna próxima, caso seja necessário migrar rapidamente a cerimônia.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                Com esses recursos, até um temporal se tornará apenas um detalhe a ser contornado.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                4. Decoração que Conversa com a Natureza
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                A leveza de um casamento ao ar livre pede decoração que complemente, não concorra, com o cenário. Invista em:
              </p>

              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4 font-montserrat">
                Flores e folhagens orgânicas
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Guirlandas de eucalipto, buquês de flores silvestres e arranjos simples em vasos rústicos criam harmonia.
              </p>

              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4 font-montserrat">
                Paleta de cores suaves
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Tons de branco, blush, verde-oliva e dourado enriquecem o ambiente sem sobrecarregar.
              </p>

              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4 font-montserrat">
                Iluminação cenográfica
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Luzinhas de fada ("fairy lights"), lanternas de papel e tochas ao longo do perímetro garantem um charme extra ao entardecer.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                Pequenos detalhes — como caminhos marcados por lâmpadas solares e plaquinhas de madeira — reforçam o clima acolhedor.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                5. Um Buffet Ajustado à Atmosfera
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                O menu deve refletir a estação do ano e o estilo do evento:
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Cardápio leve para o dia:</strong> Saladas criativas, finger foods coloridos, mocktails e sucos naturais.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Pratos mais substanciosos para a noite:</strong> Risotos, carnes grelhadas e opções vegetarianas sofisticadas.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Estação de bebidas diferenciadas:</strong> Bar temático com drinks sem álcool e coquetéis assinados pelo bartender.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                Marque degustações com antecedência e peça sugestões de harmonização para garantir que cada prato valorize o clima do seu casamento.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                6. Conforto e Acessórios para os Convidados
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                Demonstrar cuidado com o bem-estar de quem participa é tão importante quanto o décor:
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Kit de boas-vindas:</strong> Ofereça protetor solar, repelente e leques personalizados.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Espaços de descanso:</strong> Cantinhos com lounges de almofadas, pufes e mesinhas.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Água aromatizada e petiscos leves:</strong> Disponibilize pontos de hidratação estratégica para evitar filas.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                Esses mimos tornam o evento memorável e confortável, evitando reclamações sob o sol ou frio.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                7. Execução Minuto a Minuto no Dia
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                No grande dia, tenha uma planilha detalhada com horários de montagem, chegada de cada fornecedor e fluxo de cerimônia:
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Montagem do altar e recepção de flores:</strong> 8h – 10h
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Testes de som e luz:</strong> 10h – 11h
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Chegada do buffet e bar:</strong> 11h – 12h
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Cerimônia:</strong> 16h
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-helvetica">
                <strong>Coquetel e fotos:</strong> 17h – 18h
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-helvetica">
                <strong>Jantar e festa:</strong> 19h – 23h
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                Delegue a um responsável (cerimonialista ou assistente de confiança) o contato direto com cada fornecedor para ajustes de última hora.
              </p>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-fazenda-dark-brown mb-6 font-montserrat">
                Conclusão
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed font-helvetica">
                Planejar um casamento ao ar livre exige atenção a detalhes que vão além da estética: logística, conforto e um plano de contingência são tão cruciais quanto flores e qualidade do buffet. Seguindo este guia, você transforma seu "sim" em uma experiência fluida, memorável e repleta de encanto — do pôr do sol até o último brinde.
              </p>
            </section>

            {/* CTA Section */}
            <div className="bg-fazenda-green rounded-2xl p-8 text-center text-white mb-12">
              <h2 className="text-3xl font-bold mb-4 font-montserrat">
                Pronto para dizer "sim" sem preocupação?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Conte com nossa equipe especializada em casamentos ao ar livre: solicite um orçamento personalizado e viva o dia mais importante da sua vida com tranquilidade e estilo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#fale-conosco"
                  className="bg-white text-fazenda-green px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  Solicitar Orçamento
                </Link>
                <a
                  href="https://wa.me/5511989860204?text=Olá! Li o artigo sobre casamento ao ar livre e gostaria de mais informações."
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

export default PlanejarCasamentoArLivre;
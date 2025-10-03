import React from 'react';
import SEOHead from '../components/ui/SEOHead';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { Shield, Lock, Eye, FileText, AlertCircle, CheckCircle } from 'lucide-react';

const PoliticaPrivacidade = () => {
  return (
    <>
      <SEOHead
        title="Política de Privacidade - Fazenda Moinho"
        description="Conheça nossa política de privacidade e como protegemos seus dados pessoais. Compromisso com a segurança e conformidade com LGPD para eventos ao ar livre em Campo Limpo Paulista."
        canonical="/politica-de-privacidade"
        keywords="política de privacidade, proteção de dados, LGPD, segurança online, privacidade digital, fazenda moinho, eventos ao ar livre, campo limpo paulista"
      />

      <div className="pt-20">
        <Breadcrumbs />
        
        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-fazenda-dark-brown">Introdução</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Fazenda Moinho está comprometida em proteger e respeitar sua privacidade. Esta Política de Privacidade 
                explica como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você visita 
                nosso site ou utiliza nossos serviços.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ao utilizar nosso site, você concorda com a coleta e uso de informações de acordo com esta política. 
                Estamos em conformidade com a Lei Geral de Proteção de Dados (LGPD) e o Regulamento Geral sobre a 
                Proteção de Dados (GDPR), garantindo os mais altos padrões de proteção de dados.
              </p>
            </div>

            {/* Data Collection */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Eye className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-fazenda-dark-brown">Informações que Coletamos</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Dados de Navegação</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Coletamos automaticamente certas informações quando você visita nosso site, incluindo:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Endereço IP e localização geográfica aproximada</li>
                <li>Tipo de navegador e sistema operacional</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Referência de origem (site de onde você veio)</li>
                <li>Data e hora das visitas</li>
              </ul>

              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4">Comunicação via WhatsApp</h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                <div className="flex items-center mb-2">
                  <AlertCircle className="w-5 h-5 text-amber-600 mr-2" />
                  <h4 className="font-semibold text-amber-800">Importante sobre o WhatsApp</h4>
                </div>
                <p className="text-amber-700 text-sm">
                  Ao clicar nos botões de contato via WhatsApp em nosso site, você será redirecionado para o aplicativo 
                  WhatsApp. A partir desse momento, toda comunicação e dados compartilhados estarão sujeitos aos 
                  <strong> Termos de Uso e Política de Privacidade do WhatsApp</strong>. Recomendamos que você revise 
                  essas políticas antes de compartilhar informações pessoais.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Ferramentas de Análise</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos ferramentas de análise de tráfego, como o Google Analytics, para entender como nosso site 
                é utilizado e melhorar a experiência do usuário. Essas ferramentas coletam dados de forma anonimizada, 
                incluindo:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Estatísticas de visitação e comportamento de navegação</li>
                <li>Dados demográficos gerais (idade, gênero, interesses)</li>
                <li>Informações sobre dispositivos utilizados</li>
                <li>Padrões de tráfego e origem dos visitantes</li>
              </ul>
            </div>

            {/* Data Usage */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-fazenda-dark-brown">Como Utilizamos suas Informações</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                As informações coletadas são utilizadas exclusivamente para:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Melhorar a funcionalidade e experiência do nosso site</li>
                <li>Analisar padrões de uso para otimização de conteúdo</li>
                <li>Garantir a segurança e integridade do site</li>
                <li>Cumprir obrigações legais e regulamentares</li>
                <li>Desenvolver novos recursos e serviços</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                <strong>Importante:</strong> Não vendemos, alugamos ou compartilhamos suas informações pessoais 
                com terceiros para fins comerciais sem seu consentimento explícito.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Lock className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-fazenda-dark-brown">Segurança dos Dados</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas 
                informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição, incluindo:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Criptografia SSL/TLS para transmissão de dados</li>
                <li>Servidores seguros com proteção contra ataques</li>
                <li>Acesso restrito aos dados por pessoal autorizado</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Backups regulares e seguros</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-fazenda-dark-brown mb-6">Cookies e Tecnologias Similares</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nosso site utiliza cookies e tecnologias similares para melhorar sua experiência de navegação. 
                Os cookies são pequenos arquivos de texto armazenados em seu dispositivo que nos ajudam a:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Lembrar suas preferências de navegação</li>
                <li>Analisar o tráfego do site</li>
                <li>Personalizar conteúdo e anúncios</li>
                <li>Garantir a funcionalidade adequada do site</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Você pode controlar o uso de cookies através das configurações do seu navegador, mas isso pode 
                afetar a funcionalidade de algumas partes do nosso site.
              </p>
            </div>

            {/* Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-fazenda-dark-brown mb-6">Seus Direitos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                De acordo com a LGPD e GDPR, você tem os seguintes direitos em relação aos seus dados pessoais:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Acesso e Portabilidade</h4>
                  <p className="text-green-700 text-sm">
                    Solicitar acesso aos seus dados pessoais e receber uma cópia em formato estruturado.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Retificação</h4>
                  <p className="text-green-700 text-sm">
                    Solicitar a correção de dados pessoais incompletos, inexatos ou desatualizados.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Exclusão</h4>
                  <p className="text-green-700 text-sm">
                    Solicitar a exclusão de dados pessoais desnecessários ou tratados em desconformidade.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Oposição</h4>
                  <p className="text-green-700 text-sm">
                    Opor-se ao tratamento de dados pessoais com base em legítimo interesse.
                  </p>
                </div>
              </div>
            </div>

            {/* Third Party Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-fazenda-dark-brown mb-6">Serviços de Terceiros</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nosso site pode conter links para sites de terceiros ou utilizar serviços externos. 
                Não somos responsáveis pelas práticas de privacidade desses terceiros. Recomendamos 
                que você revise as políticas de privacidade de qualquer site que visitar.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Serviços Utilizados:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Google Analytics (análise de tráfego)</li>
                  <li>• Google Maps (localização)</li>
                  <li>• WhatsApp (comunicação)</li>
                  <li>• Serviços de hospedagem web</li>
                </ul>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-fazenda-dark-brown mb-6">Atualizações desta Política</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em 
                nossas práticas ou por outros motivos operacionais, legais ou regulamentares. Recomendamos 
                que você revise esta página regularmente para se manter informado sobre como protegemos 
                suas informações.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mudanças significativas serão comunicadas através de aviso em nosso site ou por outros 
                meios apropriados antes de entrarem em vigor.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-fazenda-dark-brown mb-6">Contato</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos 
                relacionados aos dados pessoais, entre em contato conosco:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>E-mail:</strong> contato@fazendamoinho.com.br</p>
                <p><strong>Telefone:</strong> (11) 99999-9999</p>
                <p><strong>Endereço:</strong> Estrada Rural, Km 15, Região Metropolitana, SP</p>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Responderemos às suas solicitações dentro do prazo estabelecido pela legislação aplicável.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PoliticaPrivacidade;
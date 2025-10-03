import React from 'react';
import SEOHead from '../components/ui/SEOHead';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { FileText, Scale, Shield, AlertTriangle, Info, CheckCircle } from 'lucide-react';

const TermosUso = () => {
  return (
    <>
      <SEOHead
        title="Termos de Uso - Fazenda Moinho"
        description="Conheça os termos de uso do site da Fazenda Moinho. Regras, responsabilidades e condições para utilização dos nossos serviços de eventos ao ar livre em Campo Limpo Paulista."
        canonical="/termos-de-uso"
        keywords="termos de uso, condições de uso, responsabilidades, propriedade intelectual, fazenda moinho, eventos ao ar livre, limitação responsabilidade, campo limpo paulista"
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
                Bem-vindo ao site da Fazenda Moinho. Estes Termos de Uso estabelecem as condições gerais 
                para utilização do nosso site e serviços. Ao acessar e usar este site, você concorda em 
                cumprir e estar vinculado a estes termos.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Se você não concordar com qualquer parte destes termos, não deve utilizar nosso site. 
                Recomendamos que leia atentamente todos os termos antes de continuar a navegação.
              </p>
            </div>

            {/* Site Purpose */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Info className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-fazenda-dark-brown">Natureza do Site</h2>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <h3 className="font-semibold text-blue-800 mb-3">Site Informativo</h3>
                <p className="text-blue-700 leading-relaxed">
                  Este site tem caráter <strong>puramente informativo</strong> e destina-se a apresentar 
                  nossos serviços, espaços e facilitar o primeiro contato com potenciais clientes. 
                  Não realizamos vendas diretas ou coleta de dados pessoais através de formulários online.
                </p>
              </div>
              
              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4">Contato e Comunicação</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Todo contato para informações adicionais, orçamentos e contratação de serviços ocorre 
                exclusivamente através do WhatsApp. Ao utilizar os botões de contato via WhatsApp:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Você será redirecionado para o aplicativo WhatsApp</li>
                <li>A comunicação estará sujeita aos termos do WhatsApp</li>
                <li>Nossos representantes fornecerão informações detalhadas sobre serviços</li>
                <li>Orçamentos e propostas serão elaborados conforme sua necessidade</li>
              </ul>
            </div>

            {/* Acceptable Use */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-fazenda-dark-brown">Uso Permitido</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Você pode utilizar nosso site para:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Visualizar informações sobre nossos serviços e espaços</li>
                <li>Navegar pela galeria de fotos e conteúdo informativo</li>
                <li>Entrar em contato conosco através dos canais disponibilizados</li>
                <li>Compartilhar nosso conteúdo em redes sociais</li>
                <li>Acessar informações de localização e contato</li>
              </ul>

              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4">Uso Proibido</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                É expressamente proibido:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Usar o site para fins ilegais ou não autorizados</li>
                <li>Tentar acessar áreas restritas ou sistemas não públicos</li>
                <li>Reproduzir, distribuir ou modificar conteúdo sem autorização</li>
                <li>Interferir no funcionamento normal do site</li>
                <li>Transmitir vírus, malware ou código malicioso</li>
                <li>Coletar informações de outros usuários</li>
                <li>Usar o site para spam ou comunicações não solicitadas</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-fazenda-dark-brown">Propriedade Intelectual</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Todo o conteúdo presente neste site, incluindo mas não limitado a textos, imagens, 
                fotografias, vídeos, logotipos, design, layout e código-fonte, é de propriedade 
                exclusiva da Fazenda Moinho ou de seus licenciadores.
              </p>
              
              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4">Direitos Autorais</h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                <p className="text-amber-700 text-sm">
                  <strong>Proteção Legal:</strong> Todo o conteúdo está protegido por direitos autorais, 
                  marcas registradas e outras leis de propriedade intelectual aplicáveis no Brasil e 
                  internacionalmente.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4">Uso Autorizado</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Você pode:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Visualizar e navegar pelo conteúdo para uso pessoal</li>
                <li>Compartilhar links para nossas páginas em redes sociais</li>
                <li>Fazer citações breves com devida atribuição</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                Para qualquer outro uso, incluindo reprodução comercial, é necessária autorização 
                prévia por escrito.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-fazenda-dark-brown">Isenção de Garantias</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4">Disponibilidade do Site</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Embora nos esforcemos para manter o site sempre disponível, não garantimos que:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>O site estará sempre acessível ou livre de interrupções</li>
                <li>Todas as funcionalidades operarão sem erros</li>
                <li>O site será compatível com todos os dispositivos ou navegadores</li>
                <li>As informações estarão sempre atualizadas em tempo real</li>
              </ul>

              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4">Precisão das Informações</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fazemos nosso melhor para manter as informações precisas e atualizadas, mas:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Informações podem estar sujeitas a alterações sem aviso prévio</li>
                <li>Preços e disponibilidade devem ser confirmados via contato direto</li>
                <li>Imagens podem não refletir exatamente a realidade atual</li>
                <li>Especificações técnicas podem variar</li>
              </ul>
            </div>

            {/* Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-fazenda-dark-brown mb-6">Limitação de Responsabilidade</h2>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <h3 className="font-semibold text-red-800 mb-3">Importante</h3>
                <p className="text-red-700 leading-relaxed">
                  Na máxima extensão permitida por lei, a Fazenda Moinho não será responsável por 
                  quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais 
                  resultantes do uso ou incapacidade de usar este site.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-fazenda-dark-brown mb-4">Exclusões Específicas</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Não nos responsabilizamos por:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Perda de dados ou informações</li>
                <li>Interrupção de negócios ou atividades</li>
                <li>Danos causados por vírus ou malware</li>
                <li>Ações de terceiros ou sites externos</li>
                <li>Decisões tomadas com base nas informações do site</li>
                <li>Problemas técnicos fora do nosso controle</li>
              </ul>
            </div>

            {/* Third Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-fazenda-dark-brown mb-6">Links para Terceiros</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nosso site pode conter links para sites de terceiros (como WhatsApp, Google Maps, 
                redes sociais). Estes links são fornecidos apenas para conveniência e não constituem 
                endosso do conteúdo desses sites.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Não temos controle sobre o conteúdo, políticas de privacidade ou práticas de sites 
                de terceiros e não assumimos responsabilidade por eles. Recomendamos que você revise 
                os termos e políticas de qualquer site que visitar.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-fazenda-dark-brown mb-6">Responsabilidades do Usuário</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ao utilizar nosso site, você se compromete a:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Uso Responsável</h4>
                  <p className="text-green-700 text-sm">
                    Utilizar o site de forma ética e em conformidade com estes termos e a legislação aplicável.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Informações Precisas</h4>
                  <p className="text-green-700 text-sm">
                    Fornecer informações verdadeiras e atualizadas quando entrar em contato conosco.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Segurança</h4>
                  <p className="text-green-700 text-sm">
                    Manter a segurança de seus dispositivos e não comprometer a segurança do site.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Respeito</h4>
                  <p className="text-green-700 text-sm">
                    Tratar nossa equipe e outros usuários com respeito e cortesia.
                  </p>
                </div>
              </div>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-fazenda-dark-brown mb-6">Modificações dos Termos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
                As alterações entrarão em vigor imediatamente após sua publicação no site. 
                É sua responsabilidade revisar periodicamente estes termos.
              </p>
              <p className="text-gray-700 leading-relaxed">
                O uso continuado do site após as modificações constitui aceitação dos novos termos. 
                Se você não concordar com as alterações, deve interromper o uso do site.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-fazenda-dark-brown mb-6">Lei Aplicável e Jurisdição</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. 
                Qualquer disputa relacionada a estes termos ou ao uso do site será submetida 
                à jurisdição exclusiva dos tribunais competentes do Estado de São Paulo.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Tentaremos resolver qualquer disputa de forma amigável antes de recorrer a 
                procedimentos legais formais.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-fazenda-dark-brown mb-6">Contato</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Se você tiver dúvidas sobre estes Termos de Uso ou precisar de esclarecimentos, 
                entre em contato conosco:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>E-mail:</strong> contato@fazendamoinho.com.br</p>
                <p><strong>Telefone:</strong> (11) 99999-9999</p>
                <p><strong>WhatsApp:</strong> (11) 99999-9999</p>
                <p><strong>Endereço:</strong> Estrada Rural, Km 15, Região Metropolitana, SP</p>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Nossa equipe está disponível para esclarecer dúvidas e fornecer suporte.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermosUso;
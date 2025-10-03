import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, User, Clock, Calendar, DollarSign, Users, Tag, ChevronDown } from 'lucide-react';
import GoogleMap from '../ui/GoogleMap';

const FaleConosco = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoEvento: '',
    dataEvento: '',
    numConvidados: '',
    orcamento: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    const section = document.getElementById('fale-conosco');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá! Entrei em contato através do site:

*Nome:* ${formData.nome}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
*Tipo de Evento:* ${formData.tipoEvento}
*Data do Evento:* ${formData.dataEvento}
*Número de Convidados:* ${formData.numConvidados}
*Orçamento Estimado:* ${formData.orcamento}

*Mensagem:*
${formData.mensagem}

Aguardo retorno. Obrigado!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5511989860204?text=${encodedMessage}`;
    
  window.open(whatsappUrl, '_blank');
    
    // Simular envio
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Limpar formulário
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        tipoEvento: '',
        dataEvento: '',
        numConvidados: '',
        orcamento: '',
        mensagem: ''
      });
    }, 100);
  };

  const address = "Estrada das Rosas, Estr. do Moinho, 160, Campo Limpo Paulista - SP, 13236-559";
  const coordinates = {
    lat: -23.218008104114677,
    lng: -46.82259305854563
  };
  
  // Google Maps embed pb parameter for exact location
  const googleMapsEmbedPbParam = "!1m18!1m12!1m3!1d98665.77577818192!2d-46.82259305854563!3d-23.218008104114677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cedf6cca8ac3f9%3A0xe58318327f385e97!2sFazenda%20Moinho%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1753276112636!5m2!1spt-BR!2sbr";
  
  // Direct Google Maps URL for Fazenda Moinho Eventos profile
  const googleMapsUrl = "https://www.google.com/maps/place/Fazenda+Moinho+Eventos/@-23.2395976,-46.7982376,13.75z/data=!4m12!1m5!3m4!2zMjPCsDEzJzA0LjgiUyA0NsKwNDknMjEuMyJX!8m2!3d-23.2180081!4d-46.8225931!3m5!1s0x94cedf6cca8ac3f9:0xe58318327f385e97!8m2!3d-23.2398855!4d-46.7938358!16s%2Fg%2F11l1fp5z31?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="fale-conosco" className={`py-16 sm:py-20 lg:py-24 bg-fazenda-green overflow-hidden section-curve-top section-gradient-reveal ${
      isVisible ? 'is-visible' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        {/* Header - Title */}
        <div className={`text-center mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="relative inline-block">            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-fazenda-white font-montserrat">
              Contato e Localização
            </h2>
            
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-fazenda-sage/50 to-transparent"></div>
          </div>
        </div>

        {/* Header - Paragraph */}
        <div className={`text-center mb-8 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-sm sm:text-lg text-white leading-relaxed max-w-2xl mx-auto font-helvetica">
            <span className="max-w-xl mx-auto block">
              Estamos prontos para transformar seu evento em uma experiência inesquecível. Preencha o formulário para agendarmos uma visita e descobrir como podemos realizar seu sonho.
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Formulário de Contato */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-green-600" />
                  Envie sua Mensagem
                </h3>
                <p className="text-gray-600">
                  Preencha o formulário e entraremos em contato em até 24 horas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Seu nome completo"
                      />
                      <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        required
                        value={formData.telefone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="(21) 99999-9999"
                      />
                      <Phone className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="tipoEvento" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tipo de Evento *
                    </label>
                    <div className="relative">
                      <select
                        id="tipoEvento"
                        name="tipoEvento"
                        required
                        value={formData.tipoEvento}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-12 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="">Selecione o tipo de evento</option>
                        <option value="Casamentos e Mini Weddings">Casamentos e Mini Weddings</option>
                        <option value="Aniversários">Aniversários</option>
                        <option value="Eventos Corporativos">Eventos Corporativos</option>
                        <option value="Ensaios Fotográficos e Pré-Weddings">Ensaios Fotográficos e Pré-Weddings</option>
                      </select>
                      <Tag className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                      <ChevronDown className="absolute right-4 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="dataEvento" className="block text-sm font-semibold text-gray-700 mb-2">
                      Data do Evento *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="dataEvento"
                        name="dataEvento"
                        required
                        value={formData.dataEvento}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      />
                      <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="numConvidados" className="block text-sm font-semibold text-gray-700 mb-2">
                      Número de Convidados *
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="numConvidados"
                        name="numConvidados"
                        required
                        min="1"
                        value={formData.numConvidados}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Ex: 150"
                      />
                      <Users className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="orcamento" className="block text-sm font-semibold text-gray-700 mb-2">
                      Orçamento Estimado *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="orcamento"
                        name="orcamento"
                        required
                        value={formData.orcamento}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Ex: R$ 10.000"
                      />
                      <DollarSign className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="Conte-nos sobre seu evento, data desejada, número de convidados e como podemos ajudar..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Mapa e Informações */}
          <div className={`flex flex-col h-full transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            {/* Container do Mapa */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col h-96 sm:h-80 lg:h-full">
              {/* Mapa */}
              <div className="flex-1 relative overflow-hidden rounded-t-3xl">
                <GoogleMap
                  address={address}
                  coordinates={coordinates}
                  embedPbParam={googleMapsEmbedPbParam}
                  googleMapsUrl={googleMapsUrl}
                  className="h-full w-full"
                />
              </div>
              
              {/* Botão Abrir no Maps */}
              <div className="p-6">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Abrir no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaleConosco;
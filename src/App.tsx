import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';

// Pages
import Home from './pages/Home';
import OEspaco from './pages/OEspaco';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import TermosUso from './pages/TermosUso';

// Blog Articles
import PlanejarCasamentoArLivre from './pages/blog/PlanejarCasamentoArLivre';
import TendenciasCasamentos2025 from './pages/blog/TendenciasCasamentos2025';
import EstiloCasamento from './pages/blog/EstiloCasamento';
import BoloCasamento from './pages/blog/BoloCasamento';

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-espaco" element={<OEspaco />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/planejar-casamento-ao-ar-livre" element={<PlanejarCasamentoArLivre />} />
          <Route path="/blog/tendencias-casamentos-2025" element={<TendenciasCasamentos2025 />} />
          <Route path="/blog/estilo-casamento" element={<EstiloCasamento />} />
          <Route path="/blog/bolo-casamento" element={<BoloCasamento />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-de-uso" element={<TermosUso />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
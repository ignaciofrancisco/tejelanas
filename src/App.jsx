import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav/TopNavBar';
import Header from './components/Secction/Header';
import Nosotros from './components/Secction/nosotros';
import Contacto from './components/Secction/contacto'; // Asegúrate de importar la página de contacto
import Parcelas from './components/Secction/parcelas'; // Asegúrate de importar la página de parcelas
import Footer from './components/Secction/Footer'; // si lo tienes
import PreguntasFrecuentes from './components/Secction/PreguntasFrecuentes';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Footer />
          </>
        } />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/PreguntasFrecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/contacto" element={<Contacto />} /> {/* Ruta para contacto */}
        <Route path="/parcelas" element={<Parcelas />} /> {/* Ruta para parcelas */}
      </Routes>
    </Router>
  );
}

export default App;


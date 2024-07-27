import './App.css';
import Menu from './components/menu/menu';
import BannerPrincipal from './components/banner-principal/BannerPrincipal'; 
import SectionBeneficios from './components/section-beneficios/SectionBeneficios';
import QuemSomos from './components/quem-somos/QuemSomos';
import SectionContatos from './components/section-contatos/SectionContatos';
import Footer from './components/footer/Footer';

function App() {
  return (<>
      <header>
        <Menu />
      </header>
      <main>
        <BannerPrincipal />

        <section id='beneficios'>
          <SectionBeneficios />
        </section>
        
        <section id='ajudamos'>
          <QuemSomos />
        </section>
        
        <section id='falaconosco'>
          <SectionContatos />
        </section>
        
        <Footer />
      </main>
    </>
  );
}

export default App;

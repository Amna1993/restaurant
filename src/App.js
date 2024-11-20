import './App.css';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Menu />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

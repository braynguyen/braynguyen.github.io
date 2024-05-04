import Hero from './components/Hero';
import './app.css'
import Header from './components/Header';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <div  className='portfolio-container'>
        <h1 className='portfolio-text'>PORTFOLIO</h1>
        <div className='test' id="portfolio-section"></div>
      </div>
    </>
  )
}

export default App

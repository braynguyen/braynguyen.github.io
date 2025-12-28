import Projects from "./Projects"
import './styles/Portfolio.css'
import Work from "./Work";

function Portfolio() {
    return (
        <>
            <div id='portfolio-section' className='portfolio-container'>
                <PortfolioText />
                <Work />
                <Projects />
            </div>
        </>
    )
}

const PortfolioText = () => {
    return (
      <div className="portfolio-text-container">
        <h1 className="portfolio-text">
          portfolio
        </h1>
      </div>
    );
  };

export default Portfolio;
import Projects from "./Projects"
import './styles/Portfolio.css'
import Work from "./Work";
import { useEffect, useRef } from 'react';

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
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const resizeText = () => {
            if (textRef.current) {
                const container = textRef.current.parentElement;
                if (container) {
                    const containerWidth = window.innerWidth;
                    let fontSize = 1;

                    textRef.current.style.fontSize = fontSize + 'px';

                    while (textRef.current.scrollWidth < containerWidth && fontSize < 1000) {
                        fontSize++;
                        textRef.current.style.fontSize = fontSize + 'px';
                    }

                    while (textRef.current.scrollWidth > containerWidth && fontSize > 1) {
                        fontSize--;
                        textRef.current.style.fontSize = fontSize + 'px';
                    }
                }
            }
        };

        resizeText();
        window.addEventListener('resize', resizeText);

        return () => window.removeEventListener('resize', resizeText);
    }, []);

    return (
      <div className="portfolio-text-container">
        <h1 ref={textRef} className="portfolio-text">
          portfolio
        </h1>
      </div>
    );
  };

export default Portfolio;
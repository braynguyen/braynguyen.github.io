import Projects from "./Projects"
import './styles/Portfolio.css'
import Work from "./Work";
import { useEffect, useRef } from "react";

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
    const containerRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLSpanElement | null>(null);
  
    useEffect(() => {
      resizeText();
  
      window.addEventListener("resize", resizeText);
  
      return () => {
        window.removeEventListener("resize", resizeText);
      };
    }, []);
  
    const resizeText = () => {
      const container = containerRef.current;
      const text = textRef.current;
  
      if (!container || !text) {
        return;
      }
  
      const containerWidth = container.offsetWidth;
      let minFontSize = 1;
      let maxFontSize = 2500;
  
      // Loop to find the maximum font size that fits the container width
      while (minFontSize <= maxFontSize) {
        const midFontSize = Math.floor((minFontSize + maxFontSize) / 2);
        text.style.fontSize = midFontSize + "px";
  
        if (text.offsetWidth <= containerWidth) {
          minFontSize = midFontSize + 1;
        } else {
          maxFontSize = midFontSize - 5;
        }
      }
  
      // Set the font size to the maximum font size that fits the container width
      text.style.fontSize = maxFontSize + "px";
  
      // Adjust the container height to fit the text height
      container.style.height = text.offsetHeight - 0.06*text.offsetHeight + "px";
    };
  
    return (
      <div
        className="flex relative w-full items-center overflow-hidden"
        ref={containerRef}
      >
        <span
          className="absolute bottom-0 left-0 mx-auto whitespace-nowrap text-center text-color-white uppercase portfolio-text"
          ref={textRef}
        >
          portfolio
        </span>
      </div>
    );
  };

export default Portfolio;
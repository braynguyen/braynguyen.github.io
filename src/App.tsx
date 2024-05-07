import Hero from './components/Hero';
import './app.css'
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    const preventHorizontalScroll = (event: TouchEvent) => {
      // Prevent horizontal scrolling if the user is touching the screen and moving horizontally
      if (event.touches.length === 1) {
        const touch = event.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;
        const xMove = Math.abs(x - touch.pageX);
        const yMove = Math.abs(y - touch.pageY);

        if (xMove > yMove) {
          event.preventDefault();
        }
      }
    };

    // Add event listener to touchmove event to prevent horizontal scrolling
    document.addEventListener("touchmove", preventHorizontalScroll, { passive: false });

    // Clean up the event listener
    return () => {
      document.removeEventListener("touchmove", preventHorizontalScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Portfolio />
      <Contact />
    </>
  )
}

export default App

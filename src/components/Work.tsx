import "./styles/Work.css";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Work() {
  return (
    <>
      <div id="work-section">
        <div id="work-container">
          <HorizontalScrollCarousel />
        </div>
      </div>
    </>
  );
}

export default Work;

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], isMobile ? ["5%", "-90%"] : ["1%", "-80%"]);

  const [Work, setWork] = useState<CardType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/work.json');
                const jsonData = await response.json();
                setWork(jsonData.work);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


  return (
    <section ref={targetRef} className={`work-section-wrapper ${isMobile ? 'mobile' : ''}`}>
      <div className="work-sticky-container">
        <div className="work-header">
          <span className="work-title">Experience</span>
        </div>
        <motion.div style={{ x }} className="work-cards-container">
          {Work.map((card) => {
            return <Card card={card} key={card.name} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setWidth(img.width);
      setHeight(img.height);
    };
    img.src = card.url;
  }, [card.url]);

  const aspectRatio = width && height ? width / height : 1;
  const maxCardHeight = 55 * aspectRatio;

  return (
    <div
      key={card.id}
      className="work-card"
    >
      <div className="work-card-logo-container" style={{ maxHeight: `${maxCardHeight}vh` }}>
        <img
          className="work-card-logo"
          src={card.url}
          alt={`${card.name} logo`}
        />
      </div>

      <div className="work-card-overlay">
        <div className="work-card-content">
          <h2 className="work-card-title">{card.title}</h2>
          <h3 className="work-card-company">{card.name}</h3>
          <p className="work-card-description">{card.desc}</p>
        </div>
      </div>
    </div>
  );
};

type CardType = {
  url: string;
  name: string;
  title: string;
  desc: string;
  id: number;
};
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

  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);


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
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-[8vh] flex h-[92vh] items-center overflow-hidden">
        <div className="absolute top-10 inset-x-0 flex items-center justify-center text-white section-name">
          Experience <p className="text-xs">(keep scrolling like normal)</p>
        </div>
        <motion.div style={{ x }} className="flex gap-4">
          {Work.map((card) => {
            return <Card card={card} key={card.id} />;
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
  const maxCardHeight = 55 * aspectRatio; // Maximum height based on aspect ratio

  return (
    <div
      key={card.id}
      className="group relative overflow-hidden bg-[#056150] w-[55vh] h-[55vh] rounded-full flex items-center justify-center transition-all duration-[300ms] ease-in-out hover:rounded-lg"
    >
      <div className="w-[70%]" style={{ maxHeight: `${maxCardHeight}vh` }}>
        <img
          className="w-full h-full object-cover"
          src={card.url}
          alt="Card Image"
        />
      </div>

      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500 bg-white bg-opacity-50 group-hover:backdrop-blur-sm transition hover:delay-[300ms]">
        <div className="p-5 text-black text-center font-open-sans">
          <h2 className="font-bold text-4xl underline">{card.title}</h2>
          <h2 className="font-bold text-2xl italic text-gray-900">{card.name}</h2>
          <p className="pt-[5%] text-xl font-bold">{card.desc}</p>
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
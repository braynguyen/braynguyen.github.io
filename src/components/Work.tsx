import "./styles/Work.css";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

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
  // const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-[8vh] flex h-[92vh] items-center overflow-hidden">
        <div className="absolute top-10 inset-x-0 flex items-center justify-center text-white section-name">
          Experience <p className="text-xs">(keep scrolling like normal)</p>
        </div>
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

import { useEffect, useState } from "react";

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
  const calculatedWidth = `${50 * aspectRatio}vh`; // Assuming the height is 50vh

  return (
    <div
      key={card.id}
      className="group relative overflow-hidden bg-neutral-200"
      style={{ width: calculatedWidth, height: "50vh" }}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        {/* Content */}
      </div>
    </div>
  );
};



type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/logos/PNC.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/logos/stanford.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/logos/IBM.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/logos/surreality_lab.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/logos/UCSB.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/logos/responsive_medicine.png",
    title: "Title 6",
    id: 6,
  },
];

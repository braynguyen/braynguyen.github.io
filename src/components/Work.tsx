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
      className="group relative overflow-hidden bg-[#056150] w-[55vh] h-[55vh] rounded-full flex items-center justify-center transition-all duration-[300ms] ease-in-out hover:rounded"
    >
      <div className="w-[70%]" style={{ maxHeight: `${maxCardHeight}vh` }}>
        <img
          className="w-full h-full object-cover"
          src={card.url}
          alt="Card Image"
        />
      </div>

      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500 bg-white bg-opacity-40 group-hover:backdrop-blur-sm transition hover:delay-[300ms]">
  <div className="text-black text-center font-open-sans">
    <p className="font-bold text-5xl underline">
      {card.title}
    </p>
    <p className="pt-[5%] text-xl font-bold">
      {card.desc}
    </p>
  </div>
</div>
    </div>
  );
};

type CardType = {
  url: string;
  title: string;
  desc: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/logos/PNC.png",
    title: "Software Engineer Intern",
    desc: "Incoming IBM Accelerate Fellow",
    id: 1,
  },
  {
    url: "/logos/stanford.png",
    title: "Student Instructor",
    desc: "Teaching Stanford's CS106A. Educated students in Python leveraging beginner-friendly libraries such as Stanford's Karel.",
    id: 2,
  },
  {
    url: "/logos/surreality_lab.png",
    title: "Computer Science Research Lead",
    desc: "Developed a WebSocket API for connecting electric scalpels to an AR dashboard, enhancing surgical precision & reducing contamination risk, leading to faster surgeries & improved communication in the operating room. Spearheaded IoT project in OR, leveraging AR dashboards for display & button control, employing computer vision & machine learning for segmentation, optimizing operational efficiency.",
    id: 3,
  },
  {
    url: "/logos/IBM.png",
    title: "IBM Accelerate Fellow",
    desc: "Incoming IBM Accelerate Fellow for software engineering",
    id: 4,
  },
  {
    url: "/logos/UCSB.png",
    title: "AI Researcher",
    desc: "Simulated Hobbesian Social Contract Theory using generative agents created with OpenAI to verify and build open his findings. Architected an algorithm for generative agents to propose and discuss policies, taking the simulation from numbers to full on conversations.",
    id: 5,
  },
  {
    url: "/logos/PittCSC.png",
    title: "Special Events Coordinator",
    desc: "",
    id: 6,
  },
  {
    url: "/logos/responsive_medicine.png",
    title: "SWE Intern (Local Company)",
    desc: "Migrated company website from Wix to self-hosted React and Node web-app, projecting $20,000 savings year after year and increasing productivity of front-desk scheduling team by 60%. Added an on-website scheduler for appointments using Google Calendar API to reduce the friction of scheduling for patients and stored the appointments in a MySQL database.",
    id: 7,
  },
  {
    url: "/logos/PPG.png",
    title: "PPG Primer Intern",
    desc: "Collaborated with other interns on small projects and tasks designed for team building and creativity. Attended a workshop on Agile methodology and put it to use for mock design at a design thinking workshop. Learned the beginnings of the Lean Six Sigma methodology through an overview session",
    id: 8,
  },
];

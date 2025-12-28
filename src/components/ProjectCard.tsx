import "./styles/ProjectCard.css";
import { motion } from "framer-motion";

type Project = {
  key?: number;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
};

function ProjectCard({ key, name, tagline, description, tags }: Project) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.4,
        delay: (key || 0) * 0.08,
        ease: "easeOut"
      }}
      className="container offset"
    >
      <div className="project-name" dangerouslySetInnerHTML={{ __html: name }}></div>
      <div className="tagline">{tagline}</div>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="tags-container">
        {tags.map((tag) => (
          <div key={tag} className="tag">
            {tag}
          </div>
        ))}
        </div>

    </motion.div>
  );
}

export default ProjectCard;

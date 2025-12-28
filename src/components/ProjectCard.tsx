import "./styles/ProjectCard.css";
import { motion } from "framer-motion";

type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
};

function ProjectCard({ name, tagline, description, tags }: Project) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
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

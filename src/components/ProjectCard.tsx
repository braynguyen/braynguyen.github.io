import "./styles/ProjectCard.css";
import { motion } from "framer-motion";

type Project = {
  key?: number;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
};

function ProjectCard({ name, tagline, description, tags }: Project) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5 },
      }}
      className="container"
    >
      <div className="project-name">{name}</div>
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

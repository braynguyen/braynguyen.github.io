import './styles/ProjectCard.css'

type Project = {
  key?: number;
  name: string,
  tagline: string,
  description: string,
  tags: string[]
}

function ProjectCard({ name, tagline, description, tags }: Project) {
  return (
    <div className="container">
      <div className="project-name">{name}</div>
      <div className="tagline">{tagline}</div>
      <div className="description" dangerouslySetInnerHTML={{__html: description}} />
      <div className="tags-container">
        {tags.map(tag => (
          <div key={tag} className="tag">{tag}</div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;

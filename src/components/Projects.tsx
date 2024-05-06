import ProjectCard from "./ProjectCard"
import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
import './styles/Projects.css'

type Project = {
    Name: string,
    Tagline: string,
    About: string,
    Tags: string[]
}

function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/projects.json');
                const jsonData = await response.json();
                setProjects(jsonData.projects);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div id="portfolio-section">
                <div id="projects-container">
                    <h1 className="section-name">Projects</h1>
                    {projects.map((_, index) => (
                        index % 3 === 0 && (
                            <div key={index / 3} className="row">
                                {projects.slice(index, index + 3).map((project, index) => (
                                    <ProjectCard
                                        key={index}
                                        name={project.Name}
                                        tagline={project.Tagline}
                                        description={project.About}
                                        tags={project.Tags}
                                    />
                                ))}
                            </div>
                        )
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects;

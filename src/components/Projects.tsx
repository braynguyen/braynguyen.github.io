import ProjectCard from "./ProjectCard"
import { useState, useEffect } from "react"
import './styles/Projects.css'

type Project = {
    Name: string,
    Tagline: string,
    About: string,
    Tags: string[]
}

function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [cardsPerRow, setCardsPerRow] = useState(3);

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

    useEffect(() => {
        function handleResize() {
            const breakpoints: { [key: number]: number } = {
                768: 1,
                1024: 2,
                2048: 3,
            };

            const viewportWidth = window.innerWidth;
            let cardsPerRow = 4; // default value
            Object.keys(breakpoints)
                .sort((a, b) => parseInt(b, 10) - parseInt(a, 10)) // Sort in descending order (it breaks otherwise)
                .forEach((breakpoint) => {
                    if (viewportWidth < parseInt(breakpoint, 10)) {
                        cardsPerRow = breakpoints[parseInt(breakpoint, 10)];
                    }
                });
            // Update the state
            setCardsPerRow(cardsPerRow);
        }

        // Initial call to set the cards per row based on the viewport width
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div id="projects-section">
                <div id="projects-container">
                    <h1 className="section-name">Projects</h1>
                    {projects.map((_, index) => (
                        index % cardsPerRow === 0 && (
                            <div key={index / cardsPerRow} className="row">
                                {projects.slice(index, index + cardsPerRow).map((project, projectIndex) => (
                                    <ProjectCard
                                        key={projectIndex}
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
    );
}


export default Projects;

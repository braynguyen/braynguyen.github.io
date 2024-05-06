import Projects from "./Projects"
import './styles/Portfolio.css'
import Work from "./Work";

function Portfolio() {
    return (
        <>
            <div className='portfolio-container'>
                <h1 className='portfolio-text'>PORTFOLIO</h1>
                <div style={{ height: "18vw", width: "100%" }} />
                <Work />
                <Projects />
            </div>
        </>
    )
}

export default Portfolio;
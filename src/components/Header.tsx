import ScrollButton from "./ScrollButton";
import './styles/Header.css'

function Header() {
    return (
        <>
            <div id="header-container">
                <div className="left">
                    <img className="logo-or-pic" src='/headshot.jpg'/>
                    <p className='header-title'>Brayden Nguyen</p>
                </div>
                <div className="right">
                    <ScrollButton name="About" sectionId="hero-section"/>
                    <ScrollButton name="Experience" sectionId="work-section" />
                    <ScrollButton name="Projects" sectionId="projects-section"/>
                    <ScrollButton id="lastScroll" name="Contact" sectionId="contact-section"/>
                </div>
            </div>
        </>
    )
}

export default Header
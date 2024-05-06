import ScrollButton from "./ScrollButton";
import './styles/Header.css'

function Header() {
    return (
        <>
            <div id="header-container">
                <div className="left">
                    <div className="logo-or-pic"></div>
                    <p className='header-title'>Personal Portfolio</p>
                </div>
                <div className="right">
                    <ScrollButton name="About" sectionId="hero-section"/>
                    <ScrollButton name="Portfolio" sectionId="portfolio-section"/>
                    <ScrollButton id="lastScroll" name="Contact" sectionId=""/>
                </div>
            </div>
        </>
    )
}

export default Header
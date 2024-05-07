import ScrollButton from "./ScrollButton";

export default function Sidebar() {
    return (
        <div className="h-100 bg-black w-[100vw] flex flex-col justify-center items-center sticky right-0 z-50">
            <ScrollButton name="About" sectionId="hero-section" />
            <ScrollButton name="Experience" sectionId="work-section" />
            <ScrollButton name="Projects" sectionId="projects-section" />
            <ScrollButton name="Contact" sectionId="contact-section" />
            <a href="/Brayden_Nguyen_Resume.pdf" className="scrollButton text-white">
                <p className="scrollButtonText">Resume</p>
            </a>
        </div>
    );
}

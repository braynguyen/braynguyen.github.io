import { useState, useEffect, useRef } from "react"

export default function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) {
        setIsSmallScreen(headerRef.current.clientWidth <= 800);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
  <>
      {!isSmallScreen && (
        <div id='contact-section' className="h-[92vh] bg-black relative" ref={headerRef}>
          <div className="absolute top-[-8vh] right-20 w-[33vw] h-[40vw] bg-teal-700 bg-opacity-30 rounded-lg" />
          <img className="absolute top-[15vh] right-[10vw] w-[33vw] h-[33vw] bg-white rounded-lg" src='/headshot.jpg' />
          <section className="relative top-[12vh] left-[8%] w-[44vw]">
            <div className="flex flex-col space-y-5">
              <div className="w-[45vw] text-white text-6vw md:text-8xl sm:text-8xl font-source-sans-pro font-extrabold leading-tight">
                Let's Keep In Touch
              </div>
              <div className="flex gap-28 w-[45vw] h-100">
                <a href="mailto:braydennguyen8@gmail.com">
                  <img
                    className="w-[4em] h-[4em]"
                    src="/logos/email.png"
                    alt="Email"
                  />
                </a>
                <a href="https://github.com/braynguyen">
                  <img
                    className="w-[4em] h-[4em]"
                    src="/logos/github.png"
                    alt="GitHub"
                  />
                </a>
                <a href="https://www.linkedin.com/in/brayden-nguyen">
                  <img
                    className="w-[4em] h-[4em]"
                    src="/logos/linkedin.png"
                    alt="LinkedIn"
                  />
                </a>
              </div>
              <div className="w-[45vw]">
                <p className="text-white text-2.0vw md:text-3xl font-source-sans font-extra-light">
                  Feel free to email me @
                  <br />
                  <a href="mailto:braydennguyen8@gmail.com" className="underline">braydennguyen8 [at] gmail [dot] com</a>
                  <br />
                  or connect with me on LinkedIn
                </p>
              </div>
            </div>
          </section>
        </div>
      )
      }
      {isSmallScreen && (
        <div id='contact-section' className="h-100 bg-black relative" ref={headerRef}>
          <section className="relative flex align-center text-center justify-center w-100 h-100 p-5">
            <div className="flex flex-col space-y-5">
              <div className="text-white text-6vw text-6xl font-source-sans-pro font-extrabold leading-tight">
                Let's Keep In Touch
              </div>
              <div className="flex align-center justify-center gap-10 h-100">
                <a href="mailto:braydennguyen8@gmail.com">
                  <img
                    className="w-[4em] h-[4em]"
                    src="/logos/email.png"
                    alt="Email"
                  />
                </a>
                <a href="https://github.com/braynguyen">
                  <img
                    className="w-[4em] h-[4em]"
                    src="/logos/github.png"
                    alt="GitHub"
                  />
                </a>
                <a href="https://www.linkedin.com/in/brayden-nguyen">
                  <img
                    className="w-[4em] h-[4em]"
                    src="/logos/linkedin.png"
                    alt="LinkedIn"
                  />
                </a>
              </div>
              <div className="">
                <p className="text-white text-2.0vw md:text-3xl font-source-sans font-extra-light">
                  Feel free to email me @
                  <br />
                  <a href="mailto:braydennguyen8@gmail.com" className="underline">braydennguyen8 [at] gmail [dot] com</a>
                  <br />
                  or connect with me on LinkedIn
                </p>
              </div>
            </div>
          </section>
        </div>
      )
      }
  </>
  );
}

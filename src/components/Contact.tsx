export default function Contact() {
  return (
    <div id='contact-section' className="h-[92vh] bg-black relative">
      <div className="absolute top-[-8vh] right-20 w-[33vw] h-[80vh] bg-teal-700 bg-opacity-30 rounded-lg"></div>
      <img className="absolute top-[15vh] right-[10vw] w-[33vw] h-[33vw] bg-white rounded-lg" src='/headshot.jpg' />
      <div className="relative top-[15%] left-[8%] w-[44vw]">
        <div className="flex flex-col space-y-5">
          <div className="w-980 h-365 text-white text-9xl font-source-sans-pro font-extrabold leading-tight">
            Let’s Keep In Touch
          </div>
          <div className="flex gap-28 w-470 h-100">
            <a href="mailto:braydennguyen8@gmail.com">
              <img
                className="w-[4em] h-[4em] left-185 top-0"
                src="/logos/email.png"
                alt="Email"
              />
            </a>
            <a href="https://github.com/braynguyen">
              <img
                className="w-[4em] h-[4em] left-370 top-0"
                src="/logos/github.png"
                alt="GitHub"
              />
            </a>
            <a href="https://www.linkedin.com/in/brayden-nguyen">
              <img
                className="w-[4em] h-[4em] left-0 top-0"
                src="/logos/linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </div>
          <div className="w-618 left-20 top-750">
            <p className="text-white text-3xl font-source-sans font-extra-light">
              Feel free to email me @
              <br />
              <span className="underline">braydennguyen8 [at] gmail [dot] com</span>
              <br />
              or connect with me on LinkedIn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

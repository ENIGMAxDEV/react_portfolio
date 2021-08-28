import "./intro.scss";
import { useEffect, useRef } from "react";
import { init } from "ityped";
const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Developer", "Designer", "Content Creator"],
      backSpeed: 100,
      backDelay: 500,
    });
  }, []);
  return (
    <section className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sohe Dooget</h1>
          <h3>
            Freelanc <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down" />
        </a>
      </div>
    </section>
  );
};

export default Intro;

import "./Experience.css";
import Navbar from "./Navbar";
import expk3 from "../img/k3.003.webp";
import expk6 from "../img/k6.006.webp";
import expk8 from "../img/k8.008.webp";
import expk7 from "../img/k7.007.webp";
import exp from "../img/Exp.png";




const Experience = () => {
  return (
    <>
      <Navbar />
      <section id="exp">
        <div className="container text-center mt-5">
          <img src={exp}></img>
        </div>
        <svg
          className="air-waves"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="wave1">
            <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
          </g>
          <g className="wave2">
            <use
              href="#wave-path"
              x="50"
              y="0"
              fill="rgba(255,255,255, .5)"
            />
          </g>
          <g className="wave3">
            <use
              href="#wave-path"
              x="50"
              y="9"
              fill="rgba(255,255,255, .3)"
            />
          </g>
        </svg>
      </section>
      <section id="carton">
        <div className="card">
          <div className="col-lg-12 mb-1 mt-5 text-center">
            <center>
              <img
                src={expk6}
                alt="Profile Picture of Kleecil Gualingco"
              />
            </center>

            <h4 className="text-primary">During my On the Job Training </h4>
            <p>
              This experience improved my skills by combining knowledge and new learnings. It involved
              real-world task and problem-solving techniques.
            </p>

          </div>

          <div className="col-lg-12 mb-1 mt-3 text-center">
            <center>
              <img
                src={expk3}
                alt="Profile Picture of Kleecil Gualingco"
              />
            </center>
            <h4 className="text-primary">During my training for Assessment</h4>
            <p>
              This hands-on experience assemble and disassemble with computer hardware is valuable for
              understanding how different components work together and troubleshooting hardware issues.
            </p>
          </div>
          <div className="col-lg-12 mb-1 mt-3 text-center">
            <center>
              <img
                src={expk8}
                alt="Profile Picture of Kleecil Gualingco"
              />
            </center>
            <h4 className="text-primary">During my training for Assessment</h4>
            <p>
              This crimpng cables,I gained practical skills in network hardware setup and an understanding
              of networking fundamental. This hands-on experience improved my attention to detail and
              problem-solving abilities.
            </p>
          </div>
          <div className="col-lg-12 mb-5 mt-3 text-center">
            <center>
              <img
                src={expk7}
                alt="Profile Picture of Kleecil Gualingco"
              />
            </center>
            <h4 className="text-primary"> During my On the Job Training</h4>
            <p>
              This experience built confidence , provided constructive feedback, and prepared me for
              future challenges. The collaborative environment fostered teamwork and communication.
            </p>
          </div>
        </div>



      </section>


      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>
      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              $copy; <span id="displayYear"></span> Copyrigth By
              <a href=""> Kleecil Gualingco</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Experience;

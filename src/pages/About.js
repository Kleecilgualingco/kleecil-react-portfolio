import "./About.css";
import "./Education.css";
import Navbar from "./Navbar";

import honey1 from "../img/Gradpic2.jpg";
import honey2 from "../img/online.jpg";
import honey3 from "../img/k1.jpg";
import honey4 from "../img/k2.jpg";
import about from "../img/Ab.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />
      <section id="ab">
        <div className="container text-center mt-4">
          <img src={about}></img>
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
      {/* <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container2">
          

            <div id="about-info" className="bg-secondary bg-gradient">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      About
                    </h1>
                  </div>
                </div>
              </div>
            </div>
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
        </div>
      </div> */}

      <section id="carton">
        <div className="container mt-1">
          <div className="col">
            <div className="p-5">
              <div className="row">
                <div className="col-lg-5 mb-1">
                  <center>
                    <img
                      src={honey1}
                      alt="Profile Picture of Kleecil Gualingco"
                    />
                  </center>
                  
                </div>
                <div className="col-lg-7 text">
                  <h4 className="text-primary"> A Bit About Me</h4>
                  <p>
                  I am an incoming graduate student in  Bachelor of Science in Information Technology (BSIT) 
                   at the Central Philippines State University. I enjoy playing online games and 
                   exploring new technologies.
                   
                  </p>
                  <h4 className="text-primary">Academic Goals</h4>
                  <p>
                    Academic Goals are measurable, achievable, relevant, and time bound, aiming for 
                    long-term educational achievements like graduation or futher education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pb-1 pt-1  ">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-lg-3 text-center"></div>
          </div>
        </div>
      </section>

      <section id="education1" class="education">
        <div class="section-heading text-center ">
          <h2>Education</h2>
        </div>
        <div class="container ">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div className="card mb-2">
              <div class="col text-center ">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2024</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Central Philippines State University
                      </h4>
                      <p className="text-dark">
                        Brgy. Camingawan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="card mb-2">
              <div class="col text-center ">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2018</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                       Bantayan  National High School
                      </h4>
                      <p className="text-dark">
                        Brgy. Bantayan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="card mb-5">
              <div class="col text-center">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2014</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">Bantayan Elementary School</h4>
                      <p className="text-dark">
                        Brgy. Bantayan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
        <section id="info">
        <div className="container">
        <div class="section-heading text-center mb-5 fw-bold ">
          <h2>Hobbies</h2>
        </div>
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
              <img src={honey2} alt="" />
                <h4 className="text-center">PLaying Online Games</h4>
                <p>
                  Online games involves engaging in vedio games over the internet,
                  connecting with other players from around the world.The primary 
                  feature that distinguishes online games from other  video games 
                  id their ability to connect players remotely,enabling rel-time 
                  interaction.

                </p>
              </div>
            </div>
            
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
              <img src={honey3} alt="" />
                <h4 className="text-center">Cooking</h4>
                <p>
                Trying out new recipes or experimenting with different cuisines, the process of preparing
                  food through various methods such as heating, mixing, baking, or grilling, to make it edible 
                  and ejoyable.
                </p>
              </div>
            </div>
           
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
              <img src={honey4} alt="" />
                <h4 className="text-center">Exploring about Technology </h4>
                <p>
                  The process of ivestigating, experimenting with understanding new or existing technologies.
                  Like research about the latest advancements and trend un technology or finding new ways to use 
                  or improve technologyto solve problems or enhance capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


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

export default About;

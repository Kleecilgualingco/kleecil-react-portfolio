import "./Portfolio.css";
import Navbar from "./Navbar";
import website from "../img/website.png";
import calculator from "../img/calculator.png";
import port from "../img/Por.png";


const Portfolio = () => {
  return (
    <>
      <Navbar />
      <section id="port">
        <div className="container text-center mt-4">
          <img src={port}></img>
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
          <div class="container3">


            <div id="portfolio-info">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      Portfolio
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

      <section id="portfolio">
        <div className="container text-center">
          <div className="pb-1">
           
            <br />
            <hr />
          </div>
          <div class="isotope">
          <div class="row">
              <p className="display-6"><img src={website}></img><a href="https://kleecilgualingco.github.io/Kleecil-Gualingco/"><h5>click here to view my website</h5></a> </p>
              <div class="col-lg-6 mb-4">
                <div class="item">
                  <div class="overlay"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <p className="display-6"><img src={calculator}></img><a href="https://kleecilgualingco.github.io/Calculator/"><h5>click here to use my calculator</h5></a> </p>
              <div class="col-lg-6 mb-4">
                <div class="item">
                  <div class="overlay"></div>
                </div>
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

export default Portfolio;
import "./Home.css";

import honey from "../img/Picture2.png";
import Cer8 from "../img/Cer8.webp";
import Cer2 from "../img/Cer2.jpg";
import Cer3 from "../img/Cer3.jpg";
import Cer4 from "../img/Cer4.jpg";
import Cer5 from "../img/Cer5.jpg";
import Cer6 from "../img/Cer6.jpg";


import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
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

      <div className="wrapper">
        <div className="overlay">
          <div class="container1">


            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold">Hello, I'm</h1>
                      <h1 className="text display-4 fw-bold">
                        Kleecil Gualingco
                      </h1>
                      <p>
                        <i>Taking of Bachelor of Science and Information Technology</i>
                      </p>
                      <p>
                       <i> I like playing and watching online games and also trying to explore Technology.</i>
                      </p>
                      <br />
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={honey}
                        alt="Profile Picture of Kleecil"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="info">
            <div className=" mt-5">
            </div>
            <div className="container">
              <center> <h1>ACADEMIC JOURNEY</h1></center>

              <div className="row">
                <div className="col-lg-4 mb-3 mt-1">
                  <div className="card p-5 shadow text-center">
                    <img src={Cer8} alt="" />
                  </div>

                </div>

                <div className="col-lg-4 mb-3 mt-1">
                  <div className="card p-5 shadow text-center">
                    <img src={Cer2} alt="" />
                  </div>
                </div>

                <div className="col-lg-4 mb-3  mt-1">
                  <div className="card p-5 shadow text-center">
                    <img src={Cer3} alt="" />
                  </div>
                </div>

                <div className="col-lg-4 mb-3 mt-1">
                  <div className="card p-5 shadow text-center">
                    <img src={Cer4} alt="" />
                  </div>
                </div>
                <div className="col-lg-4 mb-3  mt-1">
                  <div className="card p-5 shadow text-center">
                    <img src={Cer6} alt="" />
                  </div>
                </div>
                <div className="col-lg-4 mb-3  mt-1">
                  <div className="card p-5 shadow text-center">
                    <img src={Cer5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>

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

export default Home;

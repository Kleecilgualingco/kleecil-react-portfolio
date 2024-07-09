import "./Contact.css";

import Navbar from "./Navbar";
import facebook from "../img/facebook icon.png";
import Tiktokk from "../img/Tiktokk.png";
import Gmail from "../img/Gmail icon.png";
import Address from "../img/Address icon.png";
import Contact from "../img/Contact icon.png";
import contact1 from "../img/Cont.png";

import {Fonticon} from "@fortawesome/react-fontawesome";
import {address} from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <>
      <Navbar />
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
      <section id="contact_1">
        <div className="container text-center mt-4">
          <img src={contact1}></img>
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
          <section id="info2">
          <div className="container">

            <div className="row">
              <div className="col-lg mb-4 ">
                <div className="card p-5 shadow text-center">
                  <img src={facebook} alt="" />
                  <a href="https://www.facebook.com/hanzkei.klevell"><h2>Click Here</h2></a>
                </div>
              </div>

              <div className="col-lg mb-3">
                <div className="card p-5 shadow text-center">
                  <img src={Tiktokk} alt="" />
                  <a href="https://www.tiktok.com/@hanzkeiklevell?_t=8nWTql55YW4&_r=1"><h2>Click Here</h2></a>
                </div>
              </div>

              <div className="col-lg mb-3">
                <div className="card p-5 shadow text-center">
                  <img src={Gmail} alt="" />
                  <a href="kleecilgualingco2001@gmail.com"><h2>Click Here</h2></a>
                </div>
              </div> 
            </div>
            
            <h1><img src={Address} alt="" /><i>Purok 1, Brgy Bantayan Kabankalan City Negros Occidental</i></h1>
            
                  <h1><img src={Contact} alt="" />#09468264657</h1>
          </div>
        </section>
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

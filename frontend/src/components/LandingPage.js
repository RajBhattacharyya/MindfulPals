// LandingPage.js
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Spline from "@splinetool/react-spline";

export default function LandingPage() {
  const el = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["PET SIMULATOR", "PET THERAPY"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const handleGetStartedClick = () => {
    navigate("/login");
  };

  const handleAboutUsClick = () => {
    navigate("/aboutus");
  };

  return (
    <>
      <div className="container">
        <div className="container-top">
          <p className="start3">LET'S CHAT</p>
          <p className="start2">with the souls who would never break your heart</p>
          <div className="Logo">
            <span ref={el}></span>
          </div>
          <div className="spline-container">
            <Spline scene="https://prod.spline.design/rVSU9Oc11yblTJgQ/scene.splinecode" />
          </div>

          <div className="get-started">
            <button className="start" onClick={handleGetStartedClick}>
              GET STARTED
            </button>
          </div>
          <div className="top-right-buttons">
            <button className="about-us" onClick={handleAboutUsClick}>
              ABOUT US
            </button>
          </div>
          <div>
            <h2 className="quote">Were you kind to yourself today?</h2>
          </div>
        </div>
      </div>
    </>
  );
}

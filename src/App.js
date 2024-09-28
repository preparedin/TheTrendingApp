import "./App.css";
import Confetti from "./Confetti";
import logo from "./assets/TrendingTag-logo.png";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <img src={logo} alt="Logo" className="logo" />
        <p style={{ marginTop: "50px", marginBottom: "50px", color: "black" }}>
          "Big Things Are Coming! Our Website Launches Soon. Stay Tuned!"
        </p>
        <div>
          <a
            target="_blank"
            href={
              "https://www.facebook.com/profile.php?id=61566195509486&sk=about"
            }
            class="fa-brands fa-facebook"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            target="_blank"
            href={
              "https://www.instagram.com/thetrendingtag/?utm_source=ig_web_button_share_sheet"
            }
            class="fa-brands fa-instagram"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            target="_blank"
            href={
              "https://www.instagram.com/thetrendingtag/?utm_source=ig_web_button_share_sheet"
            }
            class="fa-brands fa-twitter"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
        </div>
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>Email: thetrendingtag2024@gmail.com</p>
          <p>Phone: +91 9498479848</p>
        </div>
      </header>
      <footer className="App-footer"></footer>
    </div>
  );
};

export default App;

import React from "react";
import "./Footer.css"; // Assuming you have a CSS file for styling
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import logo from "../../assets/logo (1).png";
// Uncomment the above imports and replace with actual paths to your assets

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a
            href="https://www.instagram.com/3adel_sw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" style={{ width: "2rem" }} />
          </a>

          <a
            href="https://www.github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" style={{ width: "2rem" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/adel-mahmoud-7367442a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" style={{ width: "2rem" }} />
          </a>
        </div>
        <div className="logo-f">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-text">
          <span>@2025 3adel_sw</span>
          <span>Made with ❤️ by 3adel_sw</span>
          <span>whats 201014919047</span>
          <span> mobile 201064620610</span>
        </div>

        <div className="blur  blur-f-l"></div>
        <div className="blur  blur-f-r"></div>
      </div>
    </div>
  );
};

export default Footer;

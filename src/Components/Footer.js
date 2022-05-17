import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">© {new Date().getFullYear()} create by Umidjon Frontend Developer</div>
      </div>
    </div>
  );
}

export default Footer;

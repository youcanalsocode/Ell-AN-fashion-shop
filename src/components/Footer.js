import React from "react";
import "../assets/style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Elle&an. All Rights Reserved.</p>
      <ul className="footer-links">
        <li>
          <a href="/faq">FAQ</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/sustainability">Sustainability</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

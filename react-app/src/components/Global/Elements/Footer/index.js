import React from "react";
import github from "./github.png";
import linkedin from "./linkedin.png";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <h3>Elias Rodriguez</h3>
          <div className="footer-links">
            <a href="GITHUB LINK" rel="noreferrer" target="_blank">
              <img src={github} alt="Git Hub" />
            </a>
            <a href="LINKED IN LINK" rel="noreferrer" target="_blank">
              <img src={linkedin} alt="Linked In" />
            </a>
          </div>
        </li>
        <li>
          <h3>Jeffery Kintner</h3>
          <div className="footer-links">
            <a href="GITHUB LINK" rel="noreferrer" target="_blank">
              <img src={github} alt="Git Hub" />
            </a>
            <a href="LINKED IN LINK" rel="noreferrer" target="_blank">
              <img src={linkedin} alt="Linked In" />
            </a>
          </div>
        </li>
        <li>
          <h3>John Voskuyl</h2>
          <div className="footer-links">
            <a href="GITHUB LINK" rel="noreferrer" target="_blank">
              <img src={github} alt="Git Hub" />
            </a>
            <a href="LINKED IN LINK" rel="noreferrer" target="_blank">
              <img src={linkedin} alt="Linked In" />
            </a>
          </div>
        </li>
        <li>
          <h3>Patrick McPherson</h3>
          <div className="footer-links">
            <a href="GITHUB LINK" rel="noreferrer" target="_blank">
              <img src={github} alt="Git Hub" />
            </a>
            <a href="LINKED IN LINK" rel="noreferrer" target="_blank">
              <img src={linkedin} alt="Linked In" />
            </a>
          </div>
        </li>
        <li>
          <h2>ⓒ Eventbright 2022</h2>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

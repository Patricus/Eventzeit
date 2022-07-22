import React from "react";
import github from "./github.png";
import linkedin from "./linkedin.png";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
            <h2>Elias</h2>
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
            <h2>Jeffery</h2>
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
            <h2>John</h2>
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
            <h2>Patrick</h2>
            <div className="footer-links">
              <a href="GITHUB LINK" rel="noreferrer" target="_blank">
                <img src={github} alt="Git Hub" />
              </a>
              <a href="LINKED IN LINK" rel="noreferrer" target="_blank">
                <img src={linkedin} alt="Linked In" />
              </a>
            </div>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

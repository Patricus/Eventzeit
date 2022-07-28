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
            <a
              href="https://github.com/bo-codes"
              rel="noreferrer"
              target="_blank"
            >
              <img src={github} alt="Git Hub" />
            </a>
            <a
              href="https://www.linkedin.com/in/elias-rodriguez-066080155/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={linkedin} alt="Linked In" />
            </a>
          </div>
        </li>
        <li>
          <h3>Jeffrey Kintner</h3>
          <div className="footer-links">
            <a
              href="https://github.com/jkintner25"
              rel="noreferrer"
              target="_blank"
            >
              <img src={github} alt="Git Hub" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeffrey-kintner-9b503a71/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={linkedin} alt="Linked In" />
            </a>
          </div>
        </li>
        <li>
          <h3>John Voskuyl</h3>
          <div className="footer-links">
            <a
              href="https://github.com/jvos415"
              rel="noreferrer"
              target="_blank"
            >
              <img src={github} alt="Git Hub" />
            </a>
            <a
              href="https://linkedin.com/in/john-voskuyl-a2214083/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={linkedin} alt="Linked In" />
            </a>
          </div>
        </li>
        <li>
          <h3>Patrick McPherson</h3>
          <div className="footer-links">
            <a
              href="https://github.com/Patricus"
              rel="noreferrer"
              target="_blank"
            >
              <img src={github} alt="Git Hub" />
            </a>
            <a
              href="https://www.linkedin.com/in/patrick-mcpherson-438385117/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={linkedin} alt="Linked In" />
            </a>
          </div>
        </li>
        <li>
          <h2>ⓒ Eventzeit 2022</h2>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

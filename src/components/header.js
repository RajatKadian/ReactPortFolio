import React from 'react';
import './header.css'; // Import custom CSS file for styling
import { NavLink } from 'react-router-dom';
import { faFacebookF, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => (
  <header className="header-container">
    <p><b>Rajat Kadian</b></p>

    <br></br>
    <img src="/PhotoRajat.JPG" alt="imageTa" /><br></br>



    <div className="social-links">

      <a href="https://www.linkedin.com/in/rajat-kadian/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>

      <a href="https://github.com/RajatKadian" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>

   
    <div className="dividing-line"></div>

    <ul className="main-nav">
      <li>
        <NavLink to="/">
          <span role="img" aria-label="About">👤</span> About Me
        </NavLink>
      </li><br></br>
      <li>
        <NavLink to="/work">
          <span role="img" aria-label="Work">💼</span> Work Exp
        </NavLink>
      </li><br></br>
      <li>
        <NavLink to="/contact">
          <span role="img" aria-label="Contact">📞</span> Contact
        </NavLink>
      </li><br></br>
      <li>
        <NavLink to="/projects">
          <span role="img" aria-label="Projects">🚀</span> Projects
        </NavLink>
      </li>
    </ul>

    <a href="https://www.linkedin.com/in/rajat-kadian/" target="_blank" class="enlarge-on-hover">
      <button class="custom-button">
        Hire Me
        <span class="telegram-emoji">&#x1F4E9;</span>
      </button>
    </a>








  </header>
);

export default Header;

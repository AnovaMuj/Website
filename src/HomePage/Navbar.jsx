import NavLogo from "../assets/NavAnovaLogo.png";
import "./Navbar.css";

const Navbar = () => {
  let isNavOpen = false;
  return (
    <div className="Nav">
      <a className="NavLogoTag" href="#HeroSection">
        <img className="NavLogo" src={NavLogo} alt="Anova Logo" />
      </a>
      <div className="NavLinksDiv">
        <a className="NavLinks" href="#Overview">
          Overview
        </a>
        <a className="NavLinks" href="#Execs">
          Our Team
        </a>
        <a className="NavLinks" href="#PastEvents">
          Past Events
        </a>
        <a className="NavLinks" href="#UpcomingEvents">
          Upcoming Events
        </a>
      </div>
      <label className="hamburger">
        <input
          type="checkbox"
          onClick={() => {
            if (!isNavOpen) {
              document.querySelector(".NavLinksDiv").style.display = "inherit";
              isNavOpen = true;
            } else {
              document.querySelector(".NavLinksDiv").style.display = "none";
              isNavOpen = false;
            }
          }}
        />
        <svg viewBox="0 0 32 32">
          <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
    </div>
  );
};

export default Navbar;

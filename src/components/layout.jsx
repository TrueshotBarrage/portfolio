import * as React from "react";
import { Link } from "gatsby";
import { navLinks } from "./links";

const Layout = ({
  pageTitle,
  handleNavIntersectClick,
  handleProjectNavIntersectClick,
  isNavOpen,
  isProjectNavOpen,
  children,
}) => {
  return (
    <body>
      {/* Header bar */}
      <Header
        handleNavClick={handleNavIntersectClick}
        handleProjectNavClick={handleProjectNavIntersectClick}
      />
      {/* Navigation bar */}
      <Nav isNavOpen={isNavOpen} />
      {/* Project navigation bar */}
      <ProjectNav isNavOpen={isProjectNavOpen} />
      {/* Main contents */}
      <div className="black-bg">
        {/* The main contents: console and footer */}
        <div
          className={`main-container${
            isNavOpen || isProjectNavOpen ? " darken" : ""
          }`}
        >
          {children}

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </body>
  );
};

const Header = ({ handleNavClick, handleProjectNavClick }) => {
  return (
    <header>
      <div id="nav-intersect" onClick={handleNavClick}>
        {/* Triple bar SVG icon */}
        <h1 className="button-label-grid">
          <svg width="40" height="32">
            <g strokeWidth="1" stroke="white" fill="white">
              <rect x="5" y="5" width="30" height="4" rx="2" />
              <rect x="5" y="14" width="30" height="4" rx="2" />
              <rect x="5" y="23" width="30" height="4" rx="2" />
            </g>
          </svg>
          <div id="nav-intersect-text">{/* Placeholder */}</div>
        </h1>
      </div>

      <div id="logo">
        <h1>
          <Link to="/">
            <span className="not-initials">D</span>
            <span className="initials">k</span>
          </Link>
        </h1>
      </div>

      <div id="project-nav-intersect" onClick={handleProjectNavClick}>
        <h1>projects</h1>
      </div>
    </header>
  );
};

const Nav = ({ isNavOpen }) => {
  return (
    <nav className={`${isNavOpen ? "is-nav-open" : ""}`}>
      <ul>
        {
          // If URL is external, use the <a> tag. Otherwise, use the <Link> tag
          navLinks.map((link) => (
            <li key={link.text}>
              {link.newTab ? (
                <a href={link.url} target="_blank">
                  {link.text}
                </a>
              ) : (
                <Link to={link.url}>{link.text}</Link>
              )}
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

const projectLinks = [
  {
    text: "Project Tempo",
    url: "/project-tempo",
    newTab: false,
  },
  {
    text: "Bible Planner",
    url: "/bible-planner",
    newTab: false,
  },
  {
    text: "MIDI Visualizer",
    url: "/midi-visualizer",
    newTab: false,
  },
  {
    text: "LED Tetris",
    url: "/led-tetris",
    newTab: false,
  },
  {
    text: "Crawl-o-Bot",
    url: "https://github.com/TrueshotBarrage/crawl-o-bot",
    newTab: true,
  },
  {
    text: "StudyBuddy",
    url: "https://github.com/TrueshotBarrage/studybuddy",
    newTab: true,
  },
];

const ProjectNav = ({ isNavOpen }) => {
  return (
    <div id="project-nav" className={`${isNavOpen ? "is-nav-open" : ""}`}>
      <ul>
        {projectLinks.map((link) => (
          <li key={link.text}>
            {link.newTab ? (
              <a href={link.url} target="_blank">
                {link.text}
              </a>
            ) : (
              <Link to={link.url}>{link.text}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        Copyright &copy; David Kim. All rights reserved.
      </div>
    </footer>
  );
};

export default Layout;

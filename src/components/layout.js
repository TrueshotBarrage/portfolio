import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  return (
    <body>
      {/* Header bar */}
      <Header />
      {/* Navigation bar */}
      <Nav />
      {/* Project navigation bar */}
      <ProjectNav />
      {/* Main contents */}
      <div class="black-bg">
        {/* The main contents: console and footer */}
        <div class="main-container">
          {children}

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </body>
  );
};

const Header = () => {
  return (
    <header>
      <div id="nav-intersect">
        {/* Triple bar SVG icon */}
        <h1 class="button-label-grid">
          <svg width="40" height="32">
            <g stroke-width="1" stroke="white" fill="white">
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
            <span class="not-initials">D</span>
            <span class="initials">k</span>
          </Link>
        </h1>
      </div>

      <div id="project-nav-intersect">
        <h1>projects</h1>
      </div>
    </header>
  );
};

const navLinks = [
  {
    text: "Home",
    url: "/",
    newTab: false,
  },
  {
    text: "About Me",
    url: "/profile",
    newTab: false,
  },
  {
    text: "Projects",
    url: "/projects",
    newTab: false,
  },
  {
    text: "Blog",
    url: "/blog",
    newTab: false,
  },
  {
    text: "GitHub",
    url: "https://github.com/TrueshotBarrage",
    newTab: true,
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/davidkim2106/",
    newTab: true,
  },
  {
    text: "Resume",
    url: "/resume",
    newTab: false,
  },
];

const Nav = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li>
            <Link to={link.url} target={link.newTab ? "_blank" : ""}>
              {link.text}
            </Link>
          </li>
        ))}
        {/* <li>
          <a href="index.html">
            <span class="xx">Home</span>
          </a>
        </li> */}
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">About Me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="https://github.com/TrueshotBarrage" target="_blank">
            GitHub
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/davidkim2106/" target="_blank">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li> */}
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

const ProjectNav = () => {
  return (
    <div id="project-nav">
      <ul>
        {projectLinks.map((link) => (
          <li>
            <Link to={link.url} target={link.newTab ? "_blank" : ""}>
              {link.text}
            </Link>
          </li>
        ))}
        {/* <li>
          <a href="project-tempo.php">
            <span>Project Tempo</span>
          </a>
        </li>
        <li>
          <a href="bible-planner.php">
            <span>Bible Planner</span>
          </a>
        </li>
        <li>
          <a href="midi-visualizer.php">
            <span>MIDI Visualizer</span>
          </a>
        </li>
        <li>
          <a href="led-tetris.php">
            <span>LED Tetris</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/TrueshotBarrage/crawl-o-bot">
            <span>Crawl-o-Bot</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/TrueshotBarrage/studybuddy">
            <span>StudyBuddy</span>
          </a>
        </li>
        <li>
          <a href="sir-mix-a-lot.php">
            <span>Sir Mix-A-Lot</span>
          </a>
        </li>
        <li>
          <a href="https://docs.google.com/spreadsheets/d/13gFiOqcAMy0oDZBiwmrRTxWc00Ag2eL9FyFD5U3VnsA/">
            <span>GPA Calculator</span>
          </a>
        </li> */}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div class="copyright">
        Copyright &copy; David Kim. All rights reserved.
      </div>
    </footer>
  );
};

export default Layout;

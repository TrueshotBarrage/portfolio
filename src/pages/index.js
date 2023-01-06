import * as React from "react";
import "../css/main.css";
import "../css/nav-header.css";
import "../css/index.css";
import "../fonts/fonts.css";

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
];

const IndexPage = () => {
  return (
    <body>
      {/* Header bar */}
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
            <a href="./index.html">
              <span class="not-initials">D</span>
              <span class="initials">k</span>
            </a>
          </h1>
        </div>

        <div id="project-nav-intersect">
          <h1>projects</h1>
        </div>
      </header>

      {/* Navigation bar */}
      <nav>
        <ul>
          <li>
            <a href="index.html">
              <span class="xx">Home</span>
            </a>
          </li>
          <li>
            <a href="profile.html">
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a href="projects.html">
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="blog.html">
              <span>Blog</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/TrueshotBarrage" target="_blank">
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/davidkim2106/" target="_blank">
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="resume.html">
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Project navigation bar */}
      <div id="project-nav">
        <ul>
          <li>
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
          </li>
        </ul>
      </div>

      {/* Main contents */}
      <div class="black-bg">
        {/* The main contents: console and footer */}
        <div class="main-container">
          <div class="terminal contents">
            <pre id="code-box"></pre>
          </div>

          {/* Footer */}
          <footer>
            <div class="copyright">
              Copyright &copy; David Kim. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </body>
  );
};

export default IndexPage;

export const Head = () => <title>David Kim</title>;

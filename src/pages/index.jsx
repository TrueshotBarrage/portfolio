import * as React from "react";
import "../css/main.css";
import "../css/nav-header.css";
import "../css/index.css";
import "../fonts/fonts.css";

import Layout from "../components/layout";

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
  let [isNavOpen, setIsNavOpen] = React.useState(false);
  let [isProjectNavOpen, setIsProjectNavOpen] = React.useState(false);

  function handleNavIntersectClick() {
    // Both navs cannot be open simultaneously
    if (!isProjectNavOpen) {
      setIsNavOpen(!isNavOpen);
    }
  }

  function handleProjectNavIntersectClick() {
    // Both navs cannot be open simultaneously
    if (!isNavOpen) {
      setIsProjectNavOpen(!isProjectNavOpen);
    }
  }

  return (
    <Layout
      pageTitle="Dave Kim"
      handleNavIntersectClick={handleNavIntersectClick}
      handleProjectNavIntersectClick={handleProjectNavIntersectClick}
      isNavOpen={isNavOpen}
      isProjectNavOpen={isProjectNavOpen}
    >
      <div
        className={`terminal contents${isNavOpen ? " pushed" : ""}${
          isProjectNavOpen ? " pulled" : ""
        }`}
      >
        <pre id="code-box"></pre>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>David Kim</title>;

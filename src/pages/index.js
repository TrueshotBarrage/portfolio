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
  return (
    <Layout pageTitle="Dave Kim">
      <div class="terminal contents">
        <pre id="code-box"></pre>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>David Kim</title>;

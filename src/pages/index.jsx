import * as React from "react";
import { createRoot } from "react-dom/client";
import Typewriter from "typewriter-effect";

import "../css/main.css";
import "../css/nav-header.css";
import "../css/index.css";
import "../fonts/fonts.css";

import Layout from "../components/layout";
import { navLinks } from "../components/links";

// Browser detection
navigator.browserInfo = (function () {
  var ua = navigator.userAgent,
    tem,
    M =
      ua.match(
        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
      ) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return { browser: "IE", version: tem[1] || "" };
  }
  if (M[1] === "Chrome") {
    tem = ua.match(/\b(OPR|Edge?)\/(\d+)/);
    if (tem != null)
      return {
        browser: tem.slice(1)[0].replace("OPR", "Opera").replace("Edg", "Edge"),
        version: tem.slice(1)[1],
      };
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return { browser: M[0], version: M[1] };
})();

const typewriterWrapperClassName = "typewriter-box";
var twObj;

const CodeTextBox = ({ clickedLink, setClickedLink }) => {
  let link;
  React.useEffect(() => {
    // If a link was clicked, get the appropriate link from the array of link objects
    if (clickedLink !== null) {
      // Get the appropriate link from the array of link objects
      link = navLinks.filter((link) => link.id === clickedLink)[0];

      codeBoxContents = [
        {
          text: removeCursor,
          args: [],
        },
        {
          text: `cd ${link.terminal_text}\n`,
          typewriter: true,
          speed: 50,
          delay: 500,
        },
        {
          text: `<span class="timestamp">${login}</span><span class="pwd">~/${link.terminal_text}</span>$ `,
          typewriter: false,
          delay: 700,
        },
        {
          text: "exit 0\n",
          typewriter: true,
          speed: 50,
          delay: 500,
        },
        {
          text: "[Process completed]\n",
          typewriter: false,
          delay: 700,
        },
        {
          text: "Loading",
          typewriter: false,
          delay: 500,
        },
        {
          text: "...\n",
          typewriter: true,
          speed: 500,
          delay: 100,
        },
        {
          text: goToLink,
          args: [link.url],
        },
      ];

      // Restart the writer protocol with the new codeBoxContents
      startWriter(twObj);
    }
  }, [clickedLink]);

  const login = `davidkim@${navigator.browserInfo.browser.toLowerCase()}:`;

  /**
   * Start blinking the cursor element at a given speed.
   * Runs until cursor element is not found in the DOM.
   * @param {number} speed - The speed at which the cursor toggles on/off
   */
  const blinkCursor = async function (speed, visible = true) {
    let cursor = document.getElementById("cursor");

    if (cursor) {
      cursor.style.opacity = visible ? 0 : 1;
      await new Promise((r) => {
        return setTimeout(r, speed);
      });
      return blinkCursor(speed, !visible);
    } else {
      return clickedLink;
    }
  };

  const removeCursor = function () {
    let cursor = document.getElementById("cursor");
    if (cursor) {
      cursor.remove();
    }
  };

  let pseudoLinksString = navLinks
    .filter((link) => link.id !== null)
    .map(
      (link) =>
        `<li id="${link.id}" class="pseudo-links">${link.terminal_text}</li>`
    )
    .join("");
  pseudoLinksString = "<ul>" + pseudoLinksString + "</ul>";

  const attachOnclickListenersToPseudoLinks = function () {
    const pseudoLinks = document.getElementsByClassName("pseudo-links");
    for (let i = 0; i < pseudoLinks.length; i++) {
      pseudoLinks[i].addEventListener("click", (e) => {
        if (clickedLink === null) {
          setClickedLink(e.target.id);
        }
      });
    }
  };

  const goToLink = async function (url) {
    window.location.assign(url);
  };

  let codeBoxContents = [
    {
      text: `Powering up website with Ubuntu 20.04 LTS for ${navigator.browserInfo.browser}`,
      typewriter: false,
      delay: 0,
    },
    {
      text: "...\n",
      typewriter: true,
      speed: 500,
      delay: 500,
    },
    {
      text: `<span class="timestamp">${login}</span><span class="pwd">~</span>$ `,
      typewriter: false,
      delay: 1000,
    },
    {
      text: `cowsay Welcome to my website! | lolcat\n`,
      typewriter: true,
      speed: 50,
      delay: 500,
    },
    {
      text: `<div><span style="color:#ff0000;"> </span><span style="color:#ff0400;">_</span><span style="color:#ff0800;">_</span><span style="color:#ff0c00;">_</span><span style="color:#ff0f00;">_</span><span style="color:#ff1300;">_</span><span style="color:#ff1700;">_</span><span style="color:#ff1b00;">_</span><span style="color:#ff1f00;">_</span><span style="color:#ff2300;">_</span><span style="color:#ff2600;">_</span><span style="color:#ff2a00;">_</span><span style="color:#ff2e00;">_</span><span style="color:#ff3200;">_</span><span style="color:#ff3600;">_</span><span style="color:#ff3a00;">_</span><span style="color:#ff3e00;">_</span><span style="color:#ff4100;">_</span><span style="color:#ff4500;">_</span><span style="color:#ff4900;">_</span><span style="color:#ff4d00;">_</span><span style="color:#ff5100;">_</span><span style="color:#ff5500;">_</span><span style="color:#ff5900;">_</span><span style="color:#ff5c00;">_</span><span style="color:#ff6000;"> </span></div><div><span style="color:#ff6400;"><</span><span style="color:#ff6800;"> </span><span style="color:#ff6c00;">W</span><span style="color:#ff7000;">e</span><span style="color:#ff7300;">l</span><span style="color:#ff7700;">c</span><span style="color:#ff7b00;">o</span><span style="color:#ff7f00;">m</span><span style="color:#ff8300;">e</span><span style="color:#ff8700;"> </span><span style="color:#ff8b00;">t</span><span style="color:#ff8f00;">o</span><span style="color:#ff9300;"> </span><span style="color:#ff9700;">m</span><span style="color:#ff9b00;">y</span><span style="color:#ff9f00;"> </span><span style="color:#ffa300;">w</span><span style="color:#ffa700;">e</span><span style="color:#ffab00;">b</span><span style="color:#ffaf00;">s</span><span style="color:#ffb300;">i</span><span style="color:#ffb700;">t</span><span style="color:#ffbb00;">e</span><span style="color:#ffbf00;">!</span><span style="color:#ffc300;"> </span><span style="color:#ffc700;">></span></div><div><span style="color:#ffcb00;"> </span><span style="color:#ffcf00;">-</span><span style="color:#ffd300;">-</span><span style="color:#ffd700;">-</span><span style="color:#ffdb00;">-</span><span style="color:#ffdf00;">-</span><span style="color:#ffe300;">-</span><span style="color:#ffe700;">-</span><span style="color:#ffeb00;">-</span><span style="color:#ffef00;">-</span><span style="color:#fff300;">-</span><span style="color:#fff700;">-</span><span style="color:#fffb00;">-</span><span style="color:#ffff00;">-</span><span style="color:#f7ff00;">-</span><span style="color:#f0ff00;">-</span><span style="color:#e8ff00;">-</span><span style="color:#e0ff00;">-</span><span style="color:#d8ff00;">-</span><span style="color:#d1ff00;">-</span><span style="color:#c9ff00;">-</span><span style="color:#c1ff00;">-</span><span style="color:#b9ff00;">-</span><span style="color:#b2ff00;">-</span><span style="color:#aaff00;">-</span><span style="color:#a2ff00;"> </span></div><div><span style="color:#9bff00;"> </span><span style="color:#93ff00;"> </span><span style="color:#8bff00;"> </span><span style="color:#83ff00;"> </span><span style="color:#7cff00;"> </span><span style="color:#74ff00;"> </span><span style="color:#6cff00;"> </span><span style="color:#64ff00;"> </span><span style="color:#5dff00;">\\</span><span style="color:#55ff00;"> </span><span style="color:#4dff00;"> </span><span style="color:#46ff00;"> </span><span style="color:#3eff00;">^</span><span style="color:#36ff00;">_</span><span style="color:#2eff00;">_</span><span style="color:#27ff00;">^</span></div><div><span style="color:#1fff00;"> </span><span style="color:#17ff00;"> </span><span style="color:#0fff00;"> </span><span style="color:#08ff00;"> </span><span style="color:#00ff00;"> </span><span style="color:#00ff08;"> </span><span style="color:#00ff10;"> </span><span style="color:#00ff18;"> </span><span style="color:#00ff20;"> </span><span style="color:#00ff28;">\\</span><span style="color:#00ff30;"> </span><span style="color:#00ff38;"> </span><span style="color:#00ff40;">(</span><span style="color:#00ff48;">o</span><span style="color:#00ff50;">o</span><span style="color:#00ff58;">)</span><span style="color:#00ff60;">\\</span><span style="color:#00ff68;">_</span><span style="color:#00ff70;">_</span><span style="color:#00ff78;">_</span><span style="color:#00ff80;">_</span><span style="color:#00ff87;">_</span><span style="color:#00ff8f;">_</span><span style="color:#00ff97;">_</span></div><div><span style="color:#00ff9f;"> </span><span style="color:#00ffa7;"> </span><span style="color:#00ffaf;"> </span><span style="color:#00ffb7;"> </span><span style="color:#00ffbf;"> </span><span style="color:#00ffc7;"> </span><span style="color:#00ffcf;"> </span><span style="color:#00ffd7;"> </span><span style="color:#00ffdf;"> </span><span style="color:#00ffe7;"> </span><span style="color:#00ffef;"> </span><span style="color:#00fff7;"> </span><span style="color:#00ffff;">(</span><span style="color:#00f7ff;">_</span><span style="color:#00f0ff;">_</span><span style="color:#00e8ff;">)</span><span style="color:#00e0ff;">\\</span><span style="color:#00d8ff;"> </span><span style="color:#00d1ff;"> </span><span style="color:#00c9ff;"> </span><span style="color:#00c1ff;"> </span><span style="color:#00b9ff;"> </span><span style="color:#00b2ff;"> </span><span style="color:#00aaff;"> </span><span style="color:#00a2ff;">)</span><span style="color:#009bff;">\\</span><span style="color:#0093ff;">/</span><span style="color:#008bff;">\\</span></div><div><span style="color:#0083ff;"> </span><span style="color:#007cff;"> </span><span style="color:#0074ff;"> </span><span style="color:#006cff;"> </span><span style="color:#0064ff;"> </span><span style="color:#005dff;"> </span><span style="color:#0055ff;"> </span><span style="color:#004dff;"> </span><span style="color:#0046ff;"> </span><span style="color:#003eff;"> </span><span style="color:#0036ff;"> </span><span style="color:#002eff;"> </span><span style="color:#0027ff;"> </span><span style="color:#001fff;"> </span><span style="color:#0017ff;"> </span><span style="color:#000fff;"> </span><span style="color:#0008ff;">|</span><span style="color:#0000ff;">|</span><span style="color:#0400ff;">-</span><span style="color:#0900ff;">-</span><span style="color:#0d00ff;">-</span><span style="color:#1100ff;">-</span><span style="color:#1600ff;">w</span><span style="color:#1a00ff;"> </span><span style="color:#1e00ff;">|</span></div><div><span style="color:#2300ff;"> </span><span style="color:#2700ff;"> </span><span style="color:#2b00ff;"> </span><span style="color:#3000ff;"> </span><span style="color:#3400ff;"> </span><span style="color:#3800ff;"> </span><span style="color:#3d00ff;"> </span><span style="color:#4100ff;"> </span><span style="color:#4600ff;"> </span><span style="color:#4a00ff;"> </span><span style="color:#4e00ff;"> </span><span style="color:#5300ff;"> </span><span style="color:#5700ff;"> </span><span style="color:#5b00ff;"> </span><span style="color:#6000ff;"> </span><span style="color:#6400ff;"> </span><span style="color:#6800ff;">|</span><span style="color:#6d00ff;">|</span><span style="color:#7100ff;"> </span><span style="color:#7500ff;"> </span><span style="color:#7a00ff;"> </span><span style="color:#7e00ff;"> </span><span style="color:#8200ff;"> </span><span style="color:#8700ff;">|</span><span style="color:#8b00ff;">|</span></div>\n`,
      typewriter: false,
      delay: 0,
    },
    {
      text: `<span class="timestamp">${login}</span><span class="pwd">~</span>$ `,
      typewriter: false,
      delay: 2000,
    },
    {
      text: `ls -1\n`,
      typewriter: true,
      speed: 50,
      delay: 500,
    },
    {
      text: pseudoLinksString,
      typewriter: false,
      delay: 1000,
    },
    {
      text: attachOnclickListenersToPseudoLinks,
      args: [],
    },
    {
      text: `(Try clicking these!)\n<span class="timestamp">${login}</span><span class="pwd">~</span>$ <span id="cursor">&#9608</span><span id="after-pseudo-link-clicked"></span>`,
      typewriter: false,
      delay: 500,
    },
    {
      text: blinkCursor,
      args: [500],
    },
  ];

  const startWriter = (writer) => {
    // Assign the global writer to the writer object passed in. We do this
    // to retrieve the writer later so that we can run the start twice.
    twObj = writer;

    // Range allows us to parse strings with HTML tags into DOM nodes
    const range = document.createRange();

    // Write out the contents from the codeBoxContents array
    for (let i = 0; i < codeBoxContents.length; i++) {
      const item = codeBoxContents[i];

      // We check if the object contains a string or a function
      if (typeof item.text === "string") {
        // If typewriter is true, then we use the typewriter effect
        if (item.typewriter) {
          writer.changeDelay(item.speed).typeString(item.text);
        } else {
          // Otherwise we just paste the whole text
          writer.callFunction(() => {
            document
              .getElementsByClassName(typewriterWrapperClassName)[0]
              .appendChild(range.createContextualFragment(item.text));
          });
        }
        // Pause typing - different from typewriter speed
        writer.pauseFor(item.delay);
      } else {
        // Otherwise, we call the function with the given arguments
        writer.callFunction(() => {
          return item.text(...item.args);
        });
      }
    }
    writer.start();
  };

  const tw = (
    <Typewriter
      options={{
        cursor: "",
        wrapperClassName: typewriterWrapperClassName,
      }}
      onInit={startWriter}
    />
  );

  return <pre className="code-box">{tw}</pre>;
};

const IndexPage = () => {
  let [isNavOpen, setIsNavOpen] = React.useState(false);
  let [isProjectNavOpen, setIsProjectNavOpen] = React.useState(false);

  // Keep state of whether any of the links have been clicked
  let [clickedLink, setClickedLink] = React.useState(null);

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
        <CodeTextBox
          clickedLink={clickedLink}
          setClickedLink={setClickedLink}
        />
      </div>
    </Layout>
  );
};

// const writer = function (text, callback, delay = 0) {
//   this.append(text);
//   if (callback) setTimeout(callback, delay);
// };

// const typewriter = function (text, speed, callback, delay = 0) {
//   // Inner function to recursively process the text string (thanks 3110)
//   function typewriterAux(self, i, txt, cb) {
//     if (i < txt.length) {
//       self.append(txt.charAt(i));
//       setTimeout(() => {
//         typewriterAux(self, i + 1, txt, cb);
//       }, speed);
//     } else if (cb) setTimeout(cb, delay);
//     // self is just $(this) -- need to propagate every iteration, else wrong ctxt
//     return self;
//   }
//   typewriterAux(this, 0, text, callback);
// };

export default IndexPage;

export const Head = () => <title>David Kim</title>;

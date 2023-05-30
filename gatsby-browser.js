export const onInitialClientRender = () => {
  // $(document).ready(function () {
  //   /** Toggles the nav bar when clicking the nav-intersect icon. */
  //   var navClosed = true;
  //   $("#nav-intersect").click(() => {
  //     // Doesn't use toggle functions directly, because
  //     // "toggle" always means "hide" when stopped mid-animation
  //     if (pnavClosed) {
  //       // if project nav is open, do nothing
  //       if (navClosed) {
  //         $("nav").stop(true, false).animate({ width: "show" }, 400);
  //         $(".contents").addClass("pushed");
  //         $(".main-container").stop(true, false).fadeTo(400, 0.5);
  //         navClosed = false;
  //       } else {
  //         $("nav").stop(true, false).animate({ width: "hide" }, 400);
  //         $(".contents").removeClass("pushed");
  //         $(".main-container").stop(true, false).fadeTo(400, 1);
  //         navClosed = true;
  //       }
  //     }
  //   });
  //   /** Toggles the project nav when the projects text is clicked. */
  //   var pnavClosed = true;
  //   $("#project-nav-intersect").click(() => {
  //     if (navClosed) {
  //       // if nav is open, do nothing
  //       if (pnavClosed) {
  //         $("#project-nav").stop(true, false).animate({ width: "show" }, 400);
  //         $(".contents").addClass("pulled");
  //         $(".main-container").stop(true, false).fadeTo(400, 0.5);
  //         pnavClosed = false;
  //       } else {
  //         $("#project-nav").stop(true, false).animate({ width: "hide" }, 400);
  //         $(".contents").removeClass("pulled");
  //         $(".main-container").stop(true, false).fadeTo(400, 1);
  //         pnavClosed = true;
  //       }
  //     }
  //   });
  //   /** Index page animation for the n word blocks */
  //   let i;
  //   let n = 4;
  //   for (i = 0; i < n; i++) {
  //     let text = "#intro-text";
  //     let $textItem = $(text + String(i + 1));
  //     setTimeout(() => {
  //       $textItem.removeClass("hidden").addClass("shown");
  //     }, (i + 1) * 1200);
  //   }
  //   // Fades the images in after the word blocks have completed loading,
  //   // ordered using imgOrder's contents
  //   let imgOrder = [1, 3, 2];
  //   for (let j = 0; j < imgOrder.length; j++) {
  //     let img = "#image";
  //     let $imgItem = $(img + String(imgOrder[j]));
  //     setTimeout(() => {
  //       $imgItem.removeClass("hidden").addClass("shown");
  //     }, (i + 1) * 1200 + j * 200);
  //   }
  //   /** Rainbowizes all elements with class "rainbow". */
  //   const elements = document.querySelectorAll(".rainbow");
  //   Array.from(elements).forEach((e, i) => {
  //     rainbowize($(e));
  //   });
  //   /** Used for lazy loading elements on a page */
  //   // Throttle ensures that we don't scroll way too often
  //   var settings = {
  //     throttle: 200,
  //   };
  //   var lazyElts = [];
  //   $.fn.viewport = function (options) {
  //     $.extend(settings, options);
  //     lazyElts = this;
  //     return lazyElts.each(function () {
  //       $(this).data("visible", $(this).visible());
  //     });
  //   };
  //   /** Usage: $(element).visible() -> boolean */
  //   $.fn.visible = function () {
  //     var rect = this[0].getBoundingClientRect();
  //     let $window = $(window);
  //     let $mainContainer = $(".main-container");
  //     let vis =
  //       rect.top <= $mainContainer.height() &&
  //       rect.right >= 0 &&
  //       rect.bottom >= 0 &&
  //       rect.left <= $mainContainer.width();
  //     return vis;
  //   };
  //   var timer;
  //   let $mainContainer = $(".main-container");
  //   // Triggered on main container load
  //   $mainContainer.ready(() => {
  //     $.each(lazyElts, function () {
  //       var visible = $(this).visible();
  //       if (visible) {
  //         $(this).data("visible", visible);
  //         let enter = $.Event("keypress", { which: 13 });
  //         $(this).trigger(enter);
  //         $(this).trigger("readyToShow"); // flag: don't load ctr preemptively
  //       }
  //     });
  //   });
  //   // Triggered on scroll every 200ms (or settings.throttle)
  //   let $window = $(window);
  //   $mainContainer.scroll(() => {
  //     triggerOnVisible(timer, settings, lazyElts);
  //   });
  //   $window.resize(() => {
  //     triggerOnVisible(timer, settings, lazyElts);
  //   });
  //   $window.on("orientationChange", () => {
  //     triggerOnVisible(timer, settings, lazyElts);
  //   });
  //   animateProjectLoad();
  //   let login = `davidkim@${navigator.browserInfo.browser.toLowerCase()}:`;
  //   setTimeout(() => {
  //     $("#code-box").writer(
  //       `Powering up website with Ubuntu 20.04 LTS for ${navigator.browserInfo.browser}`,
  //       () => {
  //         $("#code-box").typewriter("...\n", 500, () => {
  //           $("#code-box").writer(
  //             `<span class="timestamp">${login}</span><span class="pwd">~</span>$ `,
  //             () => {
  //               $("#code-box").typewriter(
  //                 `cowsay Welcome to my website! | lolcat\n`,
  //                 50,
  //                 () => {
  //                   $("#code-box").writer(
  //                     `<div><span style="color:#ff0000;"> </span><span style="color:#ff0400;">_</span><span style="color:#ff0800;">_</span><span style="color:#ff0c00;">_</span><span style="color:#ff0f00;">_</span><span style="color:#ff1300;">_</span><span style="color:#ff1700;">_</span><span style="color:#ff1b00;">_</span><span style="color:#ff1f00;">_</span><span style="color:#ff2300;">_</span><span style="color:#ff2600;">_</span><span style="color:#ff2a00;">_</span><span style="color:#ff2e00;">_</span><span style="color:#ff3200;">_</span><span style="color:#ff3600;">_</span><span style="color:#ff3a00;">_</span><span style="color:#ff3e00;">_</span><span style="color:#ff4100;">_</span><span style="color:#ff4500;">_</span><span style="color:#ff4900;">_</span><span style="color:#ff4d00;">_</span><span style="color:#ff5100;">_</span><span style="color:#ff5500;">_</span><span style="color:#ff5900;">_</span><span style="color:#ff5c00;">_</span><span style="color:#ff6000;"> </span></div><div><span style="color:#ff6400;"><</span><span style="color:#ff6800;"> </span><span style="color:#ff6c00;">W</span><span style="color:#ff7000;">e</span><span style="color:#ff7300;">l</span><span style="color:#ff7700;">c</span><span style="color:#ff7b00;">o</span><span style="color:#ff7f00;">m</span><span style="color:#ff8300;">e</span><span style="color:#ff8700;"> </span><span style="color:#ff8b00;">t</span><span style="color:#ff8f00;">o</span><span style="color:#ff9300;"> </span><span style="color:#ff9700;">m</span><span style="color:#ff9b00;">y</span><span style="color:#ff9f00;"> </span><span style="color:#ffa300;">w</span><span style="color:#ffa700;">e</span><span style="color:#ffab00;">b</span><span style="color:#ffaf00;">s</span><span style="color:#ffb300;">i</span><span style="color:#ffb700;">t</span><span style="color:#ffbb00;">e</span><span style="color:#ffbf00;">!</span><span style="color:#ffc300;"> </span><span style="color:#ffc700;">></span></div><div><span style="color:#ffcb00;"> </span><span style="color:#ffcf00;">-</span><span style="color:#ffd300;">-</span><span style="color:#ffd700;">-</span><span style="color:#ffdb00;">-</span><span style="color:#ffdf00;">-</span><span style="color:#ffe300;">-</span><span style="color:#ffe700;">-</span><span style="color:#ffeb00;">-</span><span style="color:#ffef00;">-</span><span style="color:#fff300;">-</span><span style="color:#fff700;">-</span><span style="color:#fffb00;">-</span><span style="color:#ffff00;">-</span><span style="color:#f7ff00;">-</span><span style="color:#f0ff00;">-</span><span style="color:#e8ff00;">-</span><span style="color:#e0ff00;">-</span><span style="color:#d8ff00;">-</span><span style="color:#d1ff00;">-</span><span style="color:#c9ff00;">-</span><span style="color:#c1ff00;">-</span><span style="color:#b9ff00;">-</span><span style="color:#b2ff00;">-</span><span style="color:#aaff00;">-</span><span style="color:#a2ff00;"> </span></div><div><span style="color:#9bff00;"> </span><span style="color:#93ff00;"> </span><span style="color:#8bff00;"> </span><span style="color:#83ff00;"> </span><span style="color:#7cff00;"> </span><span style="color:#74ff00;"> </span><span style="color:#6cff00;"> </span><span style="color:#64ff00;"> </span><span style="color:#5dff00;">\\</span><span style="color:#55ff00;"> </span><span style="color:#4dff00;"> </span><span style="color:#46ff00;"> </span><span style="color:#3eff00;">^</span><span style="color:#36ff00;">_</span><span style="color:#2eff00;">_</span><span style="color:#27ff00;">^</span></div><div><span style="color:#1fff00;"> </span><span style="color:#17ff00;"> </span><span style="color:#0fff00;"> </span><span style="color:#08ff00;"> </span><span style="color:#00ff00;"> </span><span style="color:#00ff08;"> </span><span style="color:#00ff10;"> </span><span style="color:#00ff18;"> </span><span style="color:#00ff20;"> </span><span style="color:#00ff28;">\\</span><span style="color:#00ff30;"> </span><span style="color:#00ff38;"> </span><span style="color:#00ff40;">(</span><span style="color:#00ff48;">o</span><span style="color:#00ff50;">o</span><span style="color:#00ff58;">)</span><span style="color:#00ff60;">\\</span><span style="color:#00ff68;">_</span><span style="color:#00ff70;">_</span><span style="color:#00ff78;">_</span><span style="color:#00ff80;">_</span><span style="color:#00ff87;">_</span><span style="color:#00ff8f;">_</span><span style="color:#00ff97;">_</span></div><div><span style="color:#00ff9f;"> </span><span style="color:#00ffa7;"> </span><span style="color:#00ffaf;"> </span><span style="color:#00ffb7;"> </span><span style="color:#00ffbf;"> </span><span style="color:#00ffc7;"> </span><span style="color:#00ffcf;"> </span><span style="color:#00ffd7;"> </span><span style="color:#00ffdf;"> </span><span style="color:#00ffe7;"> </span><span style="color:#00ffef;"> </span><span style="color:#00fff7;"> </span><span style="color:#00ffff;">(</span><span style="color:#00f7ff;">_</span><span style="color:#00f0ff;">_</span><span style="color:#00e8ff;">)</span><span style="color:#00e0ff;">\\</span><span style="color:#00d8ff;"> </span><span style="color:#00d1ff;"> </span><span style="color:#00c9ff;"> </span><span style="color:#00c1ff;"> </span><span style="color:#00b9ff;"> </span><span style="color:#00b2ff;"> </span><span style="color:#00aaff;"> </span><span style="color:#00a2ff;">)</span><span style="color:#009bff;">\\</span><span style="color:#0093ff;">/</span><span style="color:#008bff;">\\</span></div><div><span style="color:#0083ff;"> </span><span style="color:#007cff;"> </span><span style="color:#0074ff;"> </span><span style="color:#006cff;"> </span><span style="color:#0064ff;"> </span><span style="color:#005dff;"> </span><span style="color:#0055ff;"> </span><span style="color:#004dff;"> </span><span style="color:#0046ff;"> </span><span style="color:#003eff;"> </span><span style="color:#0036ff;"> </span><span style="color:#002eff;"> </span><span style="color:#0027ff;"> </span><span style="color:#001fff;"> </span><span style="color:#0017ff;"> </span><span style="color:#000fff;"> </span><span style="color:#0008ff;">|</span><span style="color:#0000ff;">|</span><span style="color:#0400ff;">-</span><span style="color:#0900ff;">-</span><span style="color:#0d00ff;">-</span><span style="color:#1100ff;">-</span><span style="color:#1600ff;">w</span><span style="color:#1a00ff;"> </span><span style="color:#1e00ff;">|</span></div><div><span style="color:#2300ff;"> </span><span style="color:#2700ff;"> </span><span style="color:#2b00ff;"> </span><span style="color:#3000ff;"> </span><span style="color:#3400ff;"> </span><span style="color:#3800ff;"> </span><span style="color:#3d00ff;"> </span><span style="color:#4100ff;"> </span><span style="color:#4600ff;"> </span><span style="color:#4a00ff;"> </span><span style="color:#4e00ff;"> </span><span style="color:#5300ff;"> </span><span style="color:#5700ff;"> </span><span style="color:#5b00ff;"> </span><span style="color:#6000ff;"> </span><span style="color:#6400ff;"> </span><span style="color:#6800ff;">|</span><span style="color:#6d00ff;">|</span><span style="color:#7100ff;"> </span><span style="color:#7500ff;"> </span><span style="color:#7a00ff;"> </span><span style="color:#7e00ff;"> </span><span style="color:#8200ff;"> </span><span style="color:#8700ff;">|</span><span style="color:#8b00ff;">|</span></div>\n`,
  //                     tooManyCallbacksAtThisPoint // Let's go to a new line lol
  //                   );
  //                 },
  //                 500
  //               );
  //             },
  //             1000
  //           );
  //         });
  //       },
  //       500
  //     );
  //   }, 500);
  //   // This is here for readability purposes (though still completely unreadable)
  //   function tooManyCallbacksAtThisPoint() {
  //     $("#code-box").writer(
  //       `<span class="timestamp">${login}</span><span class="pwd">~</span>$ `,
  //       () => {
  //         $("#code-box").typewriter(
  //           `ls -1\n`,
  //           50,
  //           () => {
  //             $("#code-box").writer(
  //               `<span class="pseudo-links" id="about-pl">about-me</span>\n<span class="pseudo-links" id="projects-pl">projects</span>\n<span class="pseudo-links" id="blog-pl">blog</span>\n<span class="pseudo-links" id="github-pl">github</span>\n<span class="pseudo-links" id="linkedin-pl">linkedin</span>\n<span class="pseudo-links" id="resume-pl">resume</span>\n`,
  //               () => {
  //                 $("#code-box").writer(
  //                   `(Try clicking these!)\n<span class="timestamp">${login}</span><span class="pwd">~</span>$ <span id="cursor">&#9608</span>`,
  //                   () => {
  //                     blinkCursor(500);
  //                     $(".pseudo-links").on("click", pseudoLinksActivator);
  //                   },
  //                   500
  //                 );
  //               },
  //               1000
  //             );
  //           },
  //           500
  //         );
  //       },
  //       2000
  //     );
  //   }
  // });
  // $.fn.writer = function (text, callback, delay = 0) {
  //   this.append(text);
  //   if (callback) setTimeout(callback, delay);
  // };
  // $.fn.typewriter = function (text, speed, callback, delay = 0) {
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
  // /**
  //  * Start blinking the cursor element at a given speed.
  //  * Runs until cursor element is not found in the DOM.
  //  * @param {number} speed - The speed at which the cursor toggles on/off
  //  */
  // function blinkCursor(speed) {
  //   let cursor = document.getElementById("cursor");
  //   let visible = true;
  //   setInterval(() => {
  //     if (visible && cursor) {
  //       cursor.style.opacity = 0;
  //       visible = false;
  //     } else {
  //       cursor.style.opacity = 1;
  //       visible = true;
  //     }
  //   }, speed);
  // }
  // /**
  //  * Enables pseudo-links within the terminal window to be clicked, generating
  //  * more animations and eventually rerouting the client to the correct URL.
  //  */
  // function pseudoLinksActivator() {
  //   let login = `davidkim@${navigator.browserInfo.browser.toLowerCase()}:`;
  //   // Get the cursor out so appending to the end isn't malformed
  //   $("#cursor").remove();
  //   // Don't allow for click spam possibility of the links
  //   $(".pseudo-links").off("click", pseudoLinksActivator);
  //   switch (this.id) {
  //     case "about-pl":
  //       $("#code-box").typewriter(
  //         `cd about-me\n`,
  //         50,
  //         () => {
  //           $("#code-box").writer(
  //             `<span class="timestamp">${login}</span><span class="pwd">~/about-me</span>$ `,
  //             () => {
  //               $("#code-box").typewriter(
  //                 `exit 0\n`,
  //                 50,
  //                 () => {
  //                   $("#code-box").writer(
  //                     `[Process completed]\n`,
  //                     () => {
  //                       $("#code-box").writer(
  //                         `Loading`,
  //                         () => {
  //                           $("#code-box").typewriter(
  //                             "...\n",
  //                             500,
  //                             () => {
  //                               window.location.href = "profile.html";
  //                             },
  //                             100
  //                           );
  //                         },
  //                         500
  //                       );
  //                     },
  //                     700
  //                   );
  //                 },
  //                 500
  //               );
  //             },
  //             700
  //           );
  //         },
  //         500
  //       );
  //       break;
  //     case "projects-pl":
  //       $("#code-box").typewriter(
  //         `cd projects\n`,
  //         50,
  //         () => {
  //           $("#code-box").writer(
  //             `<span class="timestamp">${login}</span><span class="pwd">~/projects</span>$ `,
  //             () => {
  //               $("#code-box").typewriter(
  //                 `exit 0\n`,
  //                 50,
  //                 () => {
  //                   $("#code-box").writer(
  //                     `[Process completed]\n`,
  //                     () => {
  //                       $("#code-box").writer(
  //                         `Loading`,
  //                         () => {
  //                           $("#code-box").typewriter(
  //                             "...\n",
  //                             500,
  //                             () => {
  //                               window.location.href = "projects.html";
  //                             },
  //                             100
  //                           );
  //                         },
  //                         500
  //                       );
  //                     },
  //                     700
  //                   );
  //                 },
  //                 500
  //               );
  //             },
  //             700
  //           );
  //         },
  //         500
  //       );
  //       break;
  //     case "blog-pl":
  //       $("#code-box").typewriter(
  //         `cd blog\n`,
  //         50,
  //         () => {
  //           $("#code-box").writer(
  //             `<span class="timestamp">${login}</span><span class="pwd">~/blog</span>$ `,
  //             () => {
  //               $("#code-box").typewriter(
  //                 `exit 0\n`,
  //                 50,
  //                 () => {
  //                   $("#code-box").writer(
  //                     `[Process completed]\n`,
  //                     () => {
  //                       $("#code-box").writer(
  //                         `Loading`,
  //                         () => {
  //                           $("#code-box").typewriter(
  //                             "...\n",
  //                             500,
  //                             () => {
  //                               window.location.href = "blog.html";
  //                             },
  //                             100
  //                           );
  //                         },
  //                         500
  //                       );
  //                     },
  //                     700
  //                   );
  //                 },
  //                 500
  //               );
  //             },
  //             700
  //           );
  //         },
  //         500
  //       );
  //       break;
  //     case "github-pl":
  //       $("#code-box").typewriter(
  //         `cd github\n`,
  //         50,
  //         () => {
  //           $("#code-box").writer(
  //             `<span class="timestamp">${login}</span><span class="pwd">~/github</span>$ `,
  //             () => {
  //               $("#code-box").typewriter(
  //                 `exit 0\n`,
  //                 50,
  //                 () => {
  //                   $("#code-box").writer(
  //                     `[Process completed]\n`,
  //                     () => {
  //                       $("#code-box").writer(
  //                         `Loading`,
  //                         () => {
  //                           $("#code-box").typewriter(
  //                             "...\n",
  //                             500,
  //                             () => {
  //                               window.location.href =
  //                                 "https://github.com/TrueshotBarrage";
  //                             },
  //                             100
  //                           );
  //                         },
  //                         500
  //                       );
  //                     },
  //                     700
  //                   );
  //                 },
  //                 500
  //               );
  //             },
  //             700
  //           );
  //         },
  //         500
  //       );
  //       break;
  //     case "linkedin-pl":
  //       $("#code-box").typewriter(
  //         `cd linkedin\n`,
  //         50,
  //         () => {
  //           $("#code-box").writer(
  //             `<span class="timestamp">${login}</span><span class="pwd">~/linkedin</span>$ `,
  //             () => {
  //               $("#code-box").typewriter(
  //                 `exit 0\n`,
  //                 50,
  //                 () => {
  //                   $("#code-box").writer(
  //                     `[Process completed]\n`,
  //                     () => {
  //                       $("#code-box").writer(
  //                         `Loading`,
  //                         () => {
  //                           $("#code-box").typewriter(
  //                             "...\n",
  //                             500,
  //                             () => {
  //                               window.location.href =
  //                                 "https://www.linkedin.com/in/davidkim2106/";
  //                             },
  //                             100
  //                           );
  //                         },
  //                         500
  //                       );
  //                     },
  //                     700
  //                   );
  //                 },
  //                 500
  //               );
  //             },
  //             700
  //           );
  //         },
  //         500
  //       );
  //       break;
  //     case "resume-pl":
  //       $("#code-box").typewriter(
  //         `cd resume\n`,
  //         50,
  //         () => {
  //           $("#code-box").writer(
  //             `<span class="timestamp">${login}</span><span class="pwd">~/resume</span>$ `,
  //             () => {
  //               $("#code-box").typewriter(
  //                 `exit 0\n`,
  //                 50,
  //                 () => {
  //                   $("#code-box").writer(
  //                     `[Process completed]\n`,
  //                     () => {
  //                       $("#code-box").writer(
  //                         `Loading`,
  //                         () => {
  //                           $("#code-box").typewriter(
  //                             "...\n",
  //                             500,
  //                             () => {
  //                               window.location.href = "resume.html";
  //                             },
  //                             100
  //                           );
  //                         },
  //                         500
  //                       );
  //                     },
  //                     700
  //                   );
  //                 },
  //                 500
  //               );
  //             },
  //             700
  //           );
  //         },
  //         500
  //       );
  //       break;
  //     default:
  //   }
  // }
  // // Browser detection
  // navigator.browserInfo = (function () {
  //   var ua = navigator.userAgent,
  //     tem,
  //     M =
  //       ua.match(
  //         /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
  //       ) || [];
  //   if (/trident/i.test(M[1])) {
  //     tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
  //     return { browser: "IE", version: tem[1] || "" };
  //   }
  //   if (M[1] === "Chrome") {
  //     tem = ua.match(/\b(OPR|Edge?)\/(\d+)/);
  //     if (tem != null)
  //       return {
  //         browser: tem
  //           .slice(1)[0]
  //           .replace("OPR", "Opera")
  //           .replace("Edg", "Edge"),
  //         version: tem.slice(1)[1],
  //       };
  //   }
  //   M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
  //   if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  //   return { browser: M[0], version: M[1] };
  // })();
  // // If screen size is 500px or greater, return true
  // function checkSize() {
  //   return $("nav").css("--small") != 1;
  // }
  // // Colors your word into a beautiful rainbow. Very !important function.
  // // You can pass in any element with text, but do keep in mind that it
  // // converts your text into a nested span element.
  // function rainbowize($element) {
  //   let rainbow = [
  //     "#ff4136",
  //     "#ff851b",
  //     "#ffdc00",
  //     "#2ecc40",
  //     "#0074d9",
  //     "#001f3f",
  //     "#b10dc9",
  //   ];
  //   let text = $element.text();
  //   let $rainbowResult = $(
  //     "<span class='rainbowized'>" +
  //       "<!-- Rainbowized by David's script --></span>"
  //   ); // David wuz here
  //   for (let i = 0; i < text.length; i++) {
  //     let $colorfulLetter = $("<span></span>")
  //       .text(text.charAt(i))
  //       .attr("style", "color:" + rainbow[i % 7]);
  //     $rainbowResult.append($colorfulLetter);
  //   }
  //   $element.html($rainbowResult);
  //   // this is preferred, but unfortunately removes other classes
  //   // $element.replaceWith($rainbowResult);
  // }
  // /** Animates the loading of the projects by lazy loading + waiting. */
  // function animateProjectLoad() {
  //   let $project = $(".project");
  //   lazyLoadImages($project);
  //   for (let i = 0; i < $project.length; i++) {
  //     let $projectItem = $("#" + $project[i].id);
  //     $projectItem.on("readyToShow", () => {
  //       $projectItem.imagesLoaded(() => {
  //         $projectItem.removeClass("hidden").addClass("shown");
  //       });
  //     });
  //   }
  // }
  // function triggerOnVisible(timer, settings, elements) {
  //   if (!timer) {
  //     timer = setTimeout(function () {
  //       $.each(elements, function () {
  //         var visible = $(this).visible();
  //         if (visible) {
  //           if (!$(this).data("visible")) {
  //             $(this).data("visible", visible);
  //             let enter = $.Event("keypress", { which: 13 });
  //             $(this).trigger(enter); // Tells image to start loading
  //             $(this).trigger("readyToShow"); // flag: don't load ctr preemptively
  //           }
  //         } else if ($(this).data("visible")) {
  //           $(this).data("visible", visible);
  //         }
  //       });
  //       timer = null;
  //     }, settings.throttle);
  //   }
  // }
  // /** Lazy loads images by replacing "data-src" with "src" for img tags. */
  // function lazyLoadImages($elt) {
  //   $elt.viewport().on("enter", function () {
  //     let $dataSrcAttr = $(this).find("img[data-src]");
  //     $dataSrcAttr.each((i, img) => {
  //       var $img = $(img);
  //       $img.attr("src", $img.attr("data-src")).removeAttr("data-src");
  //     });
  //   });
  // }
};

/**-----------------------------------------------------------
 * name: main.js
 * purpose: jQuery scripts for animations on the website
 * author: david kim
 * last revised: april 7th, 2020
 * Copyright 2020 David Kim. All rights reserved.
 -----------------------------------------------------------*/

$(document).ready(function () {
  // Not particularly useful atm, since the original idea, with
  // different nav behavior based on window size, got scrapped.
  // var windowIsBig = checkSize();
  // $(window).resize(() => {
  //   windowIsBig = checkSize();
  // });

  /** Toggles the nav bar when clicking the nav-intersect icon. */
  var navClosed = true;
  $("#nav-intersect").click(() => {
    // Doesn't use toggle functions directly, because
    // "toggle" always means "hide" when stopped mid-animation
    if (pnavClosed) { // if project nav is open, do nothing
      if (navClosed) {
        $("nav").stop(true, false).animate({ width: 'show' }, 400);
        $(".contents").addClass("pushed");
        $(".main-container").stop(true, false).fadeTo(400, 0.5);
        navClosed = false;
      } else {
        $("nav").stop(true, false).animate({ width: 'hide' }, 400);
        $(".contents").removeClass("pushed");
        $(".main-container").stop(true, false).fadeTo(400, 1);
        navClosed = true;
      }
    }
  });

  /** Toggles the project nav when the projects text is clicked. */
  var pnavClosed = true;
  $("#project-nav-intersect").click(() => {
    if (navClosed) { // if nav is open, do nothing
      if (pnavClosed) {
        $("#project-nav").stop(true, false).animate({ width: 'show' }, 400);
        $(".contents").addClass("pulled");
        $(".main-container").stop(true, false).fadeTo(400, 0.5);
        pnavClosed = false;
      }
      else {
        $("#project-nav").stop(true, false).animate({ width: 'hide' }, 400);
        $(".contents").removeClass("pulled");
        $(".main-container").stop(true, false).fadeTo(400, 1);
        pnavClosed = true;
      }
    }
  });

  /** Index page animation for the n word blocks */
  let i;
  let n = 4;
  for (i = 0; i < n; i++) {
    let text = "#intro-text";
    let $textItem = $(text + String(i + 1));
    setTimeout(() => {
      $textItem.removeClass("hidden").addClass("shown");
    }, (i + 1) * 1200);
  }
  // Fades the images in after the word blocks have completed loading,
  // ordered using imgOrder's contents
  let imgOrder = [1, 3, 2];
  for (let j = 0; j < imgOrder.length; j++) {
    let img = "#image";
    let $imgItem = $(img + String(imgOrder[j]));
    setTimeout(() => {
      $imgItem.removeClass("hidden").addClass("shown");
    }, (i + 1) * 1200 + (j * 200));
  }

  /** Rainbowizes all elements with class "rainbow". */
  const elements = document.querySelectorAll('.rainbow');
  Array.from(elements).forEach((e, i) => {
    rainbowize($(e));
  });

  /** Used for lazy loading elements on a page */
  // Throttle ensures that we don't scroll way too often
  var settings = {
    throttle: 200
  };
  var lazyElts = [];

  $.fn.viewport = function (options) {
    $.extend(settings, options);
    lazyElts = this;

    return lazyElts.each(function () {
      $(this).data("visible", $(this).visible());
    });
  };

  /** Usage: $(element).visible() -> boolean */
  $.fn.visible = function () {
    var rect = this[0].getBoundingClientRect();
    let $window = $(window);
    let $mainContainer = $(".main-container")

    let vis = (
      rect.top <= $mainContainer.height()
      && rect.right >= 0
      && rect.bottom >= 0
      && rect.left <= $mainContainer.width()
    );
    return vis;
  };

  var timer;
  let $mainContainer = $(".main-container");
  // Triggered on main container load
  $mainContainer.ready(() => {
    $.each(lazyElts, function () {
      var visible = $(this).visible();
      if (visible) {
        $(this).data("visible", visible);
        $(this).trigger("enter", event);
        $(this).trigger("readyToShow"); // flag: don't load ctr preemptively
      }
    });
  });
  // Triggered on scroll every 200ms (or settings.throttle)
  let $window = $(window);
  $mainContainer.scroll(() => {
    triggerOnVisible(timer, settings, lazyElts);
  });
  $window.resize(() => {
    triggerOnVisible(timer, settings, lazyElts);
  });
  $window.on("orientationChange", () => {
    triggerOnVisible(timer, settings, lazyElts);
  });

  animateProjectLoad();
});

// If screen size is 500px or greater, return true
function checkSize() {
  return $("nav").css("--small") != 1;
}

// Colors your word into a beautiful rainbow. Very !important function.
// You can pass in any element with text, but do keep in mind that it
// converts your text into a nested span element.
function rainbowize($element) {
  let rainbow = ["#ff4136", "#ff851b", "#ffdc00", "#2ecc40", "#0074d9", "#001f3f", "#b10dc9"];
  text = $element.text();
  $rainbowResult = $("<span class='rainbowized'>"
    + "<!-- Rainbowized by David's script --></span>"); // David wuz here
  for (let i = 0; i < text.length; i++) {
    let $colorfulLetter = $("<span></span>")
      .text(text.charAt(i))
      .attr("style", "color:" + rainbow[i % 7]);
    $rainbowResult.append($colorfulLetter);
  }

  $element.html($rainbowResult);
  // this is preferred, but unfortunately removes other classes
  // $element.replaceWith($rainbowResult);
}

/** Animates the loading of the projects by lazy loading + waiting. */
function animateProjectLoad() {
  let $project = $(".project");
  lazyLoadImages($project);
  for (let i = 0; i < $project.length; i++) {
    let $projectItem = $("#" + $project[i].id);
    $projectItem.on("readyToShow", () => {
      $projectItem.imagesLoaded(() => {
        $projectItem.removeClass("hidden").addClass("shown");
      });
    });
  }
}

function triggerOnVisible(timer, settings, elements) {
  if (!timer) {
    timer = setTimeout(function () {
      $.each(elements, function () {
        var visible = $(this).visible();
        if (visible) {
          if (!$(this).data("visible")) {
            $(this).data("visible", visible);
            $(this).trigger("enter", event); // Tells image to start loading
            $(this).trigger("readyToShow"); // flag: don't load ctr preemptively
          }
        } else if ($(this).data("visible")) {
          $(this).data("visible", visible);
          $(this).trigger("leave", event); // We don't use this; good anyways
        }
      });
      timer = null;
    }, settings.throttle);
  }
}

/** Lazy loads images by replacing "data-src" with "src" for img tags. */
function lazyLoadImages($elt) {
  $elt.viewport().on("enter", function () {
    let $dataSrcAttr = $(this).find("img[data-src]");
    $dataSrcAttr.each((i, img) => {
      var $img = $(img);
      $img.attr("src", $img.attr("data-src")).removeAttr("data-src");
    });
  });
}

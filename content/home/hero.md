---
widget: hero
headless: true
weight: 10
title: Online Course Template
hero_media: 
design:
  background:
    gradient_angle: 0
    gradient_start: 'rgb(80,0,80)'
    gradient_end: 'rgb(0,60,80)'
    text_color_light: true
cta:
  url: course/
  label: Explore our courses
  icon_pack: fas
  icon: user-graduate
cta_alt:
  url:
  label:
cta_note:
  label:
advanced:
  css_class: fullscreen
---
<!--div id="particles-js"></div-->
<div id="tsparticles"></div>

There a break right here...

<br>

<!--a class="github-button" href="https://github.com/wowchemy/wowchemy-hugo-modules" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star Wowchemy Website Builder for Hugo">Star Wowchemy Website Builder for Hugo</a-->

<a class="github-button" href="https://github.com/wowchemy/starter-hugo-online-course" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star the Online Course template">Star the Online Course template</a>
<script async defer src="https://buttons.github.io/buttons.js"></script>

<div class="headline">
<h1 class="punchline">
    Widget Inc.
</h1>
<p class="tagline">
I HATE MAKING WEBSITES
WHY CANT I PUT JAVASCRIPT HERE
</p>
</div>
<!--script>
//particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
  //console.log('callback - particles.js config loaded');
//});
</script-->
<script>
// tsParticles
//     .loadJSON("tsparticles", "assets/tsparticles0.json")
//     .then((container) => {
//         console.log("callback - tsparticles config loaded");
//     })
//     .catch((error) => {
//         console.error(error);
//     });
    tsParticles.load("tsparticles", {
  detectRetina: false,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 8,
        size: 6,
        speed: 3
      }
    }
  },
  particles: {
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 20,
        sync: true
      }
    },
    lineLinked: {
      blink: false,
      color: "random",
      consent: false,
      distance: 30,
      enable: true,
      opacity: 0.3,
      width: 0.5
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200
        }
      },
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: true,
      speed: 0.5,
      straight: false
    },
    number: {
      density: {
        enable: false,
        area: 2000
      },
      limit: 0,
      value: 200
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.05,
        speed: 2,
        sync: false
      },
      random: false,
      value: 1
    },
    shape: {
      type: "circle"
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false
      },
      random: true,
      value: 1
    }
  },
  polygon: {
    draw: {
      enable: true,
      lineColor: "rgba(255,255,255,0.2)",
      lineWidth: 0.3
    },
    move: {
      radius: 10
    },
    inlineArrangement: "equidistant",
    scale: 0.5,
    type: "inline",
    url: "https://particles.js.org/images/smalldeer.svg"
  }
});
</script>
<script>
		ScrollReveal().reveal('.headline', { delay: 500 });
    ScrollReveal().reveal('.tagline', { delay: 1500 });
    ScrollReveal().reveal('.punchline', { delay: 2000 });
</script>

---
widget: hero
headless: true
weight: 10
title: I'm an XR Developer
hero_media: 
design:
  background:
    gradient_angle: 0
    gradient_start: 'rgb(80,0,80)'
    gradient_end: 'rgb(0,60,80)'
    text_color_light: true
cta:
  url: course/
  label: This button will destroy your device
  icon_pack: fas
  icon: power-off
cta_alt:
  url:
  label:
cta_note:
  label:
advanced:
  css_class: fullscreen
---
<div id="particles-js"></div>
<!--div id="tsparticles"></div-->

There a break right here...
{{< figure src="https://gfycat.com/requirednecessarybluefintuna" title="MP4" >}}
{{< youtube id="zsAvdJypnj8?autoplay=1" autoplay="true" title="wad" >}}
![lightgallery](https://www.lightgalleryjs.com/lightgallery-demo.png)
<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="http://www.youtube.com/embed/zsAvdJypnj8?autoplay=1&origin=http://example.com"
  frameborder="0"/>


<br>
<div class="embed">
  <div id="yt-embed"></div>
</div>

<script>
  function onYouTubeIframeAPIReady() {
	var player;
	player = new YT.Player('yt-embed', { // Replaces the <div id="yt-embed"> with an iframe
	  videoId: 'zsAvdJypnj8', // Video ID
	  width: 960, // Video width
	  height: 600, // Video height
	  playerVars: {
		autoplay: 1, // Auto-play
		controls: 0, // Turn off controls
		showinfo: 0, // Hide the video title
		modestbranding: 1, // Hide all YouTube branding
		loop: 1, // Loop video
		fs: 0, // Remove full screen button
		cc_load_policy: 1, // Turn off closed captions
		iv_load_policy: 3,  // Turn off annotations
		autohide: 1, // Turn off controls auto-hiding
		rel: 0, // Turn off related content on pause
		disablekb: 1, // Turn off keyboard controls
	  },
	  events: {
		onReady: function(e) {
		  e.target.mute();
		}
	  }
	});
  }
  </script>
<!--a class="github-button" href="https://github.com/wowchemy/wowchemy-hugo-modules" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star Wowchemy Website Builder for Hugo">Star Wowchemy Website Builder for Hugo</a-->

<a class="github-button" href="https://github.com/wowchemy/starter-hugo-online-course" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star the Online Course template">Star the Online Course template</a>
<script async defer src="https://buttons.github.io/buttons.js"></script>

<div class="headline">
<h1 class="punchline">
    Boom Punchline
</h1>
<p class="tagline">
WTF IS A TAGLINE
</p>
</div>
<!--script>
//particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
  //console.log('callback - particles.js config loaded');
//});
</script-->
<script>
  particlesJS.load('particles-js', 'assets/particlesjs0.json', function() {
  console.log('callback - particles.js config loaded');
});
// tsParticles
//     .loadJSON("tsparticles", "assets/tsparticles0.json")
//     .then((container) => {
//         console.log("callback - tsparticles config loaded");
//     })
//     .catch((error) => {
//         console.error(error);
//     });
</script>
<script>
		ScrollReveal().reveal('.headline', { delay: 500 });
    ScrollReveal().reveal('.tagline', { delay: 1500 });
    ScrollReveal().reveal('.punchline', { delay: 2000 });
</script>

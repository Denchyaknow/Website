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
<div class="videobox" >
<div id="player"></div>
</div>
<script>
  var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var player;
        function onYouTubeIframeAPIReady() {
          player = new YT.Player('player', {
            height: '360',
          width: '640',
          videoId: 'zsAvdJypnj8',
          host: 'http://www.youtube-nocookie.com',//privacy mode
          playerVars: { 'controls': 0, //hide controls
                       'autohide': 1,
                       'modestbranding': 1, //hide brand
                       'showinfo': 0, //hide video info
                       'mute' : 1 //video is muted
                      },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        }
        function onPlayerReady(event) {
          goToStart(event);
        }
        function onPlayerStateChange(event) {
          var tm = player.getCurrentTime();
          if (event.data == YT.PlayerState.ENDED) {
            goToStart(event);
          }
        }
        function goToStart(event) {
          event.target.seekTo(0,1);
          player.playVideo();
        }
</script>
There a break right here...

<!--a class="github-button" href="https://github.com/wowchemy/wowchemy-hugo-modules" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star Wowchemy Website Builder for Hugo">Star Wowchemy Website Builder for Hugo</a-->

<!--a class="github-button" href="https://github.com/wowchemy/starter-hugo-online-course" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star the Online Course template">Star the Online Course template</a>
<script async defer src="https://buttons.github.io/buttons.js"></script-->

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
</script>
<script>
		ScrollReveal().reveal('.headline', { delay: 500 });
    ScrollReveal().reveal('.tagline', { delay: 1500 });
    ScrollReveal().reveal('.punchline', { delay: 2000 });
</script>

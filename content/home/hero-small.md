---
title:
active: true
subtitle:
widget: blank
headless: true
weight: 10
design: 
  columns: '1'
advanced:
  css_class: video_body
---
<div id="particles-js"></div>
<div class="particleback"></div>
<script>
  particlesJS.load('particles-js', 'assets/particlesjs1.json', function() {
  console.log('callback - particles.js config loaded');
});
</script>

<div class="video_hero">
    <video muted autoplay="" name="media" loop=""><source src="https://thumbs.gfycat.com/ChillyThunderousIberiannase-mobile.mp4" type="video/mp4"></video>
    <div class="video_cover"></div>
</div>
<div class="headline">
    <h1 class="intro_0">
        I'm Dencho
    </h1>
    <p class="intro_1">
        A front-end XR Developer
    </p>
    <p class="intro_2">
        {{% cta cta_link="https://discordapp.com/users/102797530168844288" cta_text="Contact via Discord" %}}>
    </p>
</div>

<script>
    ScrollReveal().reveal('.video_hero', { delay: 500, origin: 'top', reset: true });
    ScrollReveal().reveal('.intro_0', { delay: 750, origin: 'bottom', reset: true });
    ScrollReveal().reveal('.intro_1', { delay: 1000, origin: 'bottom', reset: true });
    ScrollReveal().reveal('.intro_2', { delay: 1250, origin: 'bottom', reset: true });
</script>

<!--{{% cta cta_link="https://discordapp.com/users/102797530168844288" cta_text="Contact via Discord" %}}-->
<!--script>
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";

  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var video_frame;
  function onYouTubeIframeAPIReady() {
    video_frame = new YT.Player('video_frame', {
          height: '740',
          width: '1080',
          videoId: 'zsAvdJypnj8',
          host: 'http://www.youtube-nocookie.com',//privacy mode
          playerVars: { 
            'autoplay': 1,
            'controls': 0, //hide controls
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
          var tm = video_frame.getCurrentTime();
          if (event.data == YT.PlayerState.ENDED) {
            console.log("ENDED");
            goToStart(event);
          }
          if(event.data == YT.PlayerState.CUED){
            console.log("CUED");
            goToStart(event);
          }

        }
        function goToStart(event) {
          event.target.seekTo(0,1);
          video_frame.playVideo();
        }
</script-->

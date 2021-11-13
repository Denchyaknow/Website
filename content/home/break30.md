---
title: I love creating
active: true
subtitle: Iteration - Prototyping - Reverse Engineering - Modulation
widget: blank
headless: true
weight: 30
design: 
  columns: '1'
advanced:
  css_class: transparent
---
<div class="video_break">
<iframe id="video_frame"
        width="1000" height="640"
        src="https://www.youtube.com/embed/zsAvdJypnj8?enablejsapi=1"
        frameborder="0"
        style="border: solid 4px #37474F"
></iframe>
</div>

<!--{{% cta cta_link="https://discordapp.com/users/102797530168844288" cta_text="Contact via Discord" %}}-->
<script>
  var tag = document.createElement('script');
  tag.id = "video_background";
  tag.src = "https://www.youtube.com/iframe_api";

  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
          player = new YT.Player('video_frame', {
          //height: '360',
          //width: '640',
          //videoId: 'zsAvdJypnj8',
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

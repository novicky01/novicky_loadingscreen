


        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player;
        function onYouTubeIframeAPIReady() {
          player = new YT.Player('player', {
            height: '1080',
            width: '1920',
            videoId: 'A81BHskiXa4',
            playerVars: { 'autoplay': 1, 'controls': 0 },
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
        }
        var dvolume = 10;
        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
          event.target.playVideo();
          event.target.setVolume(dvolume);
          event.target.nextVideo(loop);
        }
  
        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;
        function onPlayerStateChange(event) {
          if (event.data == YT.PlayerState.PLAYING && !done) {
            done = true;
          }
        }
        function stopVideo() {
          player.stopVideo();
        }
       function increaseVolume() {
            dvolume = dvolume + 2;
            player.setVolume(dvolume);
       }
       function decreaseVolume() {
        dvolume = dvolume - 2;
        player.setVolume(dvolume);
   }


        document.addEventListener(
            "keydown",
            function(event) {
                console.log(event.key);
                var key = event.key.toLowerCase()
                if (key == "p") {
                  player.setVolume(0);
                }
                if (player.getVolume() == 0) {
                    if (key == "p") {
                        player.setVolume(dvolume);
                    }
                }
                if (key == "o") {
                    increaseVolume();
                }
                if (key == "l") {
                    decreaseVolume();
                }
            },
          );





       
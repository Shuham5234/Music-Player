const songs = [
    { title: "Tum Prem Ho", src: "love.mp3" },
    { title: "Amaran Sai Pallavi", src: "Amaran Sai Pallavi .mp3" },
    { title: "Tu hai samaya", src: "tuhaimujsamaya.mp3" },
    { title: "Bhes", src: "bhes.mp3" },
    { title: "Flute", src: "flute.mp3" },
    { title: "Krishna", src: "Krishna.mp3" },
    { title: "Tum Prem Ho", src: "love.mp3" },
    { title: "Tu hai n toh", src: "tuhaintoh.mp3" },
    { title: "Dil ke paas", src: "ke-paas.mp3" },

    

  ];




  let currentSong = 0;
  const audio = document.getElementById("audio");
  const title = document.getElementById("title");
  const playBtn = document.getElementById("play");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  
  function loadSong(song) {
    title.textContent = song.title;
    audio.src = song.src;
    progress.max= song.duration;
    progress.value= song.currentTime;
  }
  
  function playSong() {
    audio.play(); 
}
  
  function pauseSong() {
    audio.pause();
    playBtn.textContent = "Play";
  }
  
  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      playSong();
     
  
    } else {
      pauseSong();
    }
  });
  
  prevBtn.addEventListener("click", () => {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(songs[currentSong]);
    playSong();
  });
  
  nextBtn.addEventListener("click", () => {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(songs[currentSong]);
    playSong();
  });
  
 
  // Load the first song
  loadSong(songs[currentSong]);





  if(audio.play()){
    setInterval(()=>{
        progress.value=audio.currentTime;
    },1);
}
progress.onchange=function(){
    audio.play();
    audio.currentTime=progress.value;
    ctrlcon.classList.add("fa-pause")
    ctrlcon.classList.remove("fa-play")
}
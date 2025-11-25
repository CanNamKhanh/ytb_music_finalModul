import {
  getAlbumDetail,
  getPlaylistDetail,
  getSongDetail,
  getVideoDetail,
} from "../utils/httpRequest";

//CHECK DATA RESPONSE
const checkData = async (path) => {
  const songData = await getSongDetail(path);
  if (songData) return { type: "song", data: songData };

  const videoData = await getVideoDetail(path);
  if (videoData) return { type: "video", data: videoData };

  const albumData = await getAlbumDetail(path);
  if (albumData) return { type: "album", data: albumData };

  const playlistData = await getPlaylistDetail(path);
  if (playlistData) return { type: "playlist", data: playlistData };

  return null;
};

const Player = async () => {
  const path = location.href.split("player/");
  // console.log(location.href.split("/").at(-1));
  // console.log(path[1]);
  // const data = await getPlaylistDetail(path[1]);
  const res = await checkData(path[1]);
  // console.log(data.data);
  // console.log(res);

  const data = res.data;
  console.log(data.videoId);

  const tracks = checkTracks(data);
  console.log(tracks);

  return `
    <div class="bg-black text-white font-sans w-screen mx-auto mt-[45px] h-[530px] mr-10">
    <div class="flex flex-col w-[90%] mx-auto h-full">
        <div class="flex flex-1 overflow-hidden">
            <div class="flex-1 flex flex-col items-center justify-center text-center p-8 overflow-y-auto">
                <img class="video-thumb w-190 h-100 rounded-lg object-cover shadow-2xl mb-6">
                <iframe class="w-190 h-100 rounded-lg object-cover shadow-2xl mb-6 hidden"></iframe>
            </div>
            <!-- Music queue section -->
            <div class="w-125 border-l border-gray-800 pl-6 overflow-y-auto">
                <div class="flex gap-3 mb-6 overflow-x-auto pb-2 justify-around sticky top-0 bg-black w-full">
                    <button class="tab-btn active cursor-pointer text-white border-b-2 border-white pb-2">UP NEXT</button>
                    <button class="tab-btn text-gray-400 hover:text-white pb-2 cursor-pointer">LYRICS</button>
                    <button class="tab-btn text-gray-400 hover:text-white pb-2 cursor-pointer">RELATED</button>
                </div>
                <!-- Music queue -->
                <div class="flex flex-col gap-2 mt-10">
                    ${tracks
                      .map((item) => {
                        // console.log(item);
                        return `<div class="queue-item hover:bg-gray-900 rounded p-2 cursor-pointer flex items-center gap-3 transition-all" data-url="${
                          item.audioUrl
                        }" data-img="${item.thumbnails[0]}" data-title="${
                          item.title
                        }" data-artist="${item.artists[0]}">
                        <img src="${
                          item.thumbnails[0]
                        }" class="w-10 h-10 rounded object-cover">
                        <div class="flex-1 min-w-0">
                          <div class="text-sm font-medium truncate">${
                            item.title
                          }</div>
                          <div class=" text-gray-400 truncate">${checkArtists(
                            item
                          )}</div>
                        </div>
                        <span class=" text-gray-400">
                          ${Math.floor(item.duration / 60)}:${
                          item.duration % 60 < 10
                            ? "0" + (item.duration % 60)
                            : item.duration % 60
                        }
                        </span>
                      </div>`;
                      })
                      .join("")}
                    </div>
                </div>
            </div>
                <div class="h-24 border-t border-gray-800 p-4 bg-gray-950 flex items-center gap-4 fixed w-screen bottom-0 left-0">
                    <!-- Left: Song Info -->
                    <div class="w-72 flex items-center gap-3">
                        <img src="" class="w-14 h-14 rounded object-cover">
                        <div class="flex-1">
                            <div class="text-sm font-medium truncate">${
                              data.title
                            } | ${checkArtists(data)}</div>
                            <div class=" text-gray-400 truncate">${checkArtists(
                              data
                            )} </div>
                        </div>
                    </div>

                    <div class="flex-1 flex flex-col items-center gap-2">
                        <div class="flex items-center gap-4">
                            <button class="previous-btn w-10 h-10 hover:bg-gray-400 text-xl rounded-full flex items-center justify-center text-white transition-all cursor-pointer">
                              <i class="fa-solid fa-backward-step"></i>
                            </button>
                            <button class="w-15 h-15 hover:bg-gray-400 text-4xl rounded-full flex items-center justify-center text-white transition-all cursor-pointer">
                              <i class="fa-solid fa-play"></i>
                            </button>
                            <button class="next-btn w-10 h-10 hover:bg-gray-400 text-xl rounded-full flex items-center justify-center text-white transition-all cursor-pointer">
                              <i class="fa-solid fa-forward-step"></i>
                            </button>
                        </div>
                        <div class="w-full flex items-center gap-2">
                          <div class="time-line flex-1 h-1 bg-gray-700 rounded cursor-pointer group">
                            <div class="progress-bar h-full bg-red-500 rounded transition-all"></div>
                          </div>
                          <span class="text-xs text-gray-400">0:00 / 0:00</span>
                        </div>
                      </div>

                    <!-- Volumn section -->
                    <div class="w-72 flex items-center justify-end gap-3">
                        <span class="text-lg cursor-pointer"><i class="fa-solid fa-volume-high"></i></span>
                        <div class="w-24 h-1 bg-gray-700 rounded cursor-pointer"></div>
                    </div>
                    <audio id="audioPlayer"></audio>
                </div>
            </div>
        </div>
          `;
};

export default Player;

export const setupPlayerEvents = () => {
  const audio = document.getElementById("audioPlayer");
  if (!audio) return;

  const queueItems = document.querySelectorAll(".queue-item");
  // console.log(queueItems[0]);
  //PLAY FIRST SONG
  const vidThumb = document.querySelector(".video-thumb");
  let currentIndex = 0;

  let firstSong = queueItems[currentIndex];
  audio.src = firstSong.dataset.url;
  vidThumb.src = firstSong.dataset.img;
  audio.play();

  const playBtn = document.querySelector(".fa-play");
  const playWrapper = playBtn.parentElement;
  const timeText = document.querySelector(".text-xs");

  const progressBar = document.querySelector(".progress-bar");

  queueItems.forEach((item) => {
    item.addEventListener("click", () => {
      const url = item.dataset.url;
      const thumb = item.dataset.img;
      vidThumb.src = thumb;

      // console.log(item);

      if (!url) return;
      audio.src = url;
      audio.play();
      playBtn.classList.replace("fa-play", "fa-pause");
    });
  });

  //PLAY / PAUSE
  playWrapper.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
  audio.addEventListener("play", () => {
    playBtn.classList.replace("fa-play", "fa-pause");
  });

  audio.addEventListener("pause", () => {
    playBtn.classList.replace("fa-pause", "fa-play");
  });

  //TIME LINE
  audio.addEventListener("timeupdate", () => {
    if (!progressBar) return;
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${percent}%`;

    const currentMin = Math.floor(audio.currentTime / 60);
    const currentSec = Math.floor(audio.currentTime % 60)
      .toString()
      .padStart(2, "0");
    const durationMin = Math.floor(audio.duration / 60);
    const durationSec = Math.floor(audio.duration % 60)
      .toString()
      .padStart(2, "0");

    timeText.textContent = `${currentMin}:${currentSec} / ${durationMin}:${durationSec}`;
  });

  //Tua =))
  const timeLine = document.querySelector(".time-line");
  timeLine.addEventListener("click", (e) => {
    const curLocation = e.target.getBoundingClientRect();
    const skipTime = e.clientX - curLocation.left;
    const newTime = (skipTime / curLocation.width) * audio.duration;
    audio.currentTime = newTime;
  });

  //NEXT - PREVIOUS SONG
  const activeSong = (index) => {
    firstSong = queueItems[index];
    if (!firstSong) return;
    audio.src = firstSong.dataset.url;
    vidThumb.src = firstSong.dataset.img;
    audio.play();
  };

  const previousBtn = document.querySelector(".previous-btn");
  const nextBtn = document.querySelector(".next-btn");

  previousBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      activeSong(currentIndex);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < queueItems.length - 1) {
      currentIndex++;
      activeSong(currentIndex);
    }
  });
};

//CHECK ARTISTS
const checkArtists = (data) => {
  if (data.artists) return data.artists[0];
  return `${data.popularity} Views`;
};

//CHECK TRACK
const checkTracks = (data) => {
  if (data.tracks) return data.tracks;
  if (data.playlists) return data.playlists; //Need fix
  return data;
};

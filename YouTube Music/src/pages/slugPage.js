import {
  getLinesAlbums,
  getLinesPlaylists,
  getLinesSongs,
  getLinesVideos,
  getSlug,
} from "../utils/httpRequest";

//RENDER PAGE NAME
const SlugPage = async () => {
  const slug = location.href.split("/").at(-1);
  const page = location.href.split("/").at(-2);
  const path = `/${page}/${slug}`;
  // console.log(path);
  getSlug(path);
  const data = await getSlug(path);
  if (!data) return;

  return `<div class="text-white">
            <div class="js-slug-title text-4xl font-bold">${data.name}</div>
            <div class="js-slug-content"></div>
            <div class="js-slug-songs mt-15"></div>
            <div class="js-slug-playlists mt-15"></div>
            <div class="js-slug-albums mt-15"></div>
            <div class="js-slug-videos mt-15"></div>
          </div>`;
};
export default SlugPage;

//RENDER SLUG NAME
export const renderPageSlug = async () => {
  const slug = location.href.split("/").at(-1);
  const page = location.href.split("/").at(-2);
  const path = `/${page}/${slug}`;
  if (page === "categories") {
    const container = document.querySelector(".js-slug-content");
    //API CALLING
    const data = await getSlug(path);
    if (!data) return;
    const html = data.subcategories
      .map(
        (item) =>
          `<div class="js-slug-section w-[90%] mt-25">
                      <div class="js-title flex justify-between items-center">
                          <a class="title text-xl font-bold hover:underline cursor-pointer">${item.name}</a>
                          <div class="js-active-btn flex items-center gap-5">
                              <button class="px-3 py-1 border-gray-500 rounded-full border cursor-pointer hover:bg-gray-500">More</button>
                              <div class="js-previous-btn-wrapper w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                                  <i class="fa-solid fa-angle-left"></i>
                              </div>
                              <div class="js-next-btn-wrapper w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                                  <i class="fa-solid fa-angle-right"></i>
                              </div>
                          </div>    
                      </div>
                      <div class="js-slug-playlist flex gap-6 w-full h-[220px] mt-5 columns-4 overflow-x-hidden hover:overflow-x-scroll"></div>
                  </div>`
      )
      .join("");
    container.innerHTML = html;
  } else if (page === "lines") {
    //API CALLING
    const dataSongs = getLinesSongs(path);
    const dataPlaylists = getLinesPlaylists(path);
    const dataAlbums = getLinesAlbums(path);
    const dataVideos = getLinesVideos(path);
    if (!dataSongs || !dataAlbums || !dataPlaylists || !dataVideos) return;
    else if (page === "lines") {
      //API CALLING
      const songsContainer = document.querySelector(".js-slug-songs");
      const playlistsContainer = document.querySelector(".js-slug-playlists");
      const albumsContainer = document.querySelector(".js-slug-albums");
      const videosContainer = document.querySelector(".js-slug-videos");
      const dataSongs = await getLinesSongs(path);
      const dataPlaylists = await getLinesPlaylists(path);
      const dataAlbums = await getLinesAlbums(path);
      const dataVideos = await getLinesVideos(path);
      if (!dataSongs || !dataAlbums || !dataPlaylists || !dataVideos) return;
      //RENDER SONGS
      const songsHtml = `<div class="js-slug-section w-[90%]">
                          <div class="js-title flex justify-between items-center">
                            <a class="title text-2xl font-bold">Songs</a>
                            <div class="js-active-btn flex items-center gap-5">
                              <div class="js-previous-btn-wrapper w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                                <i class="fa-solid fa-angle-left"></i>
                              </div>
                              <div class="js-next-btn-wrapper w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                                <i class="fa-solid fa-angle-right"></i>
                              </div>
                            </div>    
                          </div>
                          <div class="js-slug-content flex flex-col gap-6 h-[280px] mt-5 overflow-x-hidden hover:overflow-x-scroll flex-wrap">
                            ${dataSongs.items
                              .map(
                                (item) => `
                                <a href="/player/${item.id}">
                                  <div class="playlist-card flex cursor-pointer gap-5">
                                    <div class="rounded-xl overflow-hidden">
                                      <div class="relative group w-[120px]">
                                        <img src="${item.thumb}" class="w-full h-full">
                                        <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition duration-300"></div>
                                        <i class="fa-solid fa-play absolute text-5xl text-white opacity-0 group-hover:opacity-100 transition duration-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                                      </div>
                                    </div>
                                    <div class="flex flex-col">
                                      <p class="mt-3 text-white font-bold">${item.name}</p>
                                      <p class="text-gray-400">${item.albumName} · ${item.views} Views</p>
                                    </div>
                                  </div>
                                </a>
                                `
                              )
                              .join("")}
                          </div>
                        </div>`;
      songsContainer.innerHTML = songsHtml;
      //RENDER PLAYLISTS
      const playlistsHtml = `<div class="js-slug-section w-[90%]">
                            <div class="js-title flex justify-between items-center">
                              <a class="title text-2xl font-bold">Playlists</a>
                                <div class="js-active-btn flex items-center gap-5">
                                  <div class="js-previous-btn-wrapper w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                                    <i class="fa-solid fa-angle-left"></i>
                                  </div>
                                  <div class="js-next-btn-wrapper w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                                    <i class="fa-solid fa-angle-right"></i>
                                  </div>
                                </div>    
                              </div>
                              <div class="js-slug-content flex flex-col columns-3 gap-6 w-full h-[460px] mt-5 overflow-x-hidden hover:overflow-x-scroll flex-wrap">
                                  ${dataPlaylists.items
                                    .map(
                                      (item) => `
                                <div class="playlist-card flex flex-col cursor-pointer gap-5 w-[190px]">
                                  <div class="rounded-xl overflow-hidden">
                                   <div class="relative group w-full">
                                    <img src="${item.thumb}" class="w-full h-full">
                                     <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition duration-300"></div>
                                      <i class="fa-solid fa-play absolute text-5xl text-white opacity-0 group-hover:opacity-100 transition duration-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                                     </div>
                                   </div>
                                   <div class="flex flex-col">
                                     <p class="mt-0 text-white font-bold">${item.name}</p>
                                      <p class="text-gray-400">${item.artists[0]}</p>
                                  </div>
                               </div>
                                        `
                                    )
                                    .join("")}
                             </div>
                        </div>`;
      playlistsContainer.innerHTML = playlistsHtml;
      //RENDER ALBUMS
      const albumsHtml = `<div class="js-slug-section w-[90%]">
                            <div class="js-title flex justify-between items-center">
                              <a class="title text-2xl font-bold">Albums</a>
                                <div class="js-active-btn flex items-center gap-5">
                                  <div class="js-previous-btn-wrapper w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                                    <i class="fa-solid fa-angle-left"></i>
                                  </div>
                                  <div class="js-next-btn-wrapper w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                                    <i class="fa-solid fa-angle-right"></i>
                                  </div>
                                </div>    
                              </div>
                              <div class="js-slug-content flex flex-col columns-3 gap-6 w-full h-[590px] mt-5 overflow-x-hidden hover:overflow-x-scroll flex-wrap">
                                  ${dataAlbums.items
                                    .map(
                                      (item) => `
                                <div class="playlist-card flex flex-col cursor-pointer gap-5 w-[190px]">
                                  <div class="rounded-xl overflow-hidden">
                                   <div class="relative group w-full">
                                    <img src="${item.thumb}" class="w-full h-full">
                                     <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition duration-300"></div>
                                      <i class="fa-solid fa-play absolute text-5xl text-white opacity-0 group-hover:opacity-100 transition duration-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                                     </div>
                                   </div>
                                   <div class="flex flex-col">
                                     <p class="mt-0 text-white font-bold">${item.name}</p>
                                      <p class="text-gray-400">${item.albumType}</p>
                                  </div>
                               </div>
                                        `
                                    )
                                    .join("")}
                             </div>
                        </div>`;
      albumsContainer.innerHTML = albumsHtml;
      //RENDER VIDEOS
      const videosHtml = `<div class="js-slug-section w-[90%]">
                            <div class="js-title flex justify-between items-center">
                              <a class="title text-2xl font-bold">Music videos</a>
                                <div class="js-active-btn flex items-center gap-5">
                                  <div class="js-previous-btn-wrapper w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                                    <i class="fa-solid fa-angle-left"></i>
                                  </div>
                                  <div class="js-next-btn-wrapper w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                                    <i class="fa-solid fa-angle-right"></i>
                                  </div>
                                </div>    
                              </div>
                              <div class="js-slug-content flex flex-col columns-3 gap-6 w-full h-[280px] mt-5 overflow-x-hidden hover:overflow-x-scroll flex-wrap">
                                  ${dataVideos.items
                                    .map(
                                      (item) => `
                                <div class="playlist-card flex flex-col cursor-pointer gap-3">
                                  <div class="rounded-xl overflow-hidden">
                                   <div class="relative group w-80">
                                    <img src="${
                                      item.thumb
                                    }" class="w-full h-full">
                                     <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition duration-300"></div>
                                      <i class="fa-solid fa-play absolute text-5xl text-white opacity-0 group-hover:opacity-100 transition duration-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                                     </div>
                                   </div>
                                   <div class="flex flex-col">
                                     <p class="mt-0 text-white font-bold text-xl">${
                                       item.name
                                     }</p>
                                      <p class="text-gray-400"> ${
                                        (item.views / 1000000).toFixed(0) + 1
                                      }M Views</p>
                                  </div>
                               </div>
                                        `
                                    )
                                    .join("")}
                             </div>
                        </div>`;
      videosContainer.innerHTML = videosHtml;
    }
  }
};

//RENDER SLUG PLAYLIST
export const renderPageSlugPlaylists = async () => {
  const slug = location.href.split("/").at(-1);
  const page = location.href.split("/").at(-2);
  const path = `/${page}/${slug}`;
  if (page === "categories") {
    const containers = document.querySelectorAll(".js-slug-playlist");
    const data = await getSlug(path);
    if (!data) return;
    data.subcategories.forEach((category, index) => {
      const container = containers[index];
      if (!container) return;
      const html = category.playlists
        .map(
          (video) => `
        <a href="/player/${video.slug}" class="flex flex-col cursor-pointer w-50">
          <div class="rounded-xl overflow-hidden cursor-pointer">
            <div class="relative flex justify-center items-center group">
              <img src="${video.thumbnails[0]}">
              <div class="overlay absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition duration-300"></div>
              <i class="fa-solid fa-play absolute text-6xl text-white"></i>
            </div>
          </div>
          <p class="mt-3">${video.title}</p>
          <p class="text-[#b6b4b4]">Playlist · YouTube Music</p>
        </a>`
        )
        .join("");
      container.innerHTML = html;
    });
  }
};

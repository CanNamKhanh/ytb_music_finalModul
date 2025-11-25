import { getNewRelease } from "../utils/httpRequest";

const newRelease = () => {
  return `<div class="js-new-release-page text-white mt-[65px] ml-50">
                <div class="js-new-releases-section w-[90%] mt-25">
                    <div class="js-title flex justify-between items-center">
                        <a class="font-bold text-4xl hover:underline cursor-pointer">New releases</a>
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
                    <div class="js-new-releases-list flex flex-col w-full flex-wrap gap-6 h-[280px] mt-5 columns-4 overflow-x-hidden hover:overflow-x-scroll"></div>
                </div>
                <div class="js-new-music-vid-section w-[90%] mt-25">
                    <div class="js-title flex justify-between items-center">
                        <a class="font-bold text-4xl hover:underline cursor-pointer">New music videos</a>
                        <div class="js-active-btn flex items-center gap-5">
                            <button class="px-3 py-1 border-gray-500 rounded-full border cursor-pointer hover:bg-gray-500">More</button>
                            <div class="js-previous-btn-wrapper-2 w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                                <i class="fa-solid fa-angle-left"></i>
                            </div>
                            <div class="js-next-btn-wrapper-2 w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                                <i class="fa-solid fa-angle-right"></i>
                            </div>
                        </div>    
                    </div>
                    <div class="js-new-music-vid-list-section flex flex-col w-full flex-wrap gap-6 h-[280px] mt-5 columns-4 overflow-x-hidden hover:overflow-x-scroll"></div>
                </div>
          </div>`;
};
export default newRelease;

//RENDER NEW RELEASES
export const renderNewRelease = async () => {
  const container = document.querySelector(".js-new-releases-list");
  if (!container) return;
  const data = await getNewRelease();

  const html = data.items
    .map((item) => {
      return `<a href="/player/${item.id}">
                <div class="flex flex-col w-[155px]">
                          <div class="rounded-xl overflow-hidden cursor-pointer">
                              <div class="relative group block">
                                  <img src="${item.thumb}" class="w-full h-full object-cover">
                                  <div class="overlay absolute inset-0 bg-black opacity-0 
                                              group-hover:opacity-40 transition duration-300"></div>
                                  <div class="wrapper absolute bottom-3 right-3 rounded-full bg-[#000000] opacity-50 w-10 h-10 flex justify-center items-center scale-100 transition duration-200 hover:scale-125 hover:opacity-100">
                                      <i class="fa-solid fa-play text-xl text-white"></i>
                                  </div>
                              </div>
                          </div>
                          <p class="mt-2 text-xl cursor-pointer hover:underline">${item.name}</p>
                          <p class="text-[#b6b4b4]">
                              ${item.albumType} ● ${item.popularity} 
                              <i class="fa-solid fa-user"></i>
                          </p>
                      </div>
                </a>`;
    })
    .join("");
  container.innerHTML = html;
};

//RENDER NEW VIDEO MUSIC
export const renderNewMusicVid = async () => {
  const container = document.querySelector(".js-new-music-vid-list-section");
  if (!container) return;
  const data = await getNewMusicVideo();
  const html = data.items
    .map((item) => {
      return `<div class="flex flex-col">
                <div class="rounded-xl overflow-hidden">
                    <a class="relative flex justify-center items-center group" href="https://www.youtube.com/watch?v=${
                      item.videoId
                    }"><img src="${item.thumb}">
                    <div class="overlay absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition duration-300"></div>
                    <i class="fa-solid fa-play absolute text-6xl text-white"></i>
                    </a>
                </div>
                <p class="mt-2">${item.name}</p>
                <p class="text-[#b6b4b4]">${
                  (item.views / 1000).toFixed(0) + 1
                }K views</p>
            </div>`;
    })
    .join("");
  container.innerHTML = html;
};

//ARROW ACTION 2
export const arrowAction2 = () => {
  const nextBtn = document.querySelector(".js-next-btn-wrapper-2");
  const prevBtn = document.querySelector(".js-previous-btn-wrapper-2");

  if (!nextBtn || !prevBtn) return;

  nextBtn.addEventListener("click", () => {
    const box2 = document.querySelector(".js-new-music-vid-list-section");
    box2.scrollBy({ left: 330, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    const box2 = document.querySelector(".js-new-music-vid-list-section");
    box2.scrollBy({ left: -330, behavior: "smooth" });
  });
};

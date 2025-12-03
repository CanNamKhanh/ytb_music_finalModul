import { getMoodAndGenres, getNewMusicVideo } from "../utils/httpRequest";

const Explore = () => {
  return `<div class="explore-page text-white mt-[65px] ml-50">
                <div class="flex gap-4 h-[8vh]">
                    <a href="/explore/new-release" class="flex items-center gap-3 px-6 py-3 bg-[#282828] hover:bg-gray-600 rounded-lg transition-colors duration-200 cursor-pointer w-[30%]">
                        <i class="fas fa-circle text-gray-300 text-xl"></i>
                        <span class="text-gray-200 font-medium text-2xl">New releases</span>
                    </a>
                    <a href="/explore/chart" class="flex items-center gap-3 px-6 py-3 bg-[#282828] hover:bg-gray-600 rounded-lg transition-colors duration-200 cursor-pointer w-[30%]">
                        <i class="fas fa-arrow-trend-up text-gray-300 text-xl"></i>
                        <span class="text-gray-200 font-medium text-2xl">Charts</span>
                    </a>
                    <a href="/explore/moods_and_genres" class="flex items-center gap-3 px-6 py-3 bg-[#282828] hover:bg-gray-600 rounded-lg transition-colors duration-200 cursor-pointer w-[30%]">
                        <i class="fas fa-face-smile text-gray-300 text-xl"></i>
                        <span class="text-gray-200 font-medium text-2xl">Moods & genres</span>
                    </a>
                </div>
                <div class="js-mood-genres-section w-[90%] mt-25">
                    <div class="js-title flex justify-between items-center">
                        <a href="/explore/moods_and_genres" class="font-bold text-4xl hover:underline cursor-pointer">Moods & genres</a>
                        <div class="js-active-btn flex items-center gap-5">
                            <a href="/explore/moods_and_genres" class="px-3 py-1 border-gray-500 rounded-full border cursor-pointer hover:bg-gray-500">More</a>
                            <div class="js-previous-btn-wrapper-1 w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                                <i class="fa-solid fa-angle-left"></i>
                            </div>
                            <div class="js-next-btn-wrapper-1 w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                                <i class="fa-solid fa-angle-right"></i>
                            </div>
                        </div>    
                    </div>
                    <div class="js-mood-genres-page-part flex flex-col w-full flex-wrap gap-6 h-[280px] mt-5 columns-4 overflow-x-hidden hover:overflow-x-scroll"></div>
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
                    <div class="js-new-music-vid-list-section-2 flex flex-col w-full flex-wrap gap-6 h-[280px] mt-5 columns-4 overflow-x-hidden hover:overflow-x-scroll"></div>
                </div>
          </div>`;
};
export default Explore;

//RENDER PAGE PART
export const renderPagePart = async () => {
  const container = document.querySelector(".js-mood-genres-page-part");
  if (!container) return;
  const data = await getMoodAndGenres();
  if (!data) return;
  const htmlCategories = data.categories
    .map(
      (item) => `
        <a href="/categories/${item.slug}"
          class="bg-[#1b1b1b] text-white rounded-lg px-4 py-3 flex items-center text-[15px] font-medium cursor-pointer hover:bg-gray-500 w-[20%] h-12"
          style="border-left: 6px solid ${item.color};"
        >
          ${item.name}
        </a>
      `
    )
    .join("");
  const htmlLines = data.lines
    .map(
      (item) => `
        <a  href="/lines/${item.slug}"
          class="bg-[#1b1b1b] text-white rounded-lg px-4 py-3 flex items-center text-[15px] font-medium cursor-pointer hover:bg-gray-500 w-[20%]"
          style="border-left: 6px solid ${item.color};"
        >
          ${item.name}
        </a>
      `
    )
    .join("");
  container.innerHTML = htmlCategories + htmlLines;
};
renderPagePart();

//RENDER NEW VIDEO MUSIC
export const renderNewMusicVid = async () => {
  const container = document.querySelector(".js-new-music-vid-list-section-2");
  if (!container) return;
  const data = await getNewMusicVideo();
  console.log(data);

  const html = data.items
    .map((item) => {
      return `<a href="/player/${item.id}">
                <div class="flex flex-col">
                          <div class="rounded-xl overflow-hidden">
                              <div class="relative flex justify-center items-center group" href="https://www.youtube.com/watch?v=${
                                item.videoId
                              }"><img src="${item.thumb}">
                              <div class="overlay absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition duration-300"></div>
                              <i class="fa-solid fa-play absolute text-6xl text-white"></i>
                              </div>
                          </div>
                          <p class="mt-2">${item.name}</p>
                          <p class="text-[#b6b4b4]">${
                            (item.views / 1000).toFixed(0) + 1
                          }K views</p>
                      </div>
                </a>`;
    })
    .join("");
  container.innerHTML = html;
};

//ARROW ACTION 1
export const arrowAction1 = () => {
  const nextBtn = document.querySelector(".js-next-btn-wrapper-1");
  const prevBtn = document.querySelector(".js-previous-btn-wrapper-1");

  if (!nextBtn || !prevBtn) return;

  nextBtn.addEventListener("click", () => {
    const box1 = document.querySelector(".js-mood-genres-page-part");
    const box2 = document.querySelector(".js-new-music-vid-list-section");
    box1.scrollBy({ left: 1000, behavior: "smooth" });
    box2.scrollBy({ left: 300, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    const box1 = document.querySelector(".js-mood-genres-page-part");
    const box2 = document.querySelector(".js-new-music-vid-list-section");
    box1.scrollBy({ left: -1000, behavior: "smooth" });
    box2.scrollBy({ left: -300, behavior: "smooth" });
  });
};

//ARROW ACTION 2
export const arrowAction2 = () => {
  const nextBtn = document.querySelector(".js-next-btn-wrapper-2");
  const prevBtn = document.querySelector(".js-previous-btn-wrapper-2");

  if (!nextBtn || !prevBtn) return;

  nextBtn.addEventListener("click", () => {
    const box2 = document.querySelector(".js-new-music-vid-list-section-2");
    box2.scrollBy({ left: 330, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    const box2 = document.querySelector(".js-new-music-vid-list-section-2");
    box2.scrollBy({ left: -330, behavior: "smooth" });
  });
};

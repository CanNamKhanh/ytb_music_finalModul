import {
  getAlbumForYou,
  getMood,
  getQuickPick,
  getTodayHits,
} from "../utils/httpRequest";

const Home = () => {
  return `<div class="js-home-section w-[92%]">
            <div class="js-mood-section flex gap-3 text-white mt-25 ml-50"></div>
            <div class="js-quick-pick-section flex flex-col text-white mt-15 ml-50">
              <div class="js-header flex items-center justify-between">
                <div class="text-4xl font-bold">Quick picks</div>
                  <div class="js-active-btn flex items-center gap-5">
                    <a href="/explore/moods_and_genres" class="px-3 py-1 border-gray-500 rounded-full border cursor-pointer hover:bg-gray-500">More</a>
                      <div class="js-previous-btn-wrapper w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                        <i class="fa-solid fa-angle-left"></i>
                      </div>
                    <div class="js-next-btn-wrapper w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                      <i class="fa-solid fa-angle-right"></i>
                    </div>
                  </div>
                </div>
                <div class="js-quick-pick-list flex flex-col gap-3 mt-5 h-[260px] overflow-x-hidden hover:overflow-x-scroll"></div>  
              </div>
            <div class="js-album-for-u-section flex flex-col text-white mt-15 ml-50">
              <div class="js-header flex items-center justify-between">
              <div class="text-4xl font-bold">Albums for you</div>
                <div class="js-active-btn flex items-center gap-5">
                    <div class="js-previous-btn-wrapper-2 w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                      <i class="fa-solid fa-angle-left"></i>
                    </div>
                  <div class="js-next-btn-wrapper-2 w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                     <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>  
              </div>
               <div class="js-albums-for-you-list flex gap-5 mt-5 h-80 overflow-hidden hover:overflow-x-scroll"></div>  
            </div>
            <div class="js-today-hit-section flex flex-col text-white mt-15 ml-50">
              <div class="js-header flex items-center justify-between">
                <div class="text-4xl font-bold">Today's hits</div>
                  <div class="js-active-btn flex items-center gap-5">
                      <div class="js-previous-btn-wrapper-3 w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                        <i class="fa-solid fa-angle-left"></i>
                      </div>
                    <div class="js-next-btn-wrapper-3 w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                      <i class="fa-solid fa-angle-right"></i>
                    </div>
                  </div>  
              </div>
               <div class="js-today-hits-list flex gap-5 mt-5 h-55 overflow-hidden hover:overflow-x-scroll"></div>  
            </div>
          </div>`;
};

export default Home;

export const renderHome = async () => {
  //RENDER MOODS
  const moodData = await getMood();
  // console.log(data);
  const moodContainer = document.querySelector(".js-mood-section");
  const moodHtml = moodData.items
    .map((item) => {
      return `<a class="js-mood-list px-3 py-2 bg-[#434549] rounded-[7px] cursor-pointer hover:bg-[#696d75]">${item.name}</a>`;
    })
    .join("");
  moodContainer.innerHTML = moodHtml;

  //RENDER QUICK PICK
  const quickPickData = await getQuickPick();
  const quickPickContainer = document.querySelector(".js-quick-pick-list");
  // console.log(quickPickData);
  const quickPickHtml = quickPickData
    .map((item) => {
      return `<a href="/player/${item.slug}" class="flex gap-3 cursor-pointer group">
                <div class="relative w-20 h-12">
                    <img src="${item.thumbnails[0]}" class="w-20 h-12 rounded-xl">
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-xl">
                        <i class="fa-solid fa-play text-white text-2xl"></i>
                    </div>
                </div>
                <div class="js-picks-des">
                    <p class="text-[18px] font-semibold">${item.title}</p>
                    <p class="text-[#a3a8b1]">${item.artists} • ${item.popularity} plays</p>
                </div>
            </a>`;
    })
    .join("");
  quickPickContainer.innerHTML = quickPickHtml;

  //RENDER ALBUMS FOR YOU
  const albumsForYouData = await getAlbumForYou();
  const albumsForYouContainer = document.querySelector(
    ".js-albums-for-you-list"
  );
  // console.log(albumsForYouData);
  const albumsForYouHtml = albumsForYouData
    .map((item) => {
      return `<a href="/player/${item.slug}">
                <div class="flex flex-col w-[190px] shrink-0">
                          <div class="rounded-xl overflow-hidden cursor-pointer">
                              <div class="relative group block">
                                  <img src="${item.thumbnails[0]}" class="w-full h-full object-cover">
                                  <div class="overlay absolute inset-0 bg-black opacity-0 
                                              group-hover:opacity-40 transition duration-300"></div>
                                  <div class="wrapper absolute bottom-3 right-3 rounded-full bg-[#000000] opacity-50 w-10 h-10 flex justify-center items-center scale-100 transition duration-200 hover:scale-125 hover:opacity-100">
                                      <i class="fa-solid fa-play text-xl text-white"></i>
                                  </div>
                              </div>
                          </div>
                          <p class="mt-2 text-[18px] cursor-pointer hover:underline">${item.title}</p>
                          <p class="text-[#b6b4b4]">
                              ${item.artists} ● ${item.popularity} 
                              <i class="fa-solid fa-user"></i>
                          </p>
                      </div>
                </a>`;
    })
    .join("");
  albumsForYouContainer.innerHTML = albumsForYouHtml;

  //RENDER TODAY'S HITS
  const todayHitsData = await getTodayHits();
  const todayHitsContainer = document.querySelector(".js-today-hits-list");
  // console.log(todayHitsData);
  const todayHitsHtml = todayHitsData
    .map((item) => {
      return `<a href="/player/${item.slug}">
                <div class="flex flex-col w-[190px] shrink-0">
                          <div class="rounded-xl overflow-hidden cursor-pointer">
                              <div class="relative group block">
                                  <img src="${item.thumbnails[0]}" class="w-full h-full object-cover">
                                  <div class="overlay absolute inset-0 bg-black opacity-0 
                                              group-hover:opacity-40 transition duration-300"></div>
                                  <div class="wrapper absolute bottom-3 right-3 rounded-full bg-[#000000] opacity-50 w-10 h-10 flex justify-center items-center scale-100 transition duration-200 hover:scale-125 hover:opacity-100">
                                      <i class="fa-solid fa-play text-xl text-white"></i>
                                  </div>
                              </div>
                          </div>
                          <p class="mt-2 text-[18px] cursor-pointer hover:underline">${item.title}</p>
                          <p class="text-[#b6b4b4]">
                              ${item.artists} ● ${item.popularity} 
                              <i class="fa-solid fa-user"></i>
                          </p>
                      </div>
                </a>`;
    })
    .join("");
  todayHitsContainer.innerHTML = todayHitsHtml;
};

//ARROW ACTION 1
export const arrowActionHomePage = () => {
  const nextBtn = document.querySelector(".js-next-btn-wrapper-2");
  const prevBtn = document.querySelector(".js-previous-btn-wrapper-2");

  if (!nextBtn || !prevBtn) return;

  nextBtn.addEventListener("click", () => {
    const box = document.querySelector(".js-albums-for-you-list");
    box.scrollBy({ left: 1000, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    const box = document.querySelector(".js-albums-for-you-list");
    box.scrollBy({ left: -1000, behavior: "smooth" });
  });
};

//ARROW ACTION 2
export const arrowActionHomePage2 = () => {
  const nextBtn = document.querySelector(".js-next-btn-wrapper-3");
  const prevBtn = document.querySelector(".js-previous-btn-wrapper-3");

  if (!nextBtn || !prevBtn) return;

  nextBtn.addEventListener("click", () => {
    const box = document.querySelector(".js-today-hits-list");
    box.scrollBy({ left: 1000, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    const box = document.querySelector(".js-today-hits-list");
    box.scrollBy({ left: -1000, behavior: "smooth" });
  });
};

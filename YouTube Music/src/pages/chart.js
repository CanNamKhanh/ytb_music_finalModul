import { getArtists, getCountry, getVidCharts } from "../utils/httpRequest";

const Chart = () => {
  return `<div class="js-charts-page text-white mt-[65px] ml-50 h-[1000px]">
              <div class="js-new-releases-section w-[90%] mt-25">
                <div class="js-title flex justify-between items-center">
                  <a class="font-bold text-4xl hover:underline cursor-pointer">Charts</a>   
                </div>
              <div class="js-select-country"></div>
              </div>
              <div class="js-new-releases-section w-[90%] mt-25">
                  <div class="js-title flex justify-between items-center">                        
                  <a class="font-bold text-2xl">Video charts</a>
                  </div>
                  <div class="js-vid-charts-list flex w-full flex-wrap gap-6 mt-5"></div>
              </div>
              <div class="js-mood-genres-section w-[90%] mt-25">
                    <div class="js-title flex justify-between items-center">
                        <a class="font-bold text-2xl">Top artists</a>
                        <div class="js-active-btn flex items-center gap-5">
                            <div class="js-previous-btn-wrapper w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                                <i class="fa-solid fa-angle-left"></i>
                            </div>
                            <div class="js-next-btn-wrapper w-8 h-8 border border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500">
                                <i class="fa-solid fa-angle-right"></i>
                            </div>
                        </div>    
                    </div>
                    <div class="js-top-artists-list flex flex-col w-full flex-wrap gap-6 mt-5"></div>
                </div>
          </div>`;
};
export default Chart;

//RENDER SELECT COUNTRY
export const renderSelectCoutry = async () => {
  const container = document.querySelector(".js-select-country");
  if (!container) return;

  const data = await getCountry();

  //RENDER SELECT
  const html = `<select id="country" class="mySelect bg-[#1b1b1b] text-white px-4 py-2 rounded-full border border-gray-700 cursor-pointer w-30 mt-5">
      ${data.countries
        .map(
          (item) =>
            `<option value="${item.code}" class="bg-[#1b1b1b] cursor-pointer">
                ${item.name}
            </option>`
        )
        .join("")}
                </select>`;
  container.innerHTML = html;
  const select = document.querySelector(".mySelect");
  renderVidCharts(select.value);
  renderTopArtists(select.value);
  select.addEventListener("change", () => {
    renderVidCharts(select.value);
    renderTopArtists(select.value);
  });
};

//RENDER VIDEO CHARTS
export const renderVidCharts = async (countryCode) => {
  const container = document.querySelector(".js-vid-charts-list");
  if (!container) return;
  const data = await getVidCharts(countryCode);
  const html = data.items
    .map((item) => {
      return `<div class="flex flex-col w-[180px]">
                <div class="relative rounded-xl overflow-hidden cursor-pointer group h-30">
                    <a href="https://www.youtube.com/watch?v=${item.videoId}">
                        <img src="${item.thumb}" 
                            class="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                    </a>
                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300"></div>
                    <div class="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition duration-200">
                        <i class="fa-solid fa-play text-white text-lg"></i>
                    </div>
                </div>
                <p class="mt-3 font-medium text-[15px] text-white truncate hover:underline cursor-pointer">
                    ${item.title}
                </p>
                <p class="text-[#b6b4b4] text-[14px]">
                    ${(item.views / 1000).toFixed(0)}K views
                </p>
              </div>`;
    })
    .join("");

  container.innerHTML = html;
};

//RENDER TOP ARTISTS
export const renderTopArtists = async (countryCode) => {
  const container = document.querySelector(".js-top-artists-list");
  if (!container) return;
  const data = await getArtists(countryCode);
  // console.log(data);
  const html = data.items
    .map((item) => {
      return `<a class="flex gap-5 items-center cursor-pointer">
                <img src="https://i.imgflip.com/g92vw.jpg?a489648" class="js-avt w-15 h-15 rounded-full">
                ${checkTrend(item.trend)}
                <p>${item.rank}</p>
                <div class="js-artist-des flex flex-col">
                  <p class="name font-bold text-xl">${item.name}</p>  
                  <p class="subs text-[#b6b4b4]">${(
                    item.totalViews / 1000000
                  ).toFixed(1)}M subscribers</p>  
                </div>
              </a>`;
    })
    .join("");

  container.innerHTML = html;
};

//CHECK ARTISTS TREND
const checkTrend = (artistTrend) => {
  if (artistTrend === "down") {
    return `<i class="fa-solid fa-sort-down text-red-500"></i>`;
  } else if (artistTrend === "up") {
    return `<i class="fa-solid fa-sort-up text-green-500"></i>`;
  }
  return `<p class="ml-2 mr-1">●</p>`;
};

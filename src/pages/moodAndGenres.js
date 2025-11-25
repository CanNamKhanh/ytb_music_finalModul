import { getCate, getLine, getMoodAndGenres } from "../utils/httpRequest";

const MoodAndGenres = () => {
  return `<div class="explore-page text-white mt-[65px] ml-50 w-[90%]">
            <h1 class="text-gray-200 font-bold text-4xl">Moods & genres</h1>
            <div class="js-title font-bold text-2xl mt-5">Mood & momments</div>
            <div class="js-mood-momments flex flex-wrap mt-5 gap-5"></div>
            <div class="js-title font-bold text-2xl mt-20">Genres</div>
            <div class="js-genres flex flex-wrap mt-5 gap-5"></div>
          </div>`;
};
export default MoodAndGenres;

//RENDER PAGE PART
export const renderPagePart1 = async () => {
  const container = document.querySelector(".js-mood-momments");
  if (!container) return;
  const data = await getCate();
  if (!data) return;
  const html = data.items
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
  container.innerHTML = html;
};

export const renderPagePart2 = async () => {
  const container = document.querySelector(".js-genres");
  if (!container) return;
  const data = await getLine();
  if (!data) return;
  const html = data.items
    .map(
      (item) => `
        <a href="/lines/${item.slug}"
          class="bg-[#1b1b1b] text-white rounded-lg px-4 py-3 flex items-center text-[15px] font-medium cursor-pointer hover:bg-gray-500 w-[20%] h-12"
          style="border-left: 6px solid ${item.color};"
        >
          ${item.name}
        </a>
      `
    )
    .join("");
  container.innerHTML = html;
};

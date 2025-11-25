const Header = () => {
  return `<div class="js-header border flex top-0 items-center bg-black h-[65px] justify-between border-b-gray-500 fixed w-full z-9999999">
            <div class="ytbMusic-service flex items-center gap-6 ml-5">
                <div class="wrapper rounded-full w-10 h-10 flex justify-center items-center hover:bg-[#2f2e2e] cursor-pointer">
                    <i class="fa-solid fa-bars text-white cursor-pointer text-xl"></i>
                </div>
                <a href="/">
                  <img class="logo style-scope ytmusic-logo cursor-pointer" alt="" src="//music.youtube.com/img/on_platform_logo_dark.svg">
                </a>
                <div class="js-search ml-3 border border-gray-400 rounded-[7px] w-[480px] h-10 bg-[#3a3939] items-center flex hover:text-white flex-col">
                    <div class="js-input">
                        <i class="fa-solid fa-magnifying-glass py-[11px] mx-3 cursor-pointer text-gray-400" title="Initiate search"></i>
                        <input type="text" placeholder="Search songs, albums, artists, podcast" class="w-[380px] placeholder-gray-400 h-9 outline-none text-white!">
                        <i class="fa-solid fa-x mx-3 cursor-pointer text-gray-400 text-[11px] opacity-0"></i>
                    </div>
                </div>
            </div>
            <div class="auth-service text-white flex justify-center items-center gap-3 mr-30">
                <i class="fa-brands fa-chromecast text-gray-200 cursor-pointer text-2xl" title="Connect to a device"></i>
                <i class="fa-solid fa-ellipsis-vertical cursor-pointer text-xl" title="Setting"></i>
                <button class="text-black bg-white rounded-full px-4 py-1 cursor-pointer font-medium text-[15px]">Log in</button>
                <div class="user-avt rounded-full border w-8 h-8 cursor-pointer hidden"></div>
            </div>
        </div>`;
};
export default Header;

export const renderHeader = () => {
  const headerEl = document.querySelector(".js-header");
  const delBtn = headerEl.querySelector(".fa-x");
  const inputEl = headerEl.querySelector("input");
  const inputBoxEl = headerEl.querySelector(".js-search");
  const searchIcon = headerEl.querySelector(".fa-magnifying-glass");

  // Active Function
  const addDelBtn = () => {
    delBtn.classList.remove("opacity-0");
    delBtn.classList.add("opacity-100");
  };
  const removeDelBtn = () => {
    delBtn.classList.add("opacity-0");
    delBtn.classList.remove("opacity-100");
  };

  //Update UI
  const updateUI = () => {
    const hasText = inputEl.value.trim() !== "";
    if (hasText || document.activeElement === inputEl) {
      inputBoxEl.classList.add("bg-black");
      searchIcon.classList.replace("text-gray-300", "text-white");
      addDelBtn();
    } else {
      inputBoxEl.classList.remove("bg-black");
      searchIcon.classList.replace("text-white", "text-gray-300");
      removeDelBtn();
    }
  };

  //Add Events
  inputEl.addEventListener("input", updateUI);
  inputEl.addEventListener("focus", (e) => {
    const hasText = inputEl.value.trim() !== "";
    if (hasText || document.activeElement === inputEl) {
      inputBoxEl.classList.add("bg-black");
      searchIcon.classList.replace("text-gray-300", "text-white");
    } else {
      inputBoxEl.classList.remove("bg-black");
      searchIcon.classList.replace("text-white", "text-gray-300");
    }
  });
  inputEl.addEventListener("blur", (e) => {
    inputBoxEl.classList.remove("bg-black");
    searchIcon.classList.replace("text-white", "text-gray-300");
  });

  delBtn.addEventListener("click", () => {
    inputEl.value = "";
    updateUI();
  });
};

// Scroll Border
window.addEventListener("scroll", () => {
  const header = document.querySelector(".js-header");

  if (window.scrollY > 0) {
    header.classList.add("border-b-gray-500");
  } else {
    header.classList.remove("border-b-gray-500");
  }
});

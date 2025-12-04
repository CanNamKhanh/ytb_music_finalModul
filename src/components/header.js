import { getProfile, getSearchSuggestion, logout } from "../utils/httpRequest";

const Header = () => {
  return `<div class="js-header border flex top-0 items-center bg-black h-[65px] justify-between border-b-gray-500 fixed w-full z-9999999">
            <div class="ytbMusic-service flex items-start gap-6 ml-5">
              <div class="js-icon flex items-center gap-3">
                <div class="wrapper rounded-full w-10 h-10 flex justify-center items-center hover:bg-[#2f2e2e] cursor-pointer">
                    <i class="fa-solid fa-bars text-white cursor-pointer text-xl"></i>
                </div>
                <a href="/" data-navigo>
                    <img class="logo style-scope ytmusic-logo cursor-pointer" alt="" src="//music.youtube.com/img/on_platform_logo_dark.svg">
                </a>
              </div>
                <div class="js-search ml-10 left-40 border border-gray-400 rounded-[7px] w-[480px] fixed bg-[#3a3939] items-center flex hover:text-white flex-col">
                    <div class="js-input border-b border-b-gray-500">
                        <i class="fa-solid fa-magnifying-glass py-[11px] mx-3 cursor-pointer text-gray-400" title="Initiate search"></i>
                        <input type="text" placeholder="Search songs, albums, artists, podcast" class="w-[380px] placeholder-gray-400 h-9 outline-none text-white!">
                        <i class="fa-solid fa-x mx-3 cursor-pointer text-gray-400 text-[11px] opacity-0"></i>
                    </div>
                    
                    <div class="js-search-suggest bg-black text-white w-full">
                      
                    </div>
                </div>
            </div>
            <div class="auth-service text-white flex justify-center items-center gap-3 mr-30">
                <i class="fa-brands fa-chromecast text-gray-200 cursor-pointer text-2xl" title="Connect to a device"></i>
                <i class="fa-solid fa-ellipsis-vertical js-more-btn cursor-pointer text-xl" title="Setting"></i>
                <a href="/login" class="js-login" data-navigo>
                  <div class="text-black bg-white rounded-full px-4 py-1 cursor-pointer font-medium text-[15px]">Log in</div>
                </a>
                <div class="js-user-avt rounded-full w-10 h-10 cursor-pointer hidden">
                  <img src="https://i.imgflip.com/g92vw.jpg?a489648" class="w-15 h-10 rounded-full" alt="Avata">  
                </div>
            </div>
            <div class="js-profile-menu w-70 h-50 text-white absolute rounded-2xl right-30 top-15 bg-[#2b2a2a] hidden"></div>
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
  inputEl.addEventListener("blur", () => {
    inputBoxEl.classList.remove("bg-black");
    searchIcon.classList.replace("text-white", "text-gray-300");
    // document.querySelector(".js-search-suggest").classList.add("hidden");
  });
  // inputBoxEl.addEventListener("blur", (e) => {
  //   document.querySelector(".js-search-suggest").classList.add("hidden");
  // });
  document.addEventListener("click", (e) => {
    if (!inputBoxEl.contains(e.target)) {
      document.querySelector(".js-search-suggest").classList.add("hidden");
      document.querySelector(".js-profile-menu").classList.add("hidden");
    }
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

// RENDER PROFILE
export const renderProfile = async () => {
  // getProfile();
  const loginBtn = document.querySelector(".js-login");
  const moreBtn = document.querySelector(".js-more-btn");

  if (localStorage.getItem("access_token")) {
    loginBtn.classList.add("hidden");
    moreBtn.classList.add("hidden!");
    renderAvt();
  }
};

// RENDER AVT
const renderAvt = () => {
  const userAvt = document.querySelector(".js-user-avt");
  userAvt.classList.remove("hidden");
  userAvt.classList.add("block");
  userAvt.addEventListener("click", async () => {
    const profileMenu = document.querySelector(".js-profile-menu");
    await renderProfileMenu();
    profileMenu.classList.toggle("hidden");

    // LOGOUT BTN
    const logoutBtn = document.querySelector(".js-logout-btn");
    logoutBtn.addEventListener("click", () => {
      logout();
    });
  });
  getProfile();
};

// RENDER PROFILE MENU
const renderProfileMenu = async () => {
  if (localStorage.getItem("access_token")) {
    getProfile();
    const data = await getProfile();
    // console.log(data);
    const profileMenu = document.querySelector(".js-profile-menu");
    profileMenu.innerHTML = `<div class="js-user-info flex gap-3 items-start p-3">
                              <div class="js-avt rounded-full w-12 h-12 cursor-pointer flex gap-3">
                                <img src="https://i.imgflip.com/g92vw.jpg?a489648" class="w-17 h-12 rounded-full" alt="Avata">  
                              </div>
                              <div class="email">
                                <div class="username font-bold text-[14px]">${data.name}</div>
                                <div class="user-email font-bold text-[14px] mb-2">${data.email}</div>
                                <a class="cursor-pointer text-blue-500 font-bold text-[14px]" data-navigo>Quản lý tài khoản của bạn</a>
                              </div>
                            </div>
                            <hr class="text-gray-500">
                            <a href="/user-info" class="js-logout cursor-pointer hover:bg-[#746d6d] p-3 flex items-center gap-3" data-navigo>
                              <i class="fa-regular fa-user text-white"></i>
                              <div data-navigo>Thông tin tài khoản</div>
                            </a>
                            <div class="js-logout-btn cursor-pointer hover:bg-[#746d6d] p-3 flex items-center gap-3 rounded-b-[10px]">
                              <i class="fa-solid fa-arrow-right-from-bracket text-white"></i>
                              <div data-navigo>Đăng xuất</div>
                            </div>
                           `;
  }
};

// DEBOUNCE
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// SEARCH
export const searchActive = async () => {
  const searchInputBox = document.querySelector(".js-input input");
  searchInputBox.addEventListener("focus", () => {
    document.querySelector(".js-search-suggest").classList.remove("hidden");
  });
  searchInputBox.addEventListener(
    "input",
    debounce(async (e) => {
      const searchInputValue = document
        .querySelector(".js-input input")
        .value.trim();
      // console.log(searchInputValue);
      const res = await getSearchSuggestion(searchInputValue);
      console.log(res);
      const searchSuggestion = document.querySelector(".js-search-suggest");

      searchSuggestion.addEventListener("click", (e) => {
        if (e.target.classList.contains("item")) {
          const content = e.target.textContent;
          // console.log(content);
          window.location.href = `/search/q=?${content}`;
        }
      });

      if (!searchInputValue) {
        searchSuggestion.innerHTML = "";
        return;
      }

      const html1 = res.suggestions
        .map((item) => {
          return `<a href="#" class="item block hover:bg-gray-900 cursor-pointer p-3 data-navigo">${item}</a>`;
        })
        .join("");

      const html2 = res.completed
        .map((item) => {
          return `<a href="/player/${checkSlugId(
            item
          )}" class="js-search-item bg-black" data-navigo>
                  <div class="mx-auto">
                      <div class="bg-black hover:bg-gray-900 p-3 cursor-pointer transition-all duration-200 relative">
                          <div class="flex items-start gap-3">
                              <div class="flex shrink-0 transition-opacity duration-200">
                                  <img src="${
                                    item.thumbnails[0]
                                  }" alt="Video thumbnail" class="h-10 w-10 rounded object-cover">
                              </div>
                              
                              <div class="flex-1 min-w-0">
                                  <h3 class="text-white text-sm font-medium line-clamp-1 mb-1">
                                      ${item.subtitle}. ${item.title} 
                                  </h3>
                                  <p class="text-gray-400 text-xs">
                                      ${item.type} • ${item.popularity} views
                                  </p>
                              </div>
                              
                              <div class="flex shrink-0 pt-1 transition-opacity duration-200">
                                  <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                      <circle cx="12" cy="12" r="2"/>
                                      <circle cx="12" cy="5" r="2"/>
                                      <circle cx="12" cy="19" r="2"/>
                                  </svg>
                              </div>
                          </div>
                      </div>
                  </div>
              </a>`;
        })
        .join("");
      searchSuggestion.innerHTML = html1 + html2;
    }, 400)
  );
};

const checkSlugId = (item) => {
  if (item.type === "song" && item.type === "video") {
    return item.id;
  } else {
    return item.slug;
  }
};

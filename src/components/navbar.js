const NavBar = () => {
  return `<div class="js-navbar bg-black w-19 flex left-0 top-[65px] flex-col gap-5 h-[90.6vh] items-center border-r-gray-500 border fixed z-999999">
            <div class="js-pages text-white mt-3 border-b border-b-gray-500 w-[90%]">
                <a href="/" data-navigo>
                  <div class="js-wrapper text-center cursor-pointer hover:bg-gray-500 rounded-[5px] p-3">
                      <i class="fa-solid fa-house text-2xl"></i>
                      <p class="text-[10px]">Home</p>
                  </div>
                </a>
                <a href="/explore" data-navigo>
                  <div class="js-wrapper text-center cursor-pointer hover:bg-gray-500 rounded-[5px] p-3">
                      <i class="fa-regular fa-compass text-2xl"></i>
                      <p class="text-[10px]">Explore</p>
                  </div>
                </a>
                <a href="/library" data-navigo>
                  <div class="js-wrapper text-center cursor-pointer hover:bg-gray-500 rounded-[5px] p-3">
                      <i class="fa-regular fa-bookmark text-2xl"></i>
                      <p class="text-[10px]">Library</p>
                  </div>
                </a>
                <a href="/upgrade" data-navigo>
                  <div class="js-wrapper text-center cursor-pointer hover:bg-gray-500 rounded-[5px] p-3">
                      <i class="fa-regular fa-circle-play text-2xl"></i>
                      <p class="text-[10px]">Upgrade</p>
                  </div>
                </a>
            </div>
            <div class="js-auth -mt-5 w-[90%]">
                <a href="/login" data-navigo>
                  <div class="js-wrapper js-login-icon text-white text-center cursor-pointer hover:bg-gray-500 rounded-[5px] p-4">
                      <i class="fa-solid fa-address-card text-2xl"></i>
                      <p class="text-[10px]">Log in</p>
                  </div>
                </a>
                <a href="/login" class="js-login-btn hidden">
                    <button class="rounded-[99999px] bg-[#363636] cursor-pointer w-full py-2 hover:bg-gray-500 text-white">Log in</button>
                    <p class="js-des text-gray-200 text-[12px] leading-6 mt-1">Sign in to create and share playlists, get personalized content recommendations, and more.</p>
                </a>
            </div>
        </div>`;
};

export default NavBar;

export const renderProfileNavbar = async () => {
  const loginBtn = document.querySelector(".js-login-btn");
  const loginIcon = document.querySelector(".js-login-icon");
  const pagesMenu = document.querySelector(".js-pages");

  if (localStorage.getItem("access_token")) {
    loginBtn.classList.add("hidden");
    loginIcon.classList.add("opacity-0");
    pagesMenu.classList.remove("border-b");
    pagesMenu.classList.remove("border-b-gray-500");
  }
};

export const renderNavbar = () => {
  const openMenuEl = document.querySelector(".fa-bars");
  openMenuEl.addEventListener("click", (e) => {
    // Navbar Width
    const navBar = document.querySelector(".js-navbar");
    navBar.classList.toggle("w-60");

    // Search Box Margin
    const searchBox = document.querySelector(".js-search");
    searchBox.classList.toggle("ml-20");

    // Body Margin
    const body = document.querySelector(".js-body");
    body.classList.toggle("ml-20");

    // Wrapper
    const wrappers = document.querySelectorAll(".js-wrapper");
    wrappers.forEach((wrapper) => {
      wrapper.classList.toggle("flex");
      wrapper.classList.toggle("gap-3");
      wrapper.classList.toggle("justify-start");
      wrapper.classList.toggle("items-center");
    });

    // Wrapper Title
    const wrappersTitle = document.querySelectorAll(".js-wrapper p");
    wrappersTitle.forEach((title) => {
      title.classList.toggle("text-[16px]");
    });

    // Pages List
    const pageList = document.querySelector(".js-pages");
    pageList.classList.toggle("pb-5");

    // Login
    const authEl = document.querySelector(".js-auth");
    authEl.classList.toggle("mt-0");
    const authIcon = authEl.querySelector(".js-wrapper");
    authIcon.classList.toggle("hidden");

    // Login BTN
    const loginBtn = document.querySelector(".js-login-btn");
    loginBtn.classList.toggle("hidden");

    if (localStorage.getItem("access_token")) {
      loginBtn.classList.add("hidden");
    }
  });
};

// Scroll Border
window.addEventListener("scroll", () => {
  const navBar = document.querySelector(".js-navbar");

  if (window.scrollY > 0) {
    navBar.classList.add("border-r-gray-500");
  } else {
    navBar.classList.remove("border-r-gray-500");
  }
});

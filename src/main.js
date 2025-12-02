import app from "./app";
import initeRouter from "./route/router";

const render = async () => {
  document.querySelector("#app").innerHTML = await app();
};

await render();

await initeRouter();

//HEADER
import { renderHeader, renderProfile, searchActive } from "./components/header";
renderHeader();
renderProfile();
searchActive();
//END HEADER

//NAVBAR
import { renderNavbar, renderProfileNavbar } from "./components/navbar";
renderNavbar();
renderProfileNavbar();
//END NAVBAR

//UPGRADE PAGE
import { renderUpgradePage } from "./pages/upgrade";
renderUpgradePage();
//END UPGRADE PAGE

//HOME
import { renderHome } from "./pages/home";
renderHome();
//END HOME PAGE

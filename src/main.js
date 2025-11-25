import app from "./app";
import initeRouter from "./route/router";

const render = async () => {
  document.querySelector("#app").innerHTML = await app();
};

await render();

await initeRouter();

//HEADER
import { renderHeader } from "./components/header";
renderHeader();
//END HEADER

//NAVBAR
import { renderNavbar } from "./components/navbar";
renderNavbar();
//END NAVBAR

//UPGRADE PAGE
import { renderUpgradePage } from "./pages/upgrade";
renderUpgradePage();
//END UPGRADE PAGE

//HOME
import { renderHome } from "./pages/home";
renderHome();
//END HOME PAGE

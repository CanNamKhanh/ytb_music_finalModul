import Navigo from "navigo";
import Home, {
  arrowActionHomePage,
  arrowActionHomePage2,
  renderHome,
} from "../pages/home";
import Explore, {
  arrowAction1,
  arrowAction2,
  renderNewMusicVid,
  renderPagePart,
} from "../pages/explore";
import Upgrade from "../pages/upgrade";
import newRelease, { renderNewRelease } from "../pages/newRelease";
import Chart, {
  renderSelectCoutry,
  renderTopArtists,
  renderVidCharts,
} from "../pages/chart";
import MoodAndGenres, {
  renderPagePart1,
  renderPagePart2,
} from "../pages/moodAndGenres";
import SlugPage, {
  renderPageSlug,
  renderPageSlugPlaylists,
} from "../pages/slugPage";
import SlugLayout from "../pages/slugLayout";
import Player, { setupPlayerEvents } from "../pages/player";

const router = new Navigo("/");

const initeRouter = async () => {
  router
    .on("/", async () => {
      document.querySelector(".js-body").innerHTML = Home();
      renderHome();
      arrowActionHomePage();
      arrowActionHomePage2();
    })
    .on("/explore", async () => {
      document.querySelector(".js-body").innerHTML = Explore();
      await renderPagePart();
      await renderNewMusicVid();
      arrowAction1();
      arrowAction2();
    })
    .on("/upgrade", () => {
      document.querySelector(".js-body").innerHTML = Upgrade();
    })
    .on("/explore/new-release", async () => {
      document.querySelector(".js-body").innerHTML = newRelease();
      await renderNewRelease();
      await renderNewMusicVid();
      arrowAction2();
    })
    .on("/explore/chart", () => {
      document.querySelector(".js-body").innerHTML = Chart();
      renderSelectCoutry();
      renderVidCharts();
      renderTopArtists();
    })
    .on("/explore/moods_and_genres", async () => {
      document.querySelector(".js-body").innerHTML = MoodAndGenres();
      await renderPagePart1();
      await renderPagePart2();
    })
    .on("/categories/:slug", async () => {
      document.querySelector(".js-body").innerHTML = SlugLayout();
      document.querySelector(".js-slug").innerHTML = await SlugPage();
      await renderPageSlug();
      await renderPageSlugPlaylists();
    })
    .on("/lines/:slug", async () => {
      document.querySelector(".js-body").innerHTML = SlugLayout();
      document.querySelector(".js-slug").innerHTML = await SlugPage();
      await renderPageSlug();
      await renderPageSlugPlaylists();
    })
    .on("/player/:slug", async () => {
      document.querySelector(".js-body").innerHTML = await Player();
      setupPlayerEvents();
    })
    .resolve();
};
export default initeRouter;

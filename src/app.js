import Header from "./components/header";
import NavBar from "./components/navbar";

const app = () => {
  return `<div class="bg-[#110e11] h-full">
              ${Header()},
              <main class="js-body"></main>
              ${NavBar()};
          </div>`;
};
export default app;

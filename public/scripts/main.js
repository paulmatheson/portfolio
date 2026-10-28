import projectsArr from "./projectData.js";
import { renderProjects } from "./projectRenderer.js";
import { switchTheme } from "./themeSwitch.js?v=2";
import { initMenu } from "./menuAnimation.js?v=2";
import "./pageIntro.js";
import "./nowPlaying.js";

const hmProjList = document.getElementById("hm-project-cards");
const projectList = document.getElementById("project-list");

const menuButton = document.getElementById("menu-button");
const toggleLinks = document.querySelectorAll(".theme-toggle-link");

const dayIcon =
  '<ion-icon name="sunny-outline" id="theme-toggle-icon"></ion-icon>';
const nightIcon =
  '<ion-icon name="moon-outline" id="theme-toggle-icon"></ion-icon>';

toggleLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    switchTheme(link, dayIcon, nightIcon);
  });
});

initMenu(menuButton);

renderProjects(projectsArr, hmProjList, projectList);

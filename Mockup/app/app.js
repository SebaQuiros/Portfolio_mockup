"use strict";
let message = "Hola, soy Seba";
console.log(message);

// Switchers
window.onload = () => {
  const button_switchers_xp = document.querySelectorAll("[data-switcher-xp]");
  console.log(button_switchers_xp);
  const button_switchers_edu = document.querySelectorAll("[data-switcher-edu]");
  console.log(button_switchers_edu);

  //  Experiencia (xp)
  for (let i = 0; i < button_switchers_xp.length; i++) {
    const button_switcher_xp = button_switchers_xp[i];
    const xp_panel_id = button_switcher_xp.dataset.tab;

    button_switcher_xp.addEventListener("click", () => {
      document
        .querySelector(".xp-tablist .btn-tab.active")
        .classList.remove("active");
      button_switcher_xp.classList.add("active");

      switchXpPanel(xp_panel_id);
    });
  }

  //  Educación (edu)
  for (let i = 0; i < button_switchers_edu.length; i++) {
    const button_switcher_edu = button_switchers_edu[i];
    const edu_panel_id = button_switcher_edu.dataset.tab;

    button_switcher_edu.addEventListener("click", () => {
      document
        .querySelector(".edu-tablist .btn-tab.active")
        .classList.remove("active");
      button_switcher_edu.classList.add("active");

      switchEduPanel(edu_panel_id);
    });
  }
};

function switchXpPanel(panel_id) {
  const current_xp_panel = document.querySelector(
    `.xp-panel .panel-content.active`
  );
  current_xp_panel.classList.remove("active");

  const next_xp = document.querySelector(
    `.xp-panel .panel-content[data-panel="${panel_id}"]`
  );
  next_xp.classList.add("active");
}

function switchEduPanel(panel_id) {
  const current_edu_panel = document.querySelector(
    `.edu-panel .panel-content.active`
  );
  current_edu_panel.classList.remove("active");

  const next_edu = document.querySelector(
    `.edu-panel .panel-content[data-panel="${panel_id}"]`
  );
  next_edu.classList.add("active");
}

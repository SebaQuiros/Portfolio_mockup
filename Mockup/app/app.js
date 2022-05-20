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
    const xp_panel = `xp-panel`;

    button_switcher_xp.addEventListener("click", () => {
      document
        .querySelector(".xp-tablist .btn-tab.active")
        .classList.remove("active");
      button_switcher_xp.classList.add("active");

      switchPanel(xp_panel_id, xp_panel);
    });
  }

  //  Educación (edu)
  for (let i = 0; i < button_switchers_edu.length; i++) {
    const button_switcher_edu = button_switchers_edu[i];
    const edu_panel_id = button_switcher_edu.dataset.tab;
    const edu_panel = `edu-panel`;

    button_switcher_edu.addEventListener("click", () => {
      document
        .querySelector(".edu-tablist .btn-tab.active")
        .classList.remove("active");
      button_switcher_edu.classList.add("active");

      switchPanel(edu_panel_id, edu_panel);
    });
  }
};

function switchPanel(panel_id, panel_type) {
  const current_panel = document.querySelector(
    `${panel_type} .panel-content.active`
  );
  current_panel.classList.remove("active");

  const next_job = document.querySelector(
    `${panel_type} .panel-content[data-content="${panel_id}"]`
  );
  next_job.classList.add("active");
}

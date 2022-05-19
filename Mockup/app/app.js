"use strict";
let message = "Hola, soy Seba";
console.log(message);

window.onload = () => {
  const button_switchers = document.querySelectorAll("[data-switcher]");
  console.log(button_switchers);

  for (let i = 0; i < button_switchers.length; i++) {
    const button_switcher = button_switchers[i];
    const job_panel_id = button_switcher.dataset.tab;

    button_switcher.addEventListener("click", () => {
      document
        .querySelector(".tablist .btn-tab.active")
        .classList.remove("active");
      button_switcher.classList.add("active");

      switchJobPanel(job_panel_id);
    });
  }
};
function switchJobPanel(job_panel_id) {
  const current_job = document.querySelector(".panel .panel-content.active");
  current_job.classList.remove("active");

  const next_job = document.querySelector(
    `.panel .panel-content[data-content="${job_panel_id}"]`
  );
  next_job.classList.add("active");
}
// Para angular dejarlo en el HTML

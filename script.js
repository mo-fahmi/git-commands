"use strict";

const commands = document.querySelectorAll(".t_command");
const descriptions = document.querySelectorAll(".t_description");
const copyMessage = document.getElementById("copyMessage");

commands.forEach((c) =>
  c.addEventListener("click", () => {
    console.log(c.innerText);
    showCopyMessage(c.innerText);
  })
);

descriptions.forEach((d) => {
  d.addEventListener("click", () => {
    console.log(d.previousElementSibling.innerText);
    showCopyMessage(d.previousElementSibling.innerText);
  });
});

function showCopyMessage(cmd) {
  copyMessage.innerText = `${cmd}`;
  copyMessage.classList.remove("hide");
  copyMessage.classList.add("slide-in-bottom");
  setTimeout(() => {
    copyMessage.classList.add("hide");
    copyMessage.classList.remove("slide-in-bottom");
  }, 2490);
}

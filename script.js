"use strict";

const dialogButton = document.querySelector(".dialog-button");
const dialog = document.querySelector(".dialog");
const dialogCloseButton = document.querySelector(".dialog-close-button");

dialogButton.addEventListener("click", () => {
  dialog.showModal();
});

dialogCloseButton.addEventListener("click", () => {
  dialog.close();
});

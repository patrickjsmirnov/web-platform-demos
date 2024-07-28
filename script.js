"use strict";

const dialogButton = document.querySelector(".dialog-button");
const dialog = document.querySelector(".dialog");
const dialogCloseButton = document.querySelector(".dialog-close-button");
const details = document.querySelector("details");

dialogButton.addEventListener("click", () => {
  dialog.showModal();
});

dialogCloseButton.addEventListener("click", () => {
  dialog.close();
});

details.addEventListener("toggle", (event) => {
  if (details.open) {
    console.log("open");
  } else {
    console.log("close");
  }
});

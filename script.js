"use strict"

const menu_button = document.querySelector(".menu-button");
const close_button = document.querySelector(".close-button");
const menu_mobile = document.querySelector(".menu-mobile");



menu_button.addEventListener("click", () => {
	menu_button.style.display = "none";
	close_button.style.display = "initial";
	menu_mobile.style.display = "flex";
});

close_button.addEventListener("click", () => {
	menu_button.style.display = "initial";
	close_button.style.display = "none";
	menu_mobile.style.display = "none";
});

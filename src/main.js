import { popup } from "./popup.mjs";

console.log("i m in main");
console.log("i m in DOM loaded");
document.getElementById("confirm-popup").addEventListener("click", popup);

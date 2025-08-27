// **** Header *** //
const headerBanner = document.querySelector("#banner");
const bannerText = document.createElement("p")
headerBanner.classList.add("banner")
bannerText.textContent = "Hi User 👋";

export function loadHeader() {
  headerBanner.appendChild(bannerText)
}

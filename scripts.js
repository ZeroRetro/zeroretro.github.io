const lightbox = document.createElement("dialog");
lightbox.className = "image-lightbox";
lightbox.innerHTML = `
  <div class="image-lightbox-content">
    <button class="lightbox-close" type="button" aria-label="Close image"></button>
    <img alt="">
  </div>`;
document.body.append(lightbox);

const lightboxImage = lightbox.querySelector("img");
const closeButton = lightbox.querySelector(".lightbox-close");

function openLightbox(thumbnail) {
  lightboxImage.src = thumbnail.currentSrc || thumbnail.src;
  lightboxImage.alt = thumbnail.alt;
  lightbox.showModal();
}

function closeLightbox() {
  lightbox.close();
}

document.querySelectorAll(".gallery img").forEach((thumbnail) => {
  thumbnail.tabIndex = 0;
  thumbnail.setAttribute("role", "button");
  thumbnail.setAttribute("aria-label", `${thumbnail.alt}. View full size`);
  thumbnail.addEventListener("click", () => openLightbox(thumbnail));
  thumbnail.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(thumbnail);
    }
  });
});

closeButton.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightbox.addEventListener("close", () => {
  lightboxImage.removeAttribute("src");
});

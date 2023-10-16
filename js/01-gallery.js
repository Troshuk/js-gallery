import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector("ul.gallery");

gallery.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>
    `
  )
  .join("");

gallery.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  basicLightbox
    .create(`<img src="${e.target.dataset.source}" width="800" height="600">`, {
      onShow: closeOnEscape,
    })
    .show();
});

function closeOnEscape(instance) {
  window.addEventListener(
    "keydown",
    ({ code }) => code === "Escape" && instance.close()
  );
}

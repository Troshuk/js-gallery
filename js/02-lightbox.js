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
            alt="${description}"
            />
        </a>
    </li>
    `
  )
  .join("");

new SimpleLightbox("ul.gallery .gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});

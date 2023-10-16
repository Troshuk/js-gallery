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

  const imageModal = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => window.addEventListener("keydown", closeOnEscape),
      onClose: () => window.removeEventListener("keydown", closeOnEscape),
    }
  );

  imageModal.show();

  function closeOnEscape({ code }) {
    if (code === "Escape") {
      imageModal.close();
    }
  }
});

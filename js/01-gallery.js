import { galleryItems } from "./gallery-items.js";
// Change code below this line

const items = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}" >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
  </div>`;
  })
  .join("");

const galleryBox = document.querySelector(".gallery");
galleryBox.innerHTML = items;

galleryBox.addEventListener("click", onLinkClick);

function onLinkClick(event) {
  event.preventDefault();

  const clickImg = event.target;

  if (clickImg.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
          <img src="${clickImg.dataset.source}">
      `);
  instance.show();
}

console.log(galleryItems);

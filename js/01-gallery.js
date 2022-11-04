import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector(".gallery");

const galleryRef = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

divRef.insertAdjacentHTML("beforeend", galleryRef);

divRef.addEventListener("click", zoomOnClick);

function zoomOnClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  // if (!evt.target.classList.contains("gallery__image")) {
  //   return;
  // }
  const urlRef = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${urlRef}" width="800" height="600">`,
    {
      onShow: () => document.addEventListener("keydown", onEscape),
      onClose: () => document.removeEventListener("keydown", onEscape),
    }
  );
  instance.show();

  function onEscape(evt) {
    // console.log(evt.code);
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}

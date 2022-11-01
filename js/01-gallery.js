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
  const urlRef = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${urlRef}" width="800" height="600">`,
    {
      onShow: (instance) => onOpenImg(),
      onClose: (instance) => onCloseImg(),
    }
  );
  instance.show();

}



function onOpenImg() {
  window.addEventListener("keydown", onEscPress);
}
function onCloseImg() {
  window.removeEventListener("keydown", onEscPress);
}

function onEscPress(event) {
  if (event.code === "Escape") {
    onCloseImg();
  }
}

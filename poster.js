function showImageModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modalImg.src = src;
  modal.style.display = "flex";
}

function hideImageModal() {
  document.getElementById("imageModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".card-img-top").forEach(img => {
    img.addEventListener("click", function () {
      showImageModal(this.src);
    });
  });
});

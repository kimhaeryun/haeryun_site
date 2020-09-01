function dbl_click(opencom) {
    location.href = href;
}

$(function () {
    $('.closeButton').click(function () {
        $('.overlay-computer').hide();
    });
    $('.folder-computer').click(function () {
        $('.overlay-computer').show();
    });
});

// const openButton = document.getElementById("folder-computer");
// const modal = document.querySelector(".overlay-computer");
// const overlay = modal.querySelector(".fa fa-times");
// const closeBtn = modal.querySelector("closeercam");
// const openModal = () => {
//     modal.classList.remove("folder-computer");
// }
// const closeModal = () => {
//     modal.classList.add("closeercam");
// }
// overlay.addEventListener("click", closeModal);
// closeBtn.addEventListener("click", closeModal);
// openButton.addEventListener("click", openModal);
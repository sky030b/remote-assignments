const welcomeBanner = document.querySelector(".welcome-banner");
welcomeBanner.addEventListener("click", () => {
    welcomeBanner.querySelector("h3").innerText = "Have a Good Time!";
})

const actionBtn = document.querySelector(".actionBtn");
actionBtn.addEventListener("click", () => {
    const hiddenBoxes = document.querySelector(".content-boxes.d-none");
    hiddenBoxes ? hiddenBoxes.classList.remove("d-none") : null;
})
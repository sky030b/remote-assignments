const welcomeBanner = document.querySelector(".welcome-banner");
welcomeBanner.addEventListener("click", () => {
    welcomeBanner.querySelector("h3").innerText = "Have a Good Time!";
})
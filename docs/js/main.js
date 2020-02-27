(() => {
    let button = document.querySelector("#hamburger-toggle");
    let hamburger = document.querySelectorAll("#hamburger");
    let menu = document.querySelector("#menu");

    button.addEventListener("click", e => {
        menu.classList.toggle("show-menu");
        for (bar of hamburger) {
            bar.classList.toggle("cross");
        }
    });
})();

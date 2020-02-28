(() => {
    let button = document.querySelector("#hamburger-toggle");
    let menu = document.querySelector("#menu");

    button.addEventListener("click", e => {
        menu.classList.toggle("show-menu");
        button.classList.toggle("cross");
    });
})();

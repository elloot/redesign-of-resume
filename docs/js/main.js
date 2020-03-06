(() => {
    let button = document.querySelector("#hamburger-toggle");
    let menu = document.querySelector("#menu");

    button.addEventListener("click", e => {
        menu.classList.toggle("show-menu");
        button.classList.toggle("hamburger-cross");
    });
})();

(() => {
    let title = document.querySelector("#aboutMeTitle"),
        image = document.querySelector("#aboutMeImage"),
        text = document.querySelector("#aboutMeText"),
        container = document.querySelector("#aboutMeContainer");

    function aboutMeRestructure(mediaQuery) {
        if (mediaQuery.matches) {
            //restructures the About me card for desktop
            title.parentNode.removeChild(title);
            container.insertBefore(title, text);
        } else {
            //restructures the About me card for smaller screens
            title.parentNode.removeChild(title);
            container.insertBefore(title, image);
        }
    }

    let desktopQuery = window.matchMedia("(min-width: 992px)");
    aboutMeRestructure(desktopQuery);
    desktopQuery.addListener(aboutMeRestructure);
})();

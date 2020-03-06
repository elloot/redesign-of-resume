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
        cardContainer = document.querySelector("#aboutMeContainer"),
        isWrapped = false;

    function aboutMeRestructure(mediaQuery) {
        if (mediaQuery.matches) {
            //restructures the About me card for desktop
            title.parentNode.removeChild(title);
            cardContainer.insertBefore(title, text);

            let addedToDocument = false,
                wrapper = document.createElement("div"),
                nodesToWrap = document.querySelectorAll(".aboutMeToWrap");

            wrapper.id = "aboutMeDesktopContainer";

            for (let index = 0; index < nodesToWrap.length; index++) {
                let node = nodesToWrap[index];
                if (!addedToDocument) {
                    node.parentNode.insertBefore(wrapper, node);
                    addedToDocument = true;
                }
                node.parentNode.removeChild(node);
                wrapper.appendChild(node);
            }
            isWrapped = true;

            document.querySelector("#aboutMeDesktopContainer").classList.add("text-title-container");
        } else {
            //restructures the About me card for smaller screens

            if (isWrapped) {
                let wrapper = document.querySelector("#aboutMeDesktopContainer");
                let nodesToUnwrap = document.querySelectorAll(".aboutMeToWrap");

                for (let index = 0; index < nodesToUnwrap.length; index++) {
                    let node = nodesToUnwrap[index];
                    cardContainer.insertBefore(node, wrapper);
                }
                wrapper.parentNode.removeChild(wrapper);
            }

            title.parentNode.removeChild(title);
            cardContainer.insertBefore(title, image);
        }
    }

    let desktopQuery = window.matchMedia("(min-width: 992px)");
    aboutMeRestructure(desktopQuery);
    desktopQuery.addListener(aboutMeRestructure);
})();

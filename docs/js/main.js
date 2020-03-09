(() => {
    const button = document.querySelector("#hamburger-toggle");
    const menu = document.querySelector("#menu");

    button.addEventListener("click", e => {
        menu.classList.toggle("show-menu");
        button.classList.toggle("hamburger-cross");
    });
})();

(() => {
    const title = document.querySelector("#aboutMeTitle"),
        image = document.querySelector("#aboutMeImage"),
        text = document.querySelector("#aboutMeText"),
        cardContainer = document.querySelector("#aboutMeContainer");

    let isWrapped = false;

    function aboutMeRestructure(mediaQuery) {
        if (mediaQuery.matches) {
            //restructures the About me card for desktop
            title.parentNode.removeChild(title);
            cardContainer.insertBefore(title, text);

            //can I make this into a function?
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

(() => {
    const skillArray = document.querySelectorAll("#skillTitle"),
        list = document.querySelector(".card__list-skills"),
        pList = document.querySelectorAll(".card__skill-info");
    let isOpen = false;

    skillArray.forEach(function(skill) {
        skill.addEventListener("click", e => {
            let temp = e.currentTarget;
            temp.parentNode.getElementsByTagName("p")[0].classList.toggle("show-skill-info");

            for (let i = 0; i < pList.length; i++) {
                if (pList[i].classList.contains("show-skill-info")) {
                    isOpen = true;
                    break;
                } else {
                    isOpen = false;
                }
            }

            if (isOpen) {
                list.classList.add("height-inherit");
            } else {
                list.classList.remove("height-inherit");
            }
        });
    });
})();

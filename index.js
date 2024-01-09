const pageScrollMultiplier = 0.3;

function initiate() {
    const pagesElements = document.getElementsByClassName("content-page");
    const contentScrollDummyElement = document.getElementById("content-scroll-dummy");

    contentScrollDummyElement.style.height = `calc(${pagesElements.length} * 100vh * ${pageScrollMultiplier} + 100vh)`;

    const getCurrentActivePage = () =>  Math.floor(window.scrollY / (window.innerHeight * pageScrollMultiplier));

    document.addEventListener("scroll", ev => {
        const blurElement = document.getElementById("background-blur");
        const currentPageIndex = getCurrentActivePage();

        if (currentPageIndex > 0) {
            blurElement.className = "active"
        } else {
            blurElement.className = "not-active"
        }


        for (let i = 0; i < pagesElements.length; i++) {
            const isShown = i === currentPageIndex;
            pagesElements[i].className = `content-page${isShown ? " active" : ""}`
        }
    })
}

document.addEventListener("DOMContentLoaded", initiate)
// initiate();
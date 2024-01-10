const pageScrollMultiplier = 0.3;

const getAllDataElements = (attributeName = "x-data") => {
    const elements = Array.from(document.getElementsByClassName("dataEntity"));
    return elements.filter(it => it.hasAttribute(attributeName));
}
//
// const getElementDataEntity = (entityName) => {
//     const elements = Array.from(document.getElementsByClassName("dataEntity"));
//     return elements.filter(it => it.getAttribute("x-data") === entityName)[0];
// }

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

    const prefillData = () => {
        const params = new URL(document.location).searchParams;
        const currentUser = params.get("guest");
        const data = guestsData[currentUser] || guestsData.unknown;

        for (let prefillElement of getAllDataElements("x-data")) {
            const prefillField = prefillElement.getAttribute("x-data");
            console.log("FILL",prefillElement,prefillField)
            prefillElement.innerHTML = data[prefillField];
        }

        for (let conditionElement of getAllDataElements("x-shown")) {
            const attr = conditionElement.getAttribute("x-shown");
            if (!data[attr]) conditionElement.className += " hidden"
        }
        for (let conditionElement of getAllDataElements("x-shown-not")) {
            const attr = conditionElement.getAttribute("x-shown-not");
            if (data[attr]) conditionElement.className += " hidden"
        }
    }

    prefillData();
}


document.addEventListener("DOMContentLoaded", initiate);
// initiate();
const pageScrollMultiplier = 0.6;

const getAllDataElements = (attributeName = "x-data") => {
    const elements = Array.from(document.getElementsByClassName("dataEntity"));
    return elements.filter(it => it.hasAttribute(attributeName));
}

function initiate() {
    const contentScrollDummyElement = document.getElementById("content-scroll-dummy");

    const getPageElements = () => {
        return Array.from(document.getElementsByClassName("content-page")).filter(it => !it.classList.contains("hidden"));
    }

    const getCurrentActivePage = () =>  Math.floor(window.scrollY / (window.innerHeight * pageScrollMultiplier));

    document.addEventListener("scroll", ev => {
        const blurElement = document.getElementById("background-blur");
        const currentPageIndex = getCurrentActivePage();

        if (currentPageIndex > 0) {
            blurElement.className = "active"
        } else {
            blurElement.className = "not-active"
        }


        for (let i = 0; i < getPageElements().length; i++) {
            const isShown = i === currentPageIndex;
            const pageElement = getPageElements()[i];
            let classList = Array.from(pageElement.classList);
            if (isShown && classList.indexOf("active") < 0) classList.push("active");
            if (!isShown && classList.indexOf("active") >= 0) classList = classList.filter(it => it !== "active")
            pageElement.className = classList.join(" ")
        }
    })

    const prefillData = () => {
        const params = new URL(document.location).searchParams;
        const currentUser = params.get("guest");
        const data = guestsData[currentUser] || guestsData.unknown;

        for (let prefillElement of getAllDataElements("x-data")) {
            const prefillField = prefillElement.getAttribute("x-data");
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

    contentScrollDummyElement.style.height = `calc(${getPageElements().length} * 100vh * ${pageScrollMultiplier} + 80vh)`;

    for (let i = 0; i < getPageElements().length; i++) {
        const sectionDiv = document.createElement("div");
        sectionDiv.style.height = `calc(${pageScrollMultiplier} * 100vh + 1px)`
        sectionDiv.className = "content-page-snap";
        contentScrollDummyElement.append(sectionDiv)
    }
}


document.addEventListener("DOMContentLoaded", initiate);
// initiate();
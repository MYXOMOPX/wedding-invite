const pageScrollMultiplier = 0.3;

const getElementDataEntity = (entityName) => {
    const elements = Array.from(document.getElementsByClassName("dataEntity"));
    return elements.filter(it => it.getAttribute("x-data") === entityName)[0];
}

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

    const prefillFields = ["fullName"]
    const prefillData = () => {
        const params = new URL(document.location).searchParams;
        const currentUser = params.get("guest");
        const data = guestsData[currentUser];
        console.log("GUEST",data,currentUser)
        if (!data) return;
        for (let prefillField of prefillFields) {
            const element = getElementDataEntity(prefillField);
            console.log("FILL",element,prefillField)
            if (!element) return;
            element.innerHTML = data[prefillField];
        }
    }

    prefillData();
}


document.addEventListener("DOMContentLoaded", initiate);
// initiate();
import hamburgerImg from "./image-from-rawpixel-id-7633713-png.png"

export function populateHome() {
    const main = document.createElement("main");
    main.classList.add("homepage");

    const image = document.createElement("img");
    image.src = hamburgerImg;

    const info = document.createElement("div");
    info.classList.add("info");

    const rstName = document.createElement("h1");
    rstName.innerText = "BURGERTOPIA";
    rstName.classList.add("name");
    rstName.style.fontSize = "4rem";

    const slogan = document.createElement("h1");
    slogan.innerText = "A hamburger lover's paradise!"

    const timeInfo = document.createElement("div");
    timeInfo.classList.add("hours");

    const opnHours = document.createElement("h2");
    opnHours.innerText = "Opening Hours"

    const wdHours = document.createElement("h3");
    wdHours.innerText = "Weekday Hours: 10:00 AM - 10:00 PM"

    const weHours = document.createElement("h3");
    weHours.innerText = "Weekend Hours: 10:00 AM - 11:00 PM"

    const locInfo = document.createElement("h2");
    locInfo.innerText = "Location: 123 Somewhere ave, Someplace, NJ"

    main.appendChild(rstName);
    main.appendChild(image);
    main.appendChild(info);
    info.appendChild(slogan);
    info.appendChild(timeInfo);
    info.appendChild(locInfo);
    timeInfo.appendChild(opnHours);
    timeInfo.appendChild(wdHours);
    timeInfo.appendChild(weHours);

    return main;

}
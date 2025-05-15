export function populateAbout() {
    const about = document.createElement("main");
    about.classList.add("about");

    const aboutInfo = document.createElement("div");
    aboutInfo.classList.add("about-us");

    const aboutUs = document.createElement("h1");
    aboutUs.innerText = "ABOUT US";
    aboutUs.style.color = "rgb(177, 48, 48)";

    const infoText = document.createElement("p");
    infoText.classList.add("about-us");
    infoText.innerText = "First established in 2005, Burgertopia has been pushing the boundaries of burger making by using grass-fed beef, fresh ingredients, and a myriad of flavors from around the world to create an unforgettable experience. We treat burgers as a form of art and are commited in providing exceptional service to all of our customers.";

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-us");

    const contactUs = document.createElement("h1");
    contactUs.innerText = "CONTACT US";
    contactUs.style.color = "rgb(177, 48, 48)";

    const eMail = document.createElement("h3");
    eMail.innerText = "e-Mail: Contact@Burgertopia.com";

    const phoneNum = document.createElement("h3");
    phoneNum.innerText = "Phone Number: 555-555-5555";

    about.appendChild(aboutInfo);
    about.appendChild(contactInfo);
    aboutInfo.appendChild(aboutUs);
    aboutInfo.appendChild(infoText);
    contactInfo.appendChild(contactUs);
    contactInfo.appendChild(eMail);
    contactInfo.appendChild(phoneNum);

    return about;
}
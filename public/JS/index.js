const navPage = document.querySelector(".nav-page");
const navOpen = document.getElementById("navOpen");
const navClose = document.getElementById("navClose");

const openNav = (e) => {
    e.preventDefault();

    navPage.classList.remove("hidden");
    navPage.classList.add("slideIn");
    setTimeout(() => navPage.classList.remove("slideIn"), 700);
}
const closeNav = (e) => {
    e.preventDefault();

    navPage.classList.add("slideOut");
    setTimeout(() => {
        navPage.classList.remove("slideOut");
        navPage.classList.add("hidden");
    }, 700);
}

if (navOpen) navOpen.addEventListener("click", openNav);
if (navClose) navClose.addEventListener("click", closeNav);
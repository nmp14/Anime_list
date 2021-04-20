// Nav page elements
const navPage = document.querySelector(".nav-page");
const navOpen = document.getElementById("navOpen");
const navClose = document.getElementById("navClose");
// loginPage elements
const swapToRegister = document.getElementById("swapToRegister");
const swapToLogin = document.getElementById("swapToLogin");

// Nav page functions 
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

// login/register functions
const swapForms = () => {
    if (swapToRegister) {
        swapToRegister.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("loginForm").classList.add("hidden");
            document.getElementById("registerForm").classList.remove("hidden");
        });
    } else if (swapToLogin) {
        swapToLogin.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("loginForm").classList.remove("hidden");
            document.getElementById("registerForm").classList.add("hidden");
        });
    }
    swapForms();
}

if (navOpen) navOpen.addEventListener("click", openNav);
if (navClose) navClose.addEventListener("click", closeNav);
if (swapToLogin || swapToRegister) swapForms();
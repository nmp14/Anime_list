// Nav page elements
const navPage = document.querySelector(".nav-page");
const navOpen = document.getElementById("navOpen");
const navClose = document.getElementById("navClose");
// loginPage elements
const swapToRegister = document.getElementById("swapToRegister");
const swapToLogin = document.getElementById("swapToLogin");
const loginBtn = document.getElementById("loginSubmit");
const registerBtn = document.getElementById("registerSubmit");

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
}

// Login fetch request
const loginUser = async (e) => {
    try {
        e.preventDefault();

        const email = document.getElementById("emailLogin").value.trim();
        const password = document.getElementById("passwordLogin").value.trim();

        if (email && password) {
            const fetchResponse = await fetch("/api/users/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: { "Content-Type": "application/json" }
            });
            if (fetchResponse.ok) {
                console.log("ok")
            } else {
                console.log("no");
            }
        } else {
            document.getElementById("loginError").classList.remove("hidden");
        }
    } catch (e) {
        console.log(e);
    }
}
// Register fetch request
const registerUser = async (e) => {

}

if (navOpen) navOpen.addEventListener("click", openNav);
if (navClose) navClose.addEventListener("click", closeNav);
if (swapToLogin || swapToRegister) swapForms();
if (loginBtn) loginBtn.addEventListener("click", loginUser);
if (registerBtn) registerBtn.addEventListener("click", registerUser);
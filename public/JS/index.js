// Nav page elements
const navPage = document.querySelector(".nav-page");
const navOpen = document.getElementById("navOpen");
const navClose = document.getElementById("navClose");
// loginPage elements
const swapToRegister = document.getElementById("swapToRegister");
const swapToLogin = document.getElementById("swapToLogin");
const loginBtn = document.getElementById("loginSubmit");
const registerBtn = document.getElementById("registerSubmit");
const registerError = document.getElementById("registerError");
const logoutBtn = document.getElementById("logoutBtn");

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
    e.preventDefault();

    const first_name = document.getElementById("firstNameRegister").value.trim();
    const last_name = document.getElementById("lastNameRegister").value.trim();
    const username = document.getElementById("usernameRegister").value.trim();
    const email = document.getElementById("emailRegister").value.trim();
    const password = document.getElementById("passwordRegister").value.trim();
    const confirmPassword = document.getElementById("ConfirmPassword").value.trim();

    // If passwords dont match, return with error
    if (password !== confirmPassword) {
        registerError.innerHTML = "Passwords do not match";
        if (registerError.classList.contains("hidden")) registerError.classList.remove("hidden");
        return;
    }
    // Require inputs
    if (first_name && last_name && username && email && password && confirmPassword) {
        const registerFetch = await fetch("/api/users/", {
            method: "POST",
            body: JSON.stringify({ first_name, last_name, email, username, password }),
            headers: { "Content-Type": "application/json" }
        });

        const responseJSON = await registerFetch.json();

        if (registerFetch.ok) {
            document.location.replace("/");
        } else {
            registerError.innerHTML = responseJSON.message;
            if (registerError.classList.contains("hidden")) registerError.classList.remove("hidden");
        }
    } else {
        registerError.innerHTML = "Please fill out all required fields";
        if (registerError.classList.contains("hidden")) registerError.classList.remove("hidden");
        return;
    }

}
// Log user out
const logout = async (e) => {
    e.preventDefault();

    const logoutResponse = await fetch("/api/users/logout", {
        method: "POST"
    });

    if (logoutResponse.ok) {
        document.location.replace("/");
    } else {
        console.log("err");
    }
}

if (navOpen) navOpen.addEventListener("click", openNav);
if (navClose) navClose.addEventListener("click", closeNav);
if (swapToLogin || swapToRegister) swapForms();
if (loginBtn) loginBtn.addEventListener("click", loginUser);
if (registerBtn) registerBtn.addEventListener("click", registerUser);
if (logoutBtn) logoutBtn.addEventListener("click", logout);
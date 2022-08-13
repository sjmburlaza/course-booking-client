let loginNav = document.querySelector("#loginBtn");
let registerNav = document.querySelector("#registerBtn");
let userToken = localStorage.getItem("token");

if (!userToken) {
    loginNav.innerHTML = 
    `
    <li>
        <a href="./pages/login.html">Login</a>
    </li>
        
    `
    registerNav.innerHTML =
    `
    <li>
        <a href="./pages/register.html">Sign-up</a>
    </li>
    `

} else {
    loginNav.innerHTML = 
    `
    <li>
        <a href="./pages/logout.html">Logout</a>
    </li>
    `
}
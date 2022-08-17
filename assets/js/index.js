let navSession = document.querySelector('#navSession');
let registerNav = document.querySelector('#registerBtn');
let userToken = localStorage.getItem('token');

if (!userToken) {
    navSession.innerHTML = 
    `
    <li>
        <a href="./pages/login.html">Login</a>
    </li>
        
    `
    // registerNav.innerHTML =
    // `
    // <li>
    //     <a href="./pages/register.html">Sign-up</a>
    // </li>
    // `

} else {
    navSession.innerHTML = 
    `
    <li>
        <a href="./pages/logout.html">Logout</a>
    </li>
    `
}
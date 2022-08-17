let navSession = document.querySelector('#navSession');
let registerNav = document.querySelector('#registerBtn');
let userToken = localStorage.getItem('token');

if (!userToken) {
    navSession.innerHTML = 
    `
    <li>
        <a href="./login.html">Login</a>
    </li>
    `
    // registerNav.innerHTML =
    // `
    // <li>
    //     <a href="./register.html">Sign-up</a>
    // </li>
    // `

} else {
    navSession.innerHTML = 
    `
    <li>
        <a href="./logout.html">Logout</a>
    </li>
    `
}
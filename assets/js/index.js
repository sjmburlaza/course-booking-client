let navSession = document.querySelector('#indexNav');
let registerNav = document.querySelector('#registerBtn');
let userToken = localStorage.getItem('token');

if (!userToken) {
    navSession.innerHTML = 
    `
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="./pages/courses.html">Courses</a></li>
        <li><a href="./pages/about.html">About</a></li>
        <li><a href="./pages/login.html">Login</a></li>
    </ul>
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
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="./pages/courses.html">Courses</a></li>
        <li><a href="./pages/about.html">About</a></li>
        <li><a href="./pages/logout.html">Logout</a></li>
    </ul>
    `
}
let navSession = document.querySelector('#globalNav');
// let registerNav = document.querySelector('#registerBtn');
let userToken = localStorage.getItem('token');

if (!userToken) {
    navSession.innerHTML = 
    `
    <ul>
        <li><a href="./../index.html">Home</a></li>
        <li><a href="./../pages/courses.html">Courses</a></li>
    </ul>
    `

} else {
    navSession.innerHTML = 
    `
    <ul>
        <li><a href="./../index.html">Home</a></li>
        <li><a href="./../pages/courses.html">Courses</a></li>
        <li><a href="./userProfile.html">Profile</a></li>
        <li><a href="./logout.html">Logout</a></li>
    </ul>
    `
}
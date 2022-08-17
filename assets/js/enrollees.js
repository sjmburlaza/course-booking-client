let params = new URLSearchParams(window.location.search);
let courseId = params.get('courseId');
// let token = localStorage.getItem('token');

let courseName = document.querySelector("#courseName");
let courseDescription = document.querySelector("#courseDescription");

fetch(`https://course-booking-v2.herokuapp.com/api/courses/${courseId}`)
.then(res => res.json())
.then(data => {
    console.log(data)
})


let params = new URLSearchParams(window.location.search);
let courseId = params.get('courseId');
let token = localStorage.getItem('token');
let userId = localStorage.getItem('id');

let courseImage = document.querySelector('#courseImage');
let courseName = document.querySelector('#courseName');
let courseDescription = document.querySelector('#courseDescription');
let coursePrice = document.querySelector('#coursePrice');
let enrollContainer = document.querySelector('#enrollContainer');

fetch(`https://course-booking-v2.herokuapp.com/api/courses/${courseId}`)
.then(res => res.json())
.then(data => {

    courseName.innerHTML = data.name;
    coursePrice.innerHTML = `Price: ₱ ${data.price}`;
    courseDescription.innerHTML = data.description;
    courseImage.innerHTML =
    `
    <img src="${data.image}" height="550" width="100%">
    `

    if (token) {
        enrollContainer.innerHTML =
        `
        <button id="enrollButton" class="btn btn-info mt-3">
            Enroll
        </button>
        `
        document.querySelector('#enrollContainer').addEventListener('click', (e) => {
            e.preventDefault()
    
            const isEnrolledHere = data.enrollees.some(enrollee => userId === enrollee.userId);
    
            if (!isEnrolledHere) {
                fetch('https://course-booking-v2.herokuapp.com/api/users/enroll', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        courseId: courseId
                    })
                })
                .then(res => res.json())
                .then(data => {
                    if (data === true) {
                        alert('Thank you for enrolling! See you!');
                        window.location.replace('./courses.html');
                    } else {
                        alert('Something went wrong.');
                    }
                })
            } else {
                alert('Youre already enrolled in this course!')
            }
        })

    } else {
        enrollContainer.innerHTML =
        `
            <a href="./login.html" class="btn btn-info mt-3">
                Login to enroll
            </a>
        `
    }
    


    
})
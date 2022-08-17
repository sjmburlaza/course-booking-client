let params = new URLSearchParams(window.location.search);
let courseId = params.get('courseId');
let token = localStorage.getItem('token');
let userId = localStorage.getItem('id');

console.log(userId)

let courseName = document.querySelector('#courseName');
let courseDescription = document.querySelector('#courseDescription');
let coursePrice = document.querySelector('#coursePrice');
let enrollContainer = document.querySelector('#enrollContainer');

fetch(`https://course-booking-v2.herokuapp.com/api/courses/${courseId}`)
.then(res => res.json())
.then(data => {
    console.log(data)

    courseName.innerHTML = data.name;
    coursePrice.innerHTML = data.price;
    courseDescription.innerHTML = data.description;
    enrollContainer.innerHTML =
        `
        <button id="enrollButton" class="btn btn-block btn-info">
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
                console.log(data)
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
})
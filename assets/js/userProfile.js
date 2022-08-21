
let params = new URLSearchParams(window.location.search);
// let courseId = params.get('courseId')
// let userId = params.get('userId')
let token = localStorage.getItem('token');

let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let enrollmentsContainer = document.querySelector("#coursesContainer");


fetch(`https://course-booking-v2.herokuapp.com/api/users/details`, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'token': `Bearer ${token}`
		}
})
.then(res => res.json())
.then(data => {
    console.log(data)

    firstName.innerHTML = data.firstName
    lastName.innerHTML = data.lastName
    email.innerHTML = data.email

    const enrollments = data.enrollments

    if (!enrollmentsContainer &&  enrollments.length < 1) {
        enrollmentsContainer.innerHTML = 'No classes enrolled.'
    }

    for(let subject of enrollments){
        fetch(`https://course-booking-v2.herokuapp.com/api/courses/${subject.courseId}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            const node = document.createElement('li');
            const textnode = document.createTextNode(`${data.name}`);
            node.appendChild(textnode);
            enrollmentsContainer.appendChild(node);

        })
    }
})



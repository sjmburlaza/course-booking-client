let params = new URLSearchParams(window.location.search);
let courseId = params.get('courseId');
let token = localStorage.getItem('token');

let courseName = document.querySelector('#courseName');
let coursePrice = document.querySelector('#coursePrice');
let courseDescription = document.querySelector('#courseDescription');
let enrolleesContainer = document.querySelector('#enrolleesContainer');


fetch(`http://localhost:4000/api/courses/${courseId}`)
.then(res => res.json())
.then(data => {

    courseName.innerHTML = data.name;
    coursePrice.innerHTML = data.price;
    courseDescription.innerHTML = data.description;

    const enrollees = data.enrollees;

    if (enrollees.length < 1) {
        enrolleesContainer.innerHTML = 'No enrollees yet.'
    }

    for (let enrollee of enrollees) {
        fetch(`http://localhost:4000/api/users/${enrollee.userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            const node = document.createElement('li');
            const textnode = document.createTextNode(`${data.firstName} ${data.lastName}`);
            node.appendChild(textnode);
            enrolleesContainer.appendChild(node);
        })
    }

})


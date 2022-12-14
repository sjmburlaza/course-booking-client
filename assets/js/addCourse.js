let addCourse = document.querySelector('#createCourse');

addCourse.addEventListener('submit', (e) => {
	e.preventDefault()

	let name = document.querySelector('#courseName').value;
	let description = document.querySelector('#courseDescription').value;
	let price = document.querySelector('#coursePrice').value;
    let image = document.querySelector('#courseImage').value;

	let token = localStorage.getItem('token');

	fetch('http://localhost:4000/api/courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: name,
            description: description,
            price: price,
            image: image
        })
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data);

        //creation of new course successful
        if(data == true) {
            //redirect to course page
            alert('Course succesfully created!');
            window.location.replace("./courses.html");
        } else {
            //redirect in creating course
            alert("Something went wrong.");
        }
    })
})
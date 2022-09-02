let params = new URLSearchParams(window.location.search);
let courseId = params.get('courseId');

let editCourse = document.querySelector('#editCourse');
let courseName = document.querySelector('#courseName');
let courseDescription = document.querySelector('#courseDescription');
let coursePrice = document.querySelector('#coursePrice');
let courseImage = document.querySelector('#courseImage');


function getOriginalValue() {
    fetch(`https://course-booking-v2.herokuapp.com/api/courses/${courseId}`)
    .then(res => res.json())
    .then(data => {
        courseName.value = data.name;
        courseDescription.value = data.description;
        coursePrice.value = data.price;
        courseImage.value = data.image;
    })
}

getOriginalValue();

editCourse.addEventListener('submit', (e) => {
	e.preventDefault();

	let name = courseName.value;
	let description = courseDescription.value;
	let price = coursePrice.value;
    let image = courseImage.value;

	let params = new URLSearchParams(window.location.search);
	let courseId = params.get('courseId');
	let token = localStorage.getItem('token');


	fetch(`https://course-booking-v2.herokuapp.com/api/courses`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'token': `Bearer ${token}`
        },
        body: JSON.stringify({
            courseId,
            name: name,
            description: description,
            price: price,
            image: image
        })
    })
    .then(res => res.json())
    .then(data => {

        // console.log(data)

        //editing of old course successful
        if(data === true) {
            //redirect to course page
            alert('Course succesfully edited!');
            window.location.replace("./courses.html");
        } else {
            
            alert("Something went wrong.");

        }
    })
})

editCourse.addEventListener('reset', getOriginalValue);
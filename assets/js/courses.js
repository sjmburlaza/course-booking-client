let adminUser = localStorage.getItem('isAdmin');

let cardFooter;

// fetch request to all available courses
fetch('https://course-booking-v2.herokuapp.com/api/courses')
.then(res => res.json())
.then(data => {
    let courseData;

    if (data.length < 1) {
        courseData = 'No courses available.'
    } else {
        courseData = data.map(course => {
            if (!adminUser || adminUser === 'false') {
                cardFooter = 
                `
                <a href="./course.html?courseId=${course._id}"value="{course.id}" class="btn btn-info text-white btn-block editButton">
					Select Course
				</a>
                `
            } else {
                cardFooter =
                `
					<a href="./enrollees.html?courseId=${course._id}"value="{course._id}" class="btn btn-info text-white btn-block dangerButton">Enrollees</a>
					<a href="./editCourse.html?courseId=${course._id}"value="{course._id}" class="btn btn-warning text-white btn-block editButton">Edit</a>
					<a href="./deleteCourse.html?courseId=${course._id}"value="{course._id}" class="btn btn-danger text-white btn-block dangerButton">Disable</a>
				`
            }

            return(
                `
                <div class="col-md-6 my-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${course.name}</h5>
                            <p class="card-text text-left">${course.description}</p>
                            <p class="card-text text-right">Price: ₱${course.price}</p>
                        </div>
                        <div class="card-footer">
                            ${cardFooter}
                        </div>
                    </div>
                </div>
                `
            )
        }).join('');
    }
    let courseContainer = document.querySelector('#courseContainer');
    courseContainer.innerHTML = courseData;
})

//add modal - if user is an admin, there will be a button to add a course
let modalButton = document.querySelector("#adminButton")

if(adminUser === false || !adminUser) {
	//if user is regular user, do not show add course button
	modalButton.innerHTML = null
} else {
	//display add course if user is an admin
	modalButton.innerHTML =
	`
		<div class="col-md-2 offset-md-10 my-1">
			<a href="./addCourse.html" class="btn btn-block btn-info">Add Course</a>
		</div>
		<div class="col-md-2 offset-md-10 my-1">
			<a href="./archive.html" class="btn btn-block btn-danger">Archive</a>
		</div>
	`
}
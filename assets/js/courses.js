let adminUser = localStorage.getItem('isAdmin');
let cardFooter;
let cardBody;

// fetch request to all available courses
fetch('http://localhost:4000/api/courses')
.then(res => res.json())
.then(data => {
    let courseData;

    if (data.length < 1) {
        courseData = 'No courses available.'
    } else {
        courseData = data.map(course => {
            console.log(course)

            if (!userToken) {
                cardFooter = 
                `
                    <a href="./courseDetails.html?courseId=${course._id}"value="{course.id}" class="btn btn-info text-white btn-block editButton">
                        Course Details
                    </a>
                `
            } else {
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
                    <div class="text-center">
                        <a href="./enrollees.html?courseId=${course._id}"value="{course._id}" class="btn btn-info card-button">Enrollees</a>
                        <a href="./editCourse.html?courseId=${course._id}"value="{course._id}" class="btn btn-warning card-button">Edit</a>
                        <a href="./deleteCourse.html?courseId=${course._id}"value="{course._id}" class="btn btn-danger card-button">Disable</a>
                    </div>
                    `
                }
            }

            if (userToken && cardFooter) {
                return(
                    `
                    <div class="col-md-6 my-3">
                        <div class="card">
                            <img class="card-img-top" src="${course.image}" alt="Card image cap">
                            <div class="card-body">
                                <h3 class="card-title">${course.name}</h3>
                                <p class="card-text text-left">${course.description}</p>
                                <p class="card-text text-left">Price: ₱${course.price}</p>
                            </div>
                            <div class="card-footer">
                                ${cardFooter}
                            </div>
                        </div>
                    </div>
                    `
                )
            } else {
                return(
                    `
                    <div class="col-md-6 my-3">
                        <div class="card">
                            <img class="card-img-top" src="${course.image}" alt="Card image cap">
                            <div class="card-body">
                                <h3 class="card-title">${course.name}</h3>
                            </div>
                            <div class="card-footer">
                                ${cardFooter}
                            </div>
                        </div>
                    </div>
                    `
                )
            }
            
        }).join('');
    }
    let coursesContainer = document.querySelector('#coursesContainer');
    coursesContainer.innerHTML = courseData;
})

//add modal - if user is an admin, there will be a button to add a course
let modalButton = document.querySelector("#adminButton")

if(adminUser === 'false' || !adminUser) {
	//if user is regular user, do not show add course button
	modalButton.innerHTML = null
} else {
	//display add course if user is an admin
	modalButton.innerHTML =
	`
		<div class="col-md-3 offset-md-9 my-1">
			<a href="./addCourse.html" class="btn btn-block btn-info">Create New Course</a>
		</div>
		<div class="col-md-3 offset-md-9 my-1">
			<a href="./archive.html" class="btn btn-block btn-danger">Archived Courses</a>
		</div>
	`
}
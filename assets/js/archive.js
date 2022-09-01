let adminUser = localStorage.getItem("isAdmin");
let cardFooter;

fetch('http://localhost:4000/api/courses/archive')
	.then(res => res.json())
	.then(data => {

	//courseData will store the data to be rendered
	let courseData;

	if(data.length < 1) {
		courseData = "No courses available."
	
	} else {
		//else iterate the courses collection and display each course
		courseData = data.map(course => {

			//if the user is regular user, display when the course was created
			if(adminUser === "true" ) {
				cardFooter =
				`
					<a href="./enableCourse.html?courseId=${course._id}"value="{course._id}" class="btn btn-danger text-white btn-block dangerButton">Enable</a>
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
		}).join("");
	}
	let container = document.querySelector("#coursesContainer")


	//get the value of courseData and assign it as the #courseContainer's content
	container.innerHTML = courseData;

})


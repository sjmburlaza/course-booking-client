let params = new URLSearchParams(window.location.search)
let courseId = params.get('courseId')
let token = localStorage.getItem('token')

fetch(`http://localhost:4000/api/courses/${courseId}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'token': `Bearer ${token}`
    },
    body: JSON.stringify({
        courseId,
    })
})
.then(res => res.json())
.then(data => {
    console.log(data)
    if (isActive = "false"){
        return isActive = !isActive;
    }
})
.then(data => {

    if(data === false) {
        alert('Course succesfully enabled!');
        window.location.replace("./courses.html");
    } else {
        alert("Something went wrong.");
    }
})

	




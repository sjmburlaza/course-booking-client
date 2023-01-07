let params = new URLSearchParams(window.location.search)
let courseId = params.get('courseId')
let token = localStorage.getItem('token')


fetch(`http://localhost:4000/api/courses/${courseId}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'token': `Bearer ${token}`
    },
    body: JSON.stringify({
        courseId,
        // isActive: isActive
    })
})
.then(res => res.json())
.then(data => {
    
    //deletion course successful
    if(data === true) {
        //redirect to course page
        alert('Course succesfully disabled!');
        window.location.replace("./courses.html");
    } else {
        alert("Something went wrong.");
    }
})




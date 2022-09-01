let registerForm = document.querySelector('#registerForm');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let firstName = document.querySelector("#firstName").value;
	let lastName = document.querySelector("#lastName").value;
	let email = document.querySelector("#email").value;
	let password = document.querySelector("#password").value;
	let confirmPassword = document.querySelector("#confirmPassword").value;

    if ((password !== '' && confirmPassword  !== '') && (confirmPassword === password)) {
        fetch('http://localhost:4000/api/users/email-exists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data === false) {
                fetch('http://localhost:4000/api/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password,
                    })
                })
                .then(res => res.json())
                .then(data => {
                    if (!!data) {
                        alert('Registered succesfully');
                        window.location.replace('./login.html');
                    } else {
                        alert('Something went wrong');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
        })

    } else {
        alert('Please check information provided.');
    }
})
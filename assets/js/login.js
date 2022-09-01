let loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    if (email === '' || password === '') {
        alert('Please input you email and/or password');
    } else {
        fetch('http://localhost:4000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.accessToken) {

                localStorage.setItem('token', data.accessToken);

                // send fetch request to decode JWT and obtain user ID and role for storing in context
                fetch('http://localhost:4000/api/users/details', {
                    headers: {
                        'token': `Bearer ${data.accessToken}`
                    }
                })
                .then(res => res.json())
                .then(data => {

                    localStorage.setItem('id', data._id);
                    localStorage.setItem('isAdmin', data.isAdmin);
                    window.location.replace('./courses.html');
                })
            } else {
                // when authentication fails
                alert('Something went wrong!');
            }
        })
    }
})
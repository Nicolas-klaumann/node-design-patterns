document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const reportForm = document.getElementById('reportForm');

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });
                const data = await response.text();
                document.getElementById('response').innerText = data;
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }

    if (reportForm) {
        reportForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const header = document.getElementById('header').checked;
            const footer = document.getElementById('footer').checked;

            try {
                const response = await fetch(`/report?header=${header}&footer=${footer}`);
                const data = await response.json();
                document.getElementById('reportOutput').innerText = JSON.stringify(data, null, 2);
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }
});

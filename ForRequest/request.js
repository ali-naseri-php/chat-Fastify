const fetch = require('node-fetch'); // برای ارسال درخواست HTTP
const url = 'http://localhost:8080/api/auth/login'; // آدرس سرور

const data = {
    email: 'alinaseri@gmail.com',
    password: 'echo ali'
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => console.log('✅ Response:', data))
    .catch(error => console.error('❌ Error:', error));

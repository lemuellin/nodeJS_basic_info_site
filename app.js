const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! Home - express');
});

app.get('/about', (req, res) => {
    res.send('ABOUT - express');
})

app.get('/contact-me', (req, res) => {
    res.send('CONTACT - express');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

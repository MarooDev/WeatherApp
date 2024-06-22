import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('This is your page.');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

console.log("Hello friend!");
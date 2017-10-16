const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// handle app's static files
app.use(express.static('public'));

// handle vendor assets
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
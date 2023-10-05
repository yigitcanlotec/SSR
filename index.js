const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const client = require('./db');

// Example query

const PORT = 3000;
const app = express();

app.use(express.urlencoded({extended: false}));
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', async (req, res) => {
    const queryString = 'SELECT * FROM todo';
    const data = (await client.query(queryString)).rows;

    res.render('home', {
        message: 'Challenge 2',
        data: data,
        // id: data.map((item) => item.id),
        // title: data.map((item) => item.title),
        // assignee: data.map((item) => item.assignee),
        // done: data.map((item) => item.done),
    });
});

app.post('/insert_data', async (req, res) => {
    const formData = req.body; // Form data sent from the client
    console.log(formData);
    
    const queryString = `INSERT INTO todo (title, assignee, done) values ('${formData.title}', '${formData.assignee}', ${formData.done === undefined ? false : true});`;

    await client.query(queryString);

    res.redirect('/');
});

app.listen(PORT, () => {
    console.log('Server is listening on port 3000');
});

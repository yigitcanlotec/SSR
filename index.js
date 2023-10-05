const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const client = require('./db');

// Example query

const PORT = 3000;
const app = express();

app.use(express.json());
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', async (req, res) => {
    const text = 'SELECT * FROM todo';
    const data = (await client.query(text)).rows;

    res.render('home', {
        message: 'Challenge 2',
        data: data,
        // id: data.map((item) => item.id),
        // title: data.map((item) => item.title),
        // assignee: data.map((item) => item.assignee),
        // done: data.map((item) => item.done),
    });
});

app.post('/submit', (req,res)=>{
  const formData = req.body; // Form data sent from the client

  // Process the form data
  console.log('Received form data:', formData);

  // Send a response back to the client
  res.json({ message: 'Data received successfully!' });
});


app.listen(PORT, () => {
    console.log('Server is listening on port 3000');
});

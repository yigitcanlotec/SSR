const express = require("express");
const {engine}  = require('express-handlebars');
const path = require('path');
const {Client} = require("pg");


 
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'todo_app',
  password: 'pass123',
  port: 5432,
})

client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
        // Perform database operations here
    })
    .catch(err => {
        console.error('Error connecting to PostgreSQL database', err);
    });

// Example query
client.query('SELECT * FROM todo', (err, res) => {
    if (err) {
        console.error('Error executing query', err);
    } else {
        console.log('Query result:', res.rows);
    }

    // End the client connection (don't forget to do this after you're done with database operations)
    client.end();
});


const PORT = 3000;
const app = express();



app.engine('handlebars', engine({defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname + '/public')));

 
app.get('/', (req, res) => {
  res.render('home', {

      message: 'Challenge 2',
      tasks: [1,2,3,4,50]
  });
});

app.listen(PORT, () => {
  console.log("Server is listening on port 3000");
});
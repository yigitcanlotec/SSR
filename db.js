const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'todo_app',
    password: 'pass123',
    port: 5432,
});

client
    .connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
        // Perform database operations here
    })
    .catch((err) => {
        console.error('Error connecting to PostgreSQL database', err);
    });

module.exports = client;

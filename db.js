const { Client } = require('pg');

const [ps,...args] = process.argv;


const client = new Client({
    user: args[1] ||'postgres',
    host: args[2] || 'localhost',
    database: args[3] || 'todo_app',
    password: args[4] || 'pass123',
    port: args[5] ||5432,
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

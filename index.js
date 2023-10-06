const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const client = require('./db');



const PORT = 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', async (req, res) => {
    const queryString = 'SELECT * FROM todo ORDER BY id ASC';
    const data = (await client.query(queryString)).rows;

    res.render('home', {
        message: 'Challenge 2',
        data: data,
       
    });
});

app.get('/user/:userId', async (req, res) => {
    const queryString = `SELECT * FROM todo WHERE (id = ${req.params.userId});`;
    const data = (await client.query(queryString)).rows;
   
   
    res.render('user', {
        data: data,
    });
});


app.post('/', async (req, res) => {
    const formData = req.body; // Form data sent from the client
    console.log(formData);
    
    const queryString = `INSERT INTO todo (title, assignee, done) values ('${formData.title}', '${formData.assignee}', ${formData.done === undefined ? false : true});`;

    await client.query(queryString);

    res.redirect('/');
   
});


app.post('/delete', async (req,res)=>{
    const queryString = `DELETE FROM todo WHERE (id = ${req.body.silText})`;
    await client.query(queryString);


    res.redirect('/');
});


app.post('/update', async (req,res)=>{
    const queryString = `UPDATE todo 
                            SET
                                id=${req.body.id},
                                title='${req.body.title}',
                                assignee='${req.body.assignee}',
                                done=${req.body.done} 
                            WHERE (id = ${req.body.oldId})`;
    client.query(queryString).then(()=>{
        res.redirect('/');
    }).catch((err)=>{
        res.send(err);
    })
    
});


app.listen(PORT, () => {
    console.log('Server is listening on port 3000');
});
